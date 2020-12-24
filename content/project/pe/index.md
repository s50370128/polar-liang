---
title: "Vision-based pose estimation for construction robots"
authors:
- admin
- Wes McGee
- Carol C. Menassa
- SangHyun Lee
- Vineet R. Kamat

summary: Develop a vision-based DNN pose estimation system.
tags:
- Computer Vision
date: "2018-07-01T00:00:00Z"

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
<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <img src="images/01.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/02.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/03.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/04.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/05.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/06.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/07.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/08.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/09.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/10.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/11.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/12.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/13.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/14.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/15.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/16.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/17.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/18.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/19.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/20.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/21.JPG" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <i class="fas fa-angle-left" onclick="plusSlides(-1)" id="noArrow"></i>
  <i class="fas fa-angle-right" onclick="plusSlides(1)"></i>
</div>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
  <span class="dot" onclick="currentSlide(6)"></span>
  <span class="dot" onclick="currentSlide(7)"></span>
  <span class="dot" onclick="currentSlide(8)"></span>
  <span class="dot" onclick="currentSlide(9)"></span>
  <span class="dot" onclick="currentSlide(10)"></span>
  <span class="dot" onclick="currentSlide(11)"></span>
  <span class="dot" onclick="currentSlide(12)"></span>
  <span class="dot" onclick="currentSlide(13)"></span>
  <span class="dot" onclick="currentSlide(14)"></span>
  <span class="dot" onclick="currentSlide(15)"></span>
  <span class="dot" onclick="currentSlide(16)"></span>
  <span class="dot" onclick="currentSlide(17)"></span>
  <span class="dot" onclick="currentSlide(18)"></span>
  <span class="dot" onclick="currentSlide(19)"></span>
  <span class="dot" onclick="currentSlide(20)"></span>
  <span class="dot" onclick="currentSlide(21)"></span>
</div>

<br>The prospect of human-robot collaborative work on construction sites introduces new workplace hazards that must be mitigated to ensure safety. Human workers working on tasks alongside construction robots must perceive the interaction to be safe in order to ensure team identification and trust. Detecting the robot pose in real-time is thus an essential requirement to inform the workers and to enable autonomous operation. Vision-based (marker-based, marker-less) and sensor-based are two of the primary methods for estimating robot pose. The marker-based and sensor-based methods require some additional preinstalled sensors or markers, whereas the marker-less method only requires an on-site camera system, which is common on today's construction sites. This research developed a marker-less pose estimation system for on-site articulated construction robots, which is based on a deep convolutional network human pose estimation algorithm: stacked hourglass network. Both 2D and 3D pose are estimated. The system is trained with image datasets collected from a robotic excavator and annotations of excavator pose, as well as conventional excavators working on construction sites. A KUKA robot arm with a bucket mounted on the end-effector was used to represent the robotic excavator in the experiments. The marker-less 3D method was evaluated, and the results were compared with the sensor-based results and the robot's ground truth pose. The results demonstrated that the marker-less 2D and 3D pose estimation methods are capable of performing proximity detection and object tracking on construction sites and can overcome the missing data issues encountered in the sensor-based method. However, the lower accuracy of the bucket pose estimation due to occlusion highlights the need for modifying the network and collecting additional datasets for training in future work.

{{< youtube jjw_trFhrCU >}}