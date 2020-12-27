---
title: "ROB550: Balance Lab"
authors:
- Gideon Billings
- admin
- Peter McHale

summary:  Develop a balancing bicoptor.
tags:
- Robotics
date: "2016-12-19T00:00:00Z"

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
{{< youtube knlctvJwppo >}}

### Project Goal
We have to develop a balancing bicoptor from scratch.

{{< figure src="featured.jpg" title="Balancing bicoptor" >}}

### Methods
We first develop the motor controller for the bicoptor and hook up the board with wires for the IMU over I2C and put in the power converter to power the board. Then, we tune the PID controller to stabilize the system. All the sensors are mounted on the 3D printed model.

{{< figure src="images/01.jpg" title="Sensors and the mainboard" >}}

The system can be remote controlled through a spectrum dsm transmitter and receiver. We decide to turn the bicopter into a wheeled vehicle. We laser cut wooden wheels which attach on either side of the main axle. To control the turning of the bicopter, we come up with the idea of a vertical fin. A servo could control the tilt of the fin to either side, causing the air stream from their prop to push against the angled fin and cause the vehicle to turn.

{{< figure src="images/02.jpg" title="Cleaned up wiring and the servo mount" >}}

{{< figure src="images/03.jpg" title="Final system design" >}}

