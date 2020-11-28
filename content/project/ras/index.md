---
title: "RAS: Robotic Assembly System for Steel Structure"
authors:
- admin
- Shih-Chung Kang

summary: RAS, a robotic assembly system for steel structure, remove workers from high places and perform steel beam assembly tasks semi-automatically.
tags:
- Robotics
- Computer Vision
date: "2015-05-20T00:00:00Z"

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

  <div class="mySlides fade">
    <img src="images/22.jpg" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <i class="fas fa-angle-left" onclick="plusSlides(-1)" id="allBlack"></i>
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
</div>

<br>This research focuses on a long-lasting yet critical problem in the erection assembly of steel structures. In the current state of practice, steel workers need to stand on the unfinished structure to assist the assembly of structural elements manually. They must grab the wire under the rigging elements and align the bolting holes between the moving and fixed elements. These works are usually performed in high places, which are very challenging and unsafe. Therefore, we developed a robotic assembly system (RAS) that remove workers from the dangerous spot and perform the assembly tasks semi-automatically. The RAS consists of four modules: rotation, alignment, bolting, and unloading module. First, the rotation module is a mechanism box equipped with a flywheel on the top of the rigging beam aiming to rotate the beam to the assembly angle. The operator controls the flywheel at the remote location.

Second, the alignment module is divided into two stages: vertical alignment and horizontal alignment. The vertical alignment is used to ensure the rigging beam is at the right altitude. We use a camera to detect a marker on the column and a light signal to inform the operator that the beam has reached the target altitude. The horizontal alignment is used to ensure the beam is at the assembly position, which is achieved by a specially designed beam shape. The shape of the beam flange is parallelogram so the beam can be smoothly trolled to the assembly position. Third, the bolting module is used to assemble the beam. We add an additional plug hole above each bolt hole. With the newly designed bolt, it can plug in and slide to the bolt hole. Finally, the unloading module is used to unload the rigging cable and the RAS. We use a pin mechanism for beam-hook connection and attach to RAS, so it can be unplugged by motors easily.

The system was implemented in a scaled-experiment construction site and compared with the traditional process. The results showed that the RAS can reduce the operation time by 86% and operate without human workers nearby. In conclusion, we develop a robotic assembly system that can help reduce the accidental falls of the steel beam assembly process. The RAS fits the current erection process and can be broadly introduced to existing construction sites.

{{< youtube 0urVZGTfyuI >}}