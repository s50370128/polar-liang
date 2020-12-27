---
title: "ROB550: Maebot Lab"
authors:
- admin
- Mengyao Ruan
- S. R. Manikandasriram

summary:  Develop a mobile robot including an efﬁcient motion controller, a robust Simultaneous Localization and Mapping (SLAM) module, a fast motion planning algorithm and a fail safe exploration strategy.
tags:
- Robotics
date: "2016-11-26T00:00:00Z"

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
{{< youtube cM6bPsYlOHQ >}}

### Project Goal
We have to build a mobile ground robot (MaeBot) that can autonomously explore an apriori unknown bounded region, accurately reach speciﬁc points of interest (key, treasure) and ﬁnally detect an opening in the boundary and escape. Some of the challenges include designing an efﬁcient motion controller that can accurately follow a desired trajectory, a robust Simultaneous Localization and Mapping (SLAM) module to address drift in odometry, a fast motion planning algorithm to compute paths to target destinations and a fail-safe exploration algorithm that can guide the robot to autonomously explore a bounded region completely.

{{< figure src="featured.png" title="MaeBot" >}}

### Methods
The MaeBot is assumed to follow the Unicycle model. The dead reckoning method does not address errors due to quantization and measurement noise. As a result, these errors get accumulated over time and cause the odometry to drift away from the true pose. Therefore, a suitable localization method, such as SLAM is required to address the drift issue.

{{< figure src="images/01.png" title="The drift issue of the odometry" >}}

We implement two PID controllers one each for heading and steering. The current position of the robot is determined by fusing
information from the odometry and SLAM modules. Though SLAM is accurate, its frequency is not high enough for real-time performance. Thus, we use the encoder odometry to estimate the position of the robot between subsequent SLAM poses. For heading controller, we apply PI controller, because the intrinsic damps of motor is already large and the accumulated error is negligible. For steering controller, we only apply P controller, because the intrinsic damps was large and the I term will induce unexpected overshoot.

{{< figure src="images/02.png" title="The result of the driving square task by PID control" >}}

SLAM is the task of building a map of an apriori unknown area while at the same time using the map constructed so far to localize the robot. In this project, we will use an occupancy grid for representing the map and a 2D lidar as our sensor. We develop an action model (sampling based odometry motion model), sensor model (weight computation), and particle filter to accurately localize the robot. Finally, We implement the A-star algorithm for planning a path to a target and a map exploration strategy.

{{< figure src="images/03.png" title="Comparing our SLAM implementation against the Staff’s implementation and the ground truth poses from the motion capture system" >}}

{{< figure src="images/04.png" title="The result of the obstacle distance and the A-star planned path, the red area is the unsafe region, the black area is the obstacle region, the white area is the free, the yellow is the Maebot SLAM, and the green line is the A-star planned path." >}}

