---
title: "Automation and Robotics: Robot Crane"
authors:
- admin
- Cheng-Yang Liu

summary: Develop a tele-operated robotic crane.
tags:
- Robotics
date: "2010-12-03T00:00:00Z"

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
{{< youtube JrgbsATMiz8 >}}

### Project Goal
We have to develop a robotic crane which can be operated remotely. This robotic crane is capable of operating in a predefined working area, picking up and lowering down an object freely. To achieve the goal, we have to design the robot hardware (at least three degree of freedom: slewing, trolley forward and backward, hoisting) and also a software that can control the crane to perform the tasks smoothly. The user can control the robotic crane by using mouse or keyboard to lift and lower the object. In this project, we also need to develop "fine  motion" operation  (column's bottom cannot move during the lifting operation).

{{< figure src="images/06.png" title="Lifting environment" >}}

### Mechanism Design
We used Lego Mindstorm NXT and TETRIX to build our robotic crane. There are three degrees-of-freedom in the robot, i.e., rotation, translation, and lifting. First, the rotation mechanism utilizes a servo motor and gears to rotate the jib clockwisely and conterclockwisely for up to 180 degrees. Next, the translation mechanism uses a cable and Lego motor to drag the trolley to move backward. Several wheels are placed at the back of the jib as counterweights to provide forward movement. In the final version, we change the wheels to two weights as counterweights. Finally, the lifting mechanism uses a Lego motor to drag the cable to lift the component.

{{< figure src="images/02.jpg" title="Servo motor for rotation mechanism" >}}

{{< figure src="images/01.jpg" title="Wheels as counterweight" >}}

{{< figure src="images/03.jpg" title="New counterweights" >}}

{{< figure src="images/04.jpg" title="Lifting mechanism" >}}

### UI Design
For the user interface and robot programming, we use LabVIEW to develop the control panel and control the robotic crane. The interface is discussed as follow:
1. The knob is used to control the slewing angle, i.e., the servo motor angle.
2. Start2 and direction2 switches are used to control the trolley forward and backward.
3. Start3 and direction3 swtiches are used to control the hoisting up and down.

{{< figure src="images/07.png" title="User interface" >}}

{{< figure src="images/05.png" title="LabVIEW program" >}}