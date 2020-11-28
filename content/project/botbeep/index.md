---
title: "BotBeep: Warning Device for Wheelchair Rearward Safety"
authors:
- admin
- Yao-Yu Yang
- Yu-Shung Lin
- Pei-Yi Lee
- Chuan-En Lee
- Shih-Chung Kang
- Pei-Chun Lin

summary: BotBeep, an innovative and low-cost device, was developed to warn the user of elevation changes behind the wheelchair.
tags:
- Computer Vision
date: "2013-03-14T00:00:00Z"

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
    <img src="images/01.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/02.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/03.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/04.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/05.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/06.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/07.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/08.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/09.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/10.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/11.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/12.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/13.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/14.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/15.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/16.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/17.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/18.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/19.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/20.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="images/21.jpg" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <i class="fas fa-angle-left" onclick="plusSlides(-1)"></i>
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

<br>Wheelchair users are often bothered by barriers when they go rearward, such as stairs, ditch cover, or walls. An accident might happen because of these barriers. The wheelchair might overturn and cause serious injures. When discussing the barrier-free environment, we rarely address this issue from the wheelchair point of view. In this study, we focus on developing a warning device for a universal wheelchair.

The goal of the proposed method is to monitor the terrain behind the wheelchair, and determine whether it is flat or not. We selected Microsoft Kinect, IR sensor, and camera as the sensors and compare with each other. First, The Kinect is installed on the back of the wheelchair and captures the 2D depth image to determine the flatness. However, the Kinect fails under sunlight and thus is not suitable for outdoor usage. Second, two IR sensors were mounted on the back of the wheelchair. The IR sensors detect a short distance behind each wheel. If there is an obstacle behind the wheelchair, the distance will change. However, the IR sensor is too sensitive and has a lot of noise.

Third, we use a laser generator to project laser points on the ground and a camera to scan the image, then apply the image processing method to extract the laser points pattern, which is different from different kinds of terrain. The summation of x and y coordinates of each laser point will change significantly when the wheelchair approaches a barrier. After the feasibility study, the image processing method was selected for the Botbeep. The smartphone is used as the main computational device since it has a built-in camera that can be used for image capturing.

{{< youtube Korw_CUCJuA >}}

<br>For the design of the BotBeep, we want a simple mechanism that can attach the camera and laser generator to all kinds of wheelchairs. Thus, we use the concept of the clothespin to design the BotBeep. The smartphone is fully covered by the BotBeep clip. The dual laser generator provides two different colors for avoiding failure when the ground color is the same as one of the laser light. The image processing algorithm is implemented in C language and the smartphone application is developed in Java language. The smartphone links to the clip through Bluetooth in order to control the laser projector. This can increase the efficiency and the stability of the system. The user tests were conducted at the Suang-Lien Elderly Center in Taiwan. We found out that elderly people can easily install the equipment and move rearward without looking behind.

{{< youtube QBznSWcsCMQ >}}

<br>In conclusion, we have developed a warning device, BotBeep, for wheelchair safety. It can detect the obstacle behind the wheelchair and remind the user to avoid the accident. We also focus on providing services showing care for safety and health. In particular for a society with an increasingly aging population, it is important to pay attention to elderly care.