---
title: "Bi-directional communication bridge for state synchronization between digital twin simulations and physical construction robots"
authors:
- admin
- Wes McGee
- Carol C. Menassa
- Vineet R. Kamat
author_notes: ""
date: "2020-12-01"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-10-27T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the International Symposium on Automation and Robotics in Construction (ISARC)*"
publication_short: ""

abstract: Collaborative robot (co-robots) are being increasingly deployed on construction sites to assist human workers with physically demanding work tasks. However, due to inherent safety and trust-related concerns, human-robot collaborative work is subject to strict safety standards that require robot motion and forces to be sensitive to proximate human workers. Robot simulations in online digital twins can be used to extend designed construction models, such as BIM, to the construction phase for real-time monitoring of robot motion planning and control. Robots plan work tasks and execute them in the digital twin simulations allowing humans to review and approve robot trajectories. Once approved, commands can be sent to the physical robots to perform the tasks. This paper discusses the development of a system to bridge robot simulations and physical robots in construction and digital fabrication. The Robot Operating System (ROS) is leveraged as the primary framework for bi-directional communication and Gazebo is used for robot simulations. The virtual robots in Gazebo receive work tasks from a BIM model to plan their trajectories, and then send the commands to the physical robots for execution. The system is implemented with a digital fabrication case study with a fullscale mobile KUKA KR120 six-degrees-of-freedom robotic arm mounted on a track system for an additional degree-offreedom, and evaluated by comparing the pose between the physical robot and the virtual robot. The results show a high accuracy of the pose synchronization between two robots, which provide the opportunity for further deploying to real construction sites.

# Summary. An optional shortened abstract.
summary: ""

tags:
# - Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://doi.org/10.22260/ISARC2020/0205
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
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---