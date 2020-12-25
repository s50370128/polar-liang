---
title: "A vision-based marker-less pose estimation system for articulated construction robots"
authors:
- admin
- Kurt M. Lundeen
- Wes McGee
- Carol C. Menassa
- SangHyun Lee
- Vineet R. Kamat
date: "2019-08-01T00:00:00Z"
doi: "10.1016/j.autcon.2019.04.004"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-08-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Automation in Construction*, 104"
publication_short: ""

abstract: "The prospect of human-robot collaborative work on construction sites introduces new workplace hazards that must be mitigated to ensure safety. Human workers working on tasks alongside construction robots must perceive the interaction to be safe in order to ensure team identification and trust. Detecting the robot pose in real-time is thus an essential requirement to inform the workers and to enable autonomous operation. Vision-based (marker-based, marker-less) and sensor-based are two of the primary methods for estimating robot pose. The marker-based and sensor-based methods require some additional preinstalled sensors or markers, whereas the marker-less method only requires an on-site camera system, which is common on today's construction sites. This research developed a marker-less pose estimation system for on-site articulated construction robots, which is based on a deep convolutional network human pose estimation algorithm: stacked hourglass network. Both 2D and 3D pose are estimated. The system is trained with image datasets collected from a robotic excavator and annotations of excavator pose, as well as conventional excavators working on construction sites. A KUKA robot arm with a bucket mounted on the end-effector was used to represent the robotic excavator in the experiments. The marker-less 3D method was evaluated, and the results were compared with the sensor-based results and the robot's ground truth pose. The results demonstrated that the marker-less 2D and 3D pose estimation methods are capable of performing proximity detection and object tracking on construction sites and can overcome the missing data issues encountered in the sensor-based method. However, the lower accuracy of the bucket pose estimation due to occlusion highlights the need for modifying the network and collecting additional datasets for training in future work."

# Summary. An optional shortened abstract.
summary: ""

tags:
# - Source Themes
featured: true

links:
# - name: Custom Link
#   url: http://example.org
url_pdf: https://doi.org/10.1016/j.autcon.2019.04.004
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