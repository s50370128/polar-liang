---
title: "Teaching robots to perform construction tasks through demonstration"
authors:
- admin
- Vineet R. Kamat
- Carol C. Menassa

summary: Apply Learning from Demonstration method to teach construction robots.
tags:
- Robotics
date: "2019-05-21T00:00:00Z"

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

  <div class="mySlides fade">
    <img src="images/22.JPG" style="width:100%">
  </div>
  
  <div class="mySlides fade">
    <img src="images/23.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/24.JPG" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/25.JPG" style="width:100%">
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
  <span class="dot" onclick="currentSlide(22)"></span>
  <span class="dot" onclick="currentSlide(23)"></span>
  <span class="dot" onclick="currentSlide(24)"></span>
  <span class="dot" onclick="currentSlide(25)"></span>
</div>

<br>Robots can assist workers in performing physically-demanding construction tasks, which are typically quasi-repetitive, wherein the geometry of the workspace is dissimilar despite similar tasks. As a result, robots must determine motion trajectories based on the encountered workspace geometry. Learning from Demonstration (LfD) methods have the potential to be used in teaching robots specific tasks through human demonstration, such that robots can then perform learned tasks under different conditions. In this paper, the LfD method is investigated to teach robots how to perform quasi-repetitive construction tasks. Considering ceiling tile installation as the experimental process, the tasks of maneuvering and positioning tiles in a ceiling grid are defined as the target knowledge to be learned. Using a set of human demonstration videos, the designed approach first translates the physical work context, e.g., the pose of the tile, to the target digital twin, i.e., the workspace as-perceived by the robot. The Reinforcement Learning method is then applied to generate the control policy for the robot to perform the subsequent tasks. The proposed method is evaluated in the Robot Operating System (ROS) Gazebo simulator using a KUKA mobile industrial robotic arm emulator and 60 different scenes as test cases. The results show a 78% success rate in installing ceiling tiles based on 3000 virtual and 85 real demonstration videos. The success rate tends to continually rise with an increase in the number of real demonstration videos, confirming the promise and applicability of the LfD method in teaching robot apprentices to perform quasi-repetitive tasks on construction sites.

{{< youtube Aw8Sga7uPik >}}