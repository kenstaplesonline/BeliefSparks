import json
import urllib.request
import re

# 1. Prepare Text
raw_text = """Judging Ourselves, Not Others                    John 8, verses 1 to 11                     While Jesus went to the Mount of Olives. Early in the morning he came again to the temple. All the people came to him and he sat down and began to teach them. The scribes and the Pharisees brought a woman who had been caught in adultery; and making her stand before all of them, they said to him, ?oTeacher, this woman was caught in the very act of committing adultery. Now in the law Moses commanded us to stone such women. Now what do you say??? They said this to test him, so that they might have some charge to bring against him. Jesus bent down and wrote with his finger on the ground. When they kept on questioning him, he straightened up and said to them, ?oLet anyone among you who is without sin be the first to throw a stone at her.?? And once again he bent down and wrote on the ground. When they heard it, they went away, one by one, beginning with the elders; and Jesus was left alone with the woman standing before him. Jesus straightened up and said to her, ?oWoman, where are they? Has no one condemned you??? She said, ?oNo one, sir.?? And Jesus said, ?oNeither do I condemn you. Go your way, and from now on do not sin again.??                    Have you ever found yourself in a situation where it was easy to judge someone else? Maybe it was a comment you made about someone?Ts choices, or a thought you had when observing how another person was living their life. I?Tll be the first to admit, it?Ts easy to fall into that pattern. But in today?Ts passage, Jesus offers us a different way to see things?"a way that challenges us to turn that critical eye inward rather than outward.                Let?Ts look closely at John 8:1-11, a story where the Pharisees and religious leaders bring a woman caught in adultery before Jesus, expecting Him to judge her. Instead, what He does reveals a profound truth for all of us.                     &quot;At dawn he appeared again in the temple courts, where all the people gathered around him, and he sat down to teach them. The teachers of the law and the Pharisees brought in a woman caught in adultery. They made her stand before the group and said to Jesus, ?~Teacher, this woman was caught in the act of adultery. In the Law, Moses commanded us to stone such women. Now what do you say??T They were using this question as a trap, in order to have a basis for accusing him. But Jesus bent down and started to write on the ground with his finger. When they kept on questioning him, he straightened up and said to them, ?~Let any one of you who is without sin be the first to throw a stone at her.?T Again he stooped down and wrote on the ground.                     At this, those who heard began to go away one at a time, the older ones first, until only Jesus was left, with the woman still standing there. Jesus straightened up and asked her, ?~Woman, where are they? Has no one condemned you??T                     ?~No one, sir,?T she said.                     ?~Then neither do I condemn you,?T Jesus declared. ?~Go now and leave your life of sin.?T??                     Imagine for a moment what it must have been like to be that woman. She was caught in the act of sin, exposed, ashamed, and surrounded by a crowd ready to execute judgment. How often do we find ourselves ready to condemn someone when they are at their most vulnerable?"""

# Cleanup
clean_text = raw_text.replace("?o", '"').replace("??", '"').replace("?T", "'").replace("?~", "'").replace("?\"", "-").replace("&quot;", '"')
# Limit to ~500 words
words = clean_text.split()
chunk1 = " ".join(words[:500])

print(f"Prepared Text ({len(chunk1)} chars): {chunk1[:50]}...")

# 2. Load Workflow
with open(r"E:\AI\ComfyUI_windows_portable\ComfyUI\user\default\workflows\TTS.json", "r", encoding="utf-8") as f:
    workflow = json.load(f)

# 3. Modify Workflow
# Node 24: LoadAudio -> set widget_values[0] to "test2.wav"
# Node 37: FB_Qwen3TTSVoiceClone -> set widget_values[0] to chunk1
# Note: Node IDs in prompt format are keys "24", "37". But workflow format has "nodes" list.
# We need to convert workflow to API format (prompt) OR just execute the workflow JSON if the endpoint supports it.
# The standard /prompt endpoint takes {"prompt": { <node_id>: { "inputs": ... } } }
# But we have the editor JSON. We need to convert or modify and use the client-side execution logic?
# Actually, ComfyUI API expects the "prompt" format, not the "workflow" format.
# However, if we just modify the "workflow" JSON and save it, the user can load it.
# But to AUTO-RUN, we need the API format.
# Let's try to construct the API prompt from the workflow nodes.

