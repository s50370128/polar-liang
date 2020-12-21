---
title: "Automation and Robotics: Virtual Rescue Robot"
authors:
- admin
- Cheng-Yang Liu

summary: Develop a search algorithm for an indoor rescue robot.
tags:
- Visualization
- Robotics
date: "2010-11-12T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  focal_point: Smart
  preview_only: true

links:
url_code: ""
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
{{< youtube fVaP1IQn9DQ >}}

### Project Goal
This project is to develop a program by using Visual Programming Language (VPL) for developing a rescue robot. The purpose of the robot is automatically searching human beings in a house during a disaster such as fire. The scenario is shown below. There are 5 areas in the house: Area 1 ~ Area 5 and the rescue robot is located at the front door. The robot should be able to travel around these areas in order to search for humans. One laser range finder is equipped on the robot which can provide 180 degrees of distance data. The robot can automatically avoid obstacles and enter different areas by using these distance data.

{{< figure src="images/01.jpg" title="Room layout" >}}

### Algorithm Design
Our solution is to let the rescue robot carefully follow the wall. The most difficult part is to tune parameters. We tried three different methods to control the robot. First, if the distance on the right side is too close to the obstacle, we keep the robot away from the right direction. If the distance is too far from the obstacle in the front direction, which means there is a space in front, we let the robot go straight. If the distance in the front direction is too close to the obstacle, we let the robot turn left. We obtain the right side distance from 0 degree of the laser range finder. However, this solution failed several times. In the second method, if the distance on the right side is very large, we let the robot turn 90 degree right. If the distance on the left side is very large, we let the robot turn 90 degree left. If the distance in the front direction is too small, we let the robot turn 90 degree left. However, the robot in this project is not capable of turning 90 degree accurately. In the third method, we use the same procedure as the first method and obtain the right side distance from 45 degree instead.

### VPL Design
The final algorithm in VPL is shown as follow:
1. Detect the distance in the front (90 degree) and right side (35 degree). If there is an obstacle, turn left.
2. Detect the distance on the right side (45 degree). If there is an open space, turn right. Also, if the robot is far away from the wall, turn right.
3. Detect the distance on the right side (0 degree and 45 degree). If the robot is too close to the wall, turn left.
4. Detect the distance in the front (90 degree). If there is an obstacle, turn left.

{{< figure src="images/02.jpg" title="VPL algorithm" >}}