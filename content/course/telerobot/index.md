---
title: "Automation and Robotics: Tele-operated Rescue Robot"
authors:
- admin
- Cheng-Yang Liu

summary: Develop a tele-operated rescue robot.
tags:
- Robotics
date: "2011-01-07T00:00:00Z"

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
{{< youtube HOo_ufVta_I >}}

### Project Goal
We have developed a tele-operated rescue robot in this project. This robot is operated remotely to navigate in a complicated environment and continuously sending the video signal to the control site. The robot can be controlled to clear the environment and move the rescue target from the field. To achieve the goal, we have designed a mobile robot platform and software to control the robot. This robot can be controlled by using a gamepad. A wireless camera and two light sensors were mounted on the mobile platform. Based on the sensing information, we developed a remote operation system to control the mobile platform. A semi-automatous navigating system is developed based on light sensors to follow the black line.

The operator and the robot are located in different rooms. The robot needs to avoid the random obstacles autonomously or semi-autonomously in the rescue field. The robot has to start from Start  Point and travel through all the Check Points and areas sequentially. In each area, the robot has to complete specific tasks. In Area 1, the robot has to clear everything in the area. Checkpoint 2 and 3 are before and after the dark area as shown in the figure. The dark area is set up by tables and blankets to simulate the scenario in which the camera is difficult to obtain the image. The follow line algorithm is implemented to semi-autonomously navigate through this area. In the final checkpoint, Checkpoint 4, the robot needs to carry assigned objects to the next checkpoint, Checkpoint 5.

{{< figure src="images/01.jpg" title="Rescue field" >}}

### Mechanism Design
We used Lego Mindstorm NXT and TETRIX to build our rescue robot. There are four parts in our robot, which are control part, sensing part, mobile part, and gripper part. First, in the control part, we use Lego NXT to control DC motors and servo motors. The NXT is connected to the remote laptop through Bluetooth. The robot program is developed in MSRD. Second, in the sensing part, we use a wireless camera to provide remote robot view and two light sensors as additional lighting resources to overcome the dark area. In addition, we use two light sensors to develop the follow line algorithm in the dark area.

{{< figure src="images/02.jpg" title="Lego NXT, wireless camera, and two light sensors" >}}

{{< figure src="images/05.jpg" title="Two light sensors for the follow line algorithm" >}}

Third, in the mobile part, we use two DC motors to drive rear wheels and omni wheels as front wheels for turning. Fourth, in the gripper part, we use two servo motors to control the gripper. The first motor controls the grasp motion with one degree-of-freedom. The second motor controls the raising motion to lift the grasped object. Finally, to avoid tipping over, we place NXT, battery, and camera on the rear side of the robot to balance the gripping weight.

{{< figure src="images/03.jpg" title="Left rear wheel with DC motor" >}}

{{< figure src="images/04.jpg" title="Right rear wheel with DC motor" >}}

{{< figure src="images/06.jpg" title="Gripper design" >}}

{{< figure src="images/09.jpg" title="Battery and NXT" >}}

{{< youtube jVtL8ig18F0 >}}

### Algorithm Design
We use a gamepad to control the rescue robot remotely. The robot can move forward, backward, and rotate clockwise and counterclockwise. The servo motors on the gripper are programmed with predefined angles and triggered by buttons on the gamepad. The follow line algorithm is triggered by the operator. In the follow line mode, the robot keeps moving forward slowly. If one side of the light sensor detects the black line, the robot will turn toward that direction slightly.

{{< figure src="images/07.png" title="DC motor control" >}}

{{< figure src="images/08.png" title="Servo motor control" >}}