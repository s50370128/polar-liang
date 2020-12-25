---
title: "Stacked Hourglass Networks for Markerless Pose Estimation of Articulated Construction Robots"
authors:
- admin
- Kurt M. Lundeen
- Wes McGee
- Carol C. Menassa
- SangHyun Lee
- Vineet R. Kamat
date: "2018-07-20T00:00:00Z"
doi: "10.22260/ISARC2018/0120"

# Schedule page publish date (NOT publication's date).
publishDate: "2018-07-20T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the International Symposium on Automation and Robotics in Construction (ISARC)*"
publication_short: ""

abstract: "The objective of this research is to evaluate vision-based pose estimation methods for on-site construction robots. The prospect of human-robot collaborative work on construction sites introduces new workplace hazards that must be mitigated to ensure safety. Human workers working on tasks alongside construction robots must perceive the interaction to be safe to ensure team identification and trust. Detecting the robot pose in real-time is thus a key requirement in order to inform the workers and to enable autonomous operation. Vision-based (marker-less, marker-based) and sensor-based (IMU, UWB) are two of the main methods for estimating robot pose. The marker-based and sensor-based methods require some additional preinstalled sensors or markers, whereas the marker-less method only requires an on-site camera system, which is common on modern construction sites. In this research, we develop a marker-less pose estimation system, which is based on a convolutional neural network (CNN) human pose estimation algorithm: stacked hourglass networks. The system is trained with image data collected from a factory setup environment and labels of excavator pose. We use a KUKA robot arm with a bucket mounted on the end-effector to represent a robotic excavator in our experiment. We evaluate the marker-less method and compare the result with the robot’s ground truth pose. The preliminary results show that the marker-less method is capable of estimating the pose of the excavator based on a state-of-the-art human pose estimation algorithm."

# Summary. An optional shortened abstract.
summary: ""

tags:
# - Source Themes
featured: false

links:
# - name: Custom Link
#   url: http://example.org
url_pdf: https://doi.org/10.22260/ISARC2018/0120
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: ['pe']

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---