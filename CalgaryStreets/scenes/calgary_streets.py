from manim import *

class CalgaryStreetsScene(Scene):
    def construct(self):
        text = Text("Calgary Street Growth")
        self.play(Write(text))
        self.wait(2)