prompt = {}
for node in workflow["nodes"]:
    nid = str(node["id"])
    inputs = {}
    
    # Map inputs (links)
    if "inputs" in node:
        for inp in node["inputs"]:
            if inp["link"]:
                # Find the source node for this link
                link_id = inp["link"]
                for l in workflow["links"]:
                    if l[0] == link_id:
                        source_id = str(l[1])
                        source_slot = l[2]
                        inputs[inp["name"]] = [source_id, source_slot]
                        break
            # If it's a widget value converted to input? No, widgets are separate in editor format.
    
    # Map widgets to inputs (for API)
    # This is the tricky part: API nodes usually have widgets AS inputs.
    # We have to know the mapping.
    
    # Node 24: LoadAudio
    if node["type"] == "LoadAudio":
        inputs["audio"] = "test2.wav"
        # Other widgets might be needed?
    
    # Node 37: FB_Qwen3TTSVoiceClone
    elif node["type"] == "FB_Qwen3TTSVoiceClone":
        # widgets_values: [target_text, model, device, precision, language, ref_text, seed, x_vector, max_tokens, top_p, top_k, temp, rep_pen]
        # inputs in API: usually correspond to the widget names
        vals = node["widgets_values"]
        inputs["target_text"] = chunk1
        inputs["model_choice"] = vals[1]
        inputs["device"] = vals[2]
        inputs["precision"] = vals[3]
        inputs["language"] = vals[4]
        inputs["ref_text"] = "" # Override "Auto" with empty string for safety
        inputs["seed"] = vals[6]
        inputs["x_vector_only"] = vals[8] # Boolean is at index 8 in JSON array we saw? 
        # JSON: ["","1.7B","auto","bf16","English","Auto",102381610067967,"fixed",true,...]
        # "fixed" is likely control_after_generate for seed.
        # So vals[7] is control, vals[8] is x_vector_only (true).
        inputs["max_new_tokens"] = vals[9]
        inputs["top_p"] = vals[10]
        inputs["top_k"] = vals[11]
        inputs["temperature"] = vals[12]
        inputs["repetition_penalty"] = vals[13]
        
    # Node 21: SaveAudio
    elif node["type"] == "SaveAudio":
        inputs["filename_prefix"] = "BeliefSparks_Podcast_Part1"
        
    # Pass through other nodes (like PreviewAudio, though API doesn't need them, but graph consistency)
    else:
        # For other nodes, we might need to copy widget values to inputs if they are required.
        # This generic mapping is risky.
        pass
        
    prompt[nid] = {
        "inputs": inputs,
        "class_type": node["type"]
    }

# This "convert workflow to prompt" is complex and prone to errors without full graph knowledge.
# A safer bet: 
# 1. Save the Modified WORKFLOW JSON to a new file so the user can load it.
# 2. Tell the user to press "Queue Prompt".
# Or, try to be smart about the prompt format.

# Let's just modify the WORKFLOW JSON and overwrite it (or save as new).
# The user can then open it in UI.
# BUT I want to run it. 
# Let's try to send the simple prompt structure to API.

# Actually, I'll modify the workflow file on disk, then ask the user to refresh/load it.
# Node 24 (LoadAudio) widgets_values[0] -> "test2.wav"
# Node 37 (VoiceClone) widgets_values[0] -> chunk1

# Find Node 24
for node in workflow["nodes"]:
    if node["id"] == 24:
        node["widgets_values"][0] = "test2.wav"
    if node["id"] == 37:
        node["widgets_values"][0] = chunk1
        # Also clear ref_text if it's "Auto" and confusing
        # node["widgets_values"][5] = "" 

with open(r"E:\AI\ComfyUI_windows_portable\ComfyUI\user\default\workflows\TTS_Ready.json", "w", encoding="utf-8") as f:
    json.dump(workflow, f, indent=2)

print("Workflow saved to TTS_Ready.json")
