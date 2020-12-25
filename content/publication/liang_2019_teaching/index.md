---
title: "Teaching Robots to Perform Construction Tasks via Learning from Demonstration"
authors:
- admin
- Vineet R. Kamat
- Carol C. Menassa
author_notes: ""
date: "2019-05-21"
doi: "10.22260/ISARC2019/0175"

# Schedule page publish date (NOT publication's date).
publishDate: "2020-08-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "*Proceedings of the International Symposium on Automation and Robotics in Construction (ISARC)*"
publication_short: ""

abstract: Robots are expected to be widely used on future construction sites to assist human workers in the performance of repetitive physically-demanding tasks. Unlike typical manufacturing assembly lines, where parts are delivered to robots and workers in stationary workstations, construction robots and human workers must accumulate all necessary resources and repeatedly navigate to desired assembly locations on-site to perform useful work. The condition of such resources and the geometry of the environment are constantly changing and generally unstructured. As a result, the motion trajectories of any robot arms cannot be programmed beforehand. The robots must define the trajectory based on the encountered workspace geometry. Learning from Demonstration (LfD) methods have the potential to be used in teaching robots specific skills through human demonstration such that the robots can repeat the same process in different conditions. In this research, we explore the LfD method to teach robots to perform repetitive but geometrically adaptive construction tasks of installing suspended ceiling tiles within pre-assembled ceiling grids. The developed method translates the work context from the set of training videos demonstrated by humans to the target scene, then applies the reinforcement learning method to generate the policy for the robot to perform the subsequent ceiling tile installation. The first phase of the proposed method, i.e., the context translation model, is implemented and evaluated by characterizing whether robot-installed ceiling tiles are successfully moved to the grid area. The experiments demonstrate promising results that show the applicability of the LfD method in teaching robots to perform geometrically-adaptive construction tasks.

# Summary. An optional shortened abstract.
summary: ""

tags:
# - Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://doi.org/10.22260/ISARC2019/0175
url_code: ''
url_dataset: ''
url_poster: https://drive.google.com/file/d/1YkkK90yNLCvOA55wkq6g8zHp_ekIJCD1/view?usp=sharing
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