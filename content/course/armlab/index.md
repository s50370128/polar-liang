---
title: "ROB550: Arm Lab"
authors:
- Brian Bittner
- admin
- Fu-Chun Ryan Yeh

summary:  Program a manipulator to identify object's position in a global frame using computer vision, design a gripper, and plan a means of grabbing the object and moving it to a new location.
tags:
- Robotics
- Computer Vision
date: "2016-12-03T00:00:00Z"

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
{{< youtube 865ODVh0nMM >}}

### Project Goal
We have to program a robotic arm to complete specific tasks. Basic encoding and control is required for the ﬁrst task, where the arm is taught a surgical procedure, and it repeats the behavior. In the second task, building on this architecture, we write a computer vision algorithm to ﬁnd Pokemon and design an actuated gripper to catch them. Finally, we embed knowledge of the robot’s end effector with respect to morphology via inverse kinematics, and use an FSM to implement a provably safe Pokemon extraction policy.

{{< figure src="images/01.png" title="Surgical procedure (left) and pokemon catching (right)" >}}

### Methods
In this section we cover what was implemented to enable an operation playing robotic arm.

#### Teach and Repeat
On the user interface we have point logging buttons titled Approach Point and Insertion Point. The user places the arm at a location approximately 10 cm above the insertion point and records the approach point. Then, placing the end effector carefully inside the insertion zone, this point is also recorded. The procedure described is done for ﬁve insertion zones sequentially. A program is written to have the arm follow a trajectory:
- from its current pose to an approach point
- to the corresponding insertion point
- back to the initial approach point
repeated for each insertion point. Since the approach points are 10 cm above the board, moving from the one approach point to the next will avoid collisions with the workspace.

The trajectory intersecting these points was a cubic spline. Initial and ﬁnal velocities can be set. In this case, we want the robot to leave a waypoint at rest and arrive at the next waypoint at rest. This will make insertions on the board more spatially predictable, avoiding unwanted collisions. Another nice quality of using cubic splines with zero derivative endpoints is that all values along the trajectory are bounded by your intial and ﬁnal value, providing a means for provably safe path planning. 

{{< figure src="images/02.png" title="The forward kinematic model of the four degrees-of-freedom arm" >}}

#### Pokemon Catch
Given the four degrees-of-freedom arm used for teach and repeat and a computer vision system, we build a robotic system that can
identify the location of color-coded Pokemon and place them in a designated location. The three main components that were integrated to accomplish this task were the design and manufacture of an actuated gripper, development of a computer vision classiﬁcation algorithm to determine the presence of pokemon and their relative location, and the inverse kinematics of the arm.

The gripper is attached to the end effector of the robot arm and needs to grab the pokemon from different orientations and prevent
dropping during the movement. We designed, 3D printed the gripper, attached to the servo moter, and mounted a sponge to increase the contact area. The sponge can provide enough friction to hold the pokemon in a low torque scenario while having a contact area which permits a less precision in object detection and inverse kinmatics. Our gripper’s strength are that it secures the Pokemon quite well in the two picking conﬁgurations given it’s large, high friction contact area. It’s weakness is that it’s mass will reduce the speed at which trajectories can be precisely executed. Since our strategy is to have an extremely reliable picker than a fast one, the design is highly sufﬁcient.

{{< figure src="images/03.png" title="Gripper design" >}}

{{< figure src="images/04.png" title="The ﬁnal version of the gripper included a sponge attached to the tips of the gripper" >}}

For the computer vision, we first calibate the affine transformation matrix by placing four objects at known locations and blob detection. Then we use blob detection to determine the locations of each Pokemon. For the blob detection, we first apply Gaussian blurring to reduce high frequency parts, then apply morphological operations to remove noise in the binary images. Next, we determine the mask of each Pokemon by the color range in HSV and use it to ﬁnd each Pokemon’s contour. Center points of each pokemon in the image can be calculated via these contours. The blob detector will provide these center points to the afﬁne transformation, which will map the image location to the world location. Finally, we develop the inverse kinematics and the finite state machine to control the arm to catch Pokemon.

{{< figure src="images/05.png" title="The blurring algorithm allows for high contrast" >}}

{{< figure src="images/06.png" title="The masking enables us to distinctly identify the pokemon from the background." >}}

{{< figure src="images/07.png" title="The center points of each pokemon are computed from the contour and given as input to the afﬁne transformation." >}}


