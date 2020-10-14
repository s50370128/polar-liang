---
title: "Teaching robots to perform quasi-repetitive construction tasks through human demonstration"
authors:
- admin
- Vineet R. Kamat
- Carol C. Menassa
author_notes: ""
date: "2020-12-01"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-08-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Automation in Construction*, 120"
publication_short: ""

abstract: Robots can assist workers in performing physically-demanding construction tasks, which are typically quasi-repetitive, wherein the geometry of the workspace is dissimilar despite similar tasks. As a result, robots must determine motion trajectories based on the encountered workspace geometry. Learning from Demonstration (LfD) methods have the potential to be used in teaching robots specific tasks through human demonstration, such that robots can then perform learned tasks under different conditions. In this paper, the LfD method is investigated to teach robots how to perform quasi-repetitive construction tasks. Considering ceiling tile installation as the experimental process, the tasks of maneuvering and positioning tiles in a ceiling grid are defined as the target knowledge to be learned. Using a set of human demonstration videos, the designed approach first translates the physical work context, e.g., the pose of the tile, to the target digital twin, i.e., the workspace as-perceived by the robot. The Reinforcement Learning method is then applied to generate the control policy for the robot to perform the subsequent tasks. The proposed method is evaluated in the Robot Operating System (ROS) Gazebo simulator using a KUKA mobile industrial robotic arm emulator and 60 different scenes as test cases. The results show a 78% success rate in installing ceiling tiles based on 3000 virtual and 85 real demonstration videos. The success rate tends to continually rise with an increase in the number of real demonstration videos, confirming the promise and applicability of the LfD method in teaching robot apprentices to perform quasi-repetitive tasks on construction sites.

# Summary. An optional shortened abstract.
summary: ""

tags:
# - Source Themes
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: https://doi.org/10.1016/j.autcon.2020.103370
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

{{% alert note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /alert %}}

{{% alert note %}}
Click the *Slides* button above to demo Academic's Markdown slides feature.
{{% /alert %}}

Supplementary notes can be added here, including [code and math](https://sourcethemes.com/academic/docs/writing-markdown-latex/).
