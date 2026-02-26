# CACNAE Studios - Content Factory Agents

**Last Updated:** 2026-02-26

---

## Content Pipeline Overview

10-agent content factory model for CACNAE Studios production workflow.

| Agent | Role | Emoji | Workspace | Status |
|--------|------|-------|-----------|--------|
| **Kinesis** | Coordinator | ⚡ | main | **Active** |
| **Veritas** | Ideator | 🎭 | agents/veritas | **Standby** |
| **Curio** | Researcher | 🔍 | agents/curio | **Standby** |
| **Logos** | Writer | ✍️ | agents/logos | **Standby** |
| **Aethel** | Editor | ✏️ | agents/aethel | **Standby** |
| **Luma** | SEO Specialist | 🔦 | agents/luma | **Standby** |
| **Vertex** | Visual Director | 🎨 | agents/vertex | **Standby** |
| **Vox** | Publisher | 🚀 | agents/vox | **Standby** |
| **Prisma** | Analyst | 📊 | agents/prisma | **Standby** |
| **Krypto** | Financial Agent | 💰 | agents/krypto | **Active** |

---

## Content Pipeline Flow

```
IDEATOR → COORDINATOR → RESEARCHER → WRITER → EDITOR → SEO → VISUAL → PUBLISHER → ANALYST
    🎭         ⚡           🔍         ✍️       ✏️      🔦     🎨        🚀         📊
                                                                              ↓
                                                                         FINANCIAL 💰
```

**Krypto Integration:** Financial agent supports all stages with cost analysis, budget tracking, and revenue modeling.

---

## Current Status (2026-02-26)

- **All 10 agents have SOUL.md files** ✅
- **All agents registered in OpenClaw gateway** ✅
- **Telegram bot tokens received** for Vox, Prisma, Krypto ✅
- **Awaiting:** Telegram forum setup and agent routing configuration

---

## Agent Registration

**Registration Date:** 2026-02-23

All agents registered as **OpenClaw isolated agents**:

| Agent | Registered | Model |
|--------|-----------|-------|
| **Curio** 🔍 | ✅ Yes | google/gemini-3.1-pro-preview |
| **Veritas** 🎭 | ✅ Yes | google/gemini-3.1-pro-preview |
| **Logos** ✍️ | ✅ Yes | google/gemini-3.1-pro-preview |
| **Aethel** ✏️ | ✅ Yes | google/gemini-3.1-pro-preview |
| **Vertex** 🎨 | ✅ Yes | google/gemini-3.1-pro-preview |
| **Luma** 🔦 | ✅ Yes | google/gemini-3.1-pro-preview |
| **Vox** 🚀 | ✅ Yes | google/gemini-3.1-pro-preview |
| **Prisma** 📊 | ✅ Yes | google/gemini-3.1-pro-preview |
| **Krypto** 💰 | ✅ Yes | google/gemini-3.1-pro-preview |

---

## Telegram Bot Tokens

| Agent | Bot Token | Status |
|-------|-----------|--------|
| **Vox** 🚀 | ✅ Received | Pending setup |
| **Prisma** 📊 | ✅ Received | Pending setup |
| **Krypto** 💰 | ✅ Received | Pending setup |

**Note:** Bot tokens stored securely and not logged to MEMORY.md

---

## How to Work With Independent Agents

### For Kinesis (COO):
- Each agent has their own workspace and memory files
- When assigning work, reference their specific workspace
- Each agent tracks their own project progress in their MEMORY.md
- Agents report independently through their sessions

### For Ken (CEO):
- Direct communication to specific agents for project updates
- Each agent maintains their own project documentation
- Review individual agent MEMORY.md files for project status
- Agents have full autonomy within their project scope

---

## Agent Profiles

### Veritas 🎭 - Ideator
**Assignment:** Generate content ideas, brainstorm angles, create creative briefs
**Workspace:** `workspace/agents/veritas/`
**Status:** Standby

### Curio 🔍 - Researcher
**Assignment:** Deep research, source verification, fact-checking, research briefs
**Workspace:** `workspace/agents/curio/`
**Status:** Standby

### Logos ✍️ - Writer
**Assignment:** Content writing, storytelling, draft creation
**Workspace:** `workspace/agents/logos/`
**Status:** Standby

### Aethel ✏️ - Editor
**Assignment:** Line editing, structural editing, fact review, voice consistency
**Workspace:** `workspace/agents/aethel/`
**Status:** Standby

### Luma 🔦 - SEO Specialist
**Assignment:** Keyword research, on-page optimization, technical SEO
**Workspace:** `workspace/agents/luma/`
**Status:** Standby

### Vertex 🎨 - Visual Director
**Assignment:** Graphics, 3D modeling, brand visuals, image optimization
**Workspace:** `workspace/agents/vertex/`
**Status:** Standby

### Vox 🚀 - Publisher
**Assignment:** Deployment, scheduling, distribution, verification
**Workspace:** `workspace/agents/vox/`
**Status:** Standby

### Prisma 📊 - Analyst
**Assignment:** Performance tracking, reporting, insights, goal tracking
**Workspace:** `workspace/agents/prisma/`
**Status:** Standby

### Krypto 💰 - Financial Agent
**Assignment:** Financial research, cryptocurrency monitoring, accounting, budget tracking
**Workspace:** `workspace/agents/krypto/`
**Status:** Active

---

## Workspace Structure

Each agent workspace contains:
- **IDENTITY.md** - Who the agent is and their assignment
- **MEMORY.md** - Project-specific work, findings, and progress
- **AGENTS.md** - Agent-specific protocols and best practices
- **SOUL.md** - Personality, philosophy, and work style
- **memory/YYYY-MM-DD.md** - Daily logs (created as needed)

**Cross-Reference:**
- All agents can read `../USER.md` for Ken's profile
- All agents can reference `../../skills/[skill-name]/SKILL.md` for skills
- Main workspace contains global MEMORY.md for CACNAE Studios overview

---

## Remaining Setup Tasks

- [ ] Create Telegram bots via BotFather
- [ ] Set up Telegram forum with topic threads
- [ ] Add multi-account Telegram config
- [ ] Add bindings for agent routing
- [ ] Enable agentToAgent communication
- [ ] Set up cron jobs for scheduled workflows
- [ ] Restructure projects into content pipeline

---

*This document tracks all content factory agents and their current status.*
