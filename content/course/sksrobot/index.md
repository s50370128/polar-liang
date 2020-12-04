---
title: "Visualization in AEC: SKS Security Robot"
authors:
- admin
- Cheng-Yang Liu

summary: Develop a tele-operated security robot in the simulator.
tags:
- Robotics
- Visualization
date: "2011-06-09T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  focal_point: Smart
  preview_only: true

links:
url_code: "https://github.com/s50370128/sksrobot"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---
{{< youtube MAQ3EbeC1dc >}}

### Project Goal
We’re motivated by a robotic competition. The goal of the competition is to make a robot that can manage domestic problems including security and room cleaning. During the time we make the prototype, we try to simulate the reaction of the robot on the computer. Therefore we make this game, and it also can let people know about the competition. There are two missions in the game. The first mission is to climb up the stairs right to the beginning position. The second mission is to pick up a small box in a room, then put it in the red area.

### Program Design
We use Microsoft XNA and C# to develop the robot simulation. First, we construct the model in Sketchup and import to XNA. The robot is built in XNA and can be controlled by keyboard to move forward, backward, turn right, and turn left. The robot can also pick up the box and place at the designated location.

