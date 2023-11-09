---
title: "Trajectory-Based Skill Learning for Overhead Construction Robots Using Generalized Cylinders with Orientation"
authors:
- admin
- Vineet R. Kamat
- Carol C. Menassa
- Wes McGee
author_notes: ""
date: "2021-12-03"
doi: "10.1061/(ASCE)CP.1943-5487.0001004"

# Schedule page publish date (NOT publication's date).
publishDate: "2023-11-09T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Journal of Computing in Civil Engineering*"
publication_short: ""

abstract: Overhead work involving the construction and maintenance of civil infrastructure (e.g., tunnels, overpasses, and buildings) is strenuous and fatigue-inducing for human workers and is particularly well-suited for co-robotization. Such work is typically quasi-repetitive, and on-site robots must adapt to unexpected workface conditions. Methods such as learning from demonstration can leverage human experts’ demonstration to let robots directly learn new skills to perform tasks. This paper proposes a generalized cylinders with orientation approach to teach robots how to perform quasi-repetitive overhead construction tasks from human demonstration. The demonstration trajectories are first used to construct a generalized cylinder and generate the robot trajectory. To ensure that the construction component (e.g., tunnel lining segment, building ceiling tile) being installed can satisfy the geometric constraints of the workspace, orientation constraints need to be determined, and the robot must follow such constraints. A trajectory adaptation and human-in-the-loop refinement approach are developed to refine the robot trajectory. The proposed method was evaluated in a robot simulator with variable workspace. The results showed that the proposed approach achieves an improved success rate (82.0%) compared to that demonstrated in previous work (71.3%) and enables overhead construction robots to readily adapt to new worksite conditions.

# Summary. An optional shortened abstract.
summary: ""

tags:
# - Source Themes
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://doi.org/10.1061/(ASCE)CP.1943-5487.0001004
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
projects: ['vlfd']

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---