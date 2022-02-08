# About

This website was made for a client who agreed to show its code for demonstration purposes. It's a quick setup to deploy full static websites. Still a work in progress, but I wanted to show some code I've been using for freelance purposes. Special thanks to Tristan Carmichael for being supportive in the work on his project.

#### General Workflow
- Scaffold Express file structure and add dependencies
- Unzip template into public folder and organize files in public folder
- Migrate CSS into Sass modules for easier editing + organization + variables
- Remember to update import paths and package scripts
- Type away! No compilation as front end is static.

While there's no 7-1 structure for the Sass files in this project, the modules are separated in a similar structure without excessive directories.

#### Technologies Used
- Node.js package manager
- Bootstrap (template) customized via Sass
- Express for static server
- NodeMailer and SendinBlue's v3 API for email functionality

#### Changes to Template
Despite using a template for fast workflow, many major changes were made for client needs. Here are those changes (not including back end functionality):

- Bootstrap's default Sass variables for color schemes/using Sass in general instead of template's default CSS stylesheet
- Style organization via modules
- Extra gallery page with dynamic carousel zoom overlay
- Custom card styles and sections
- Masthead animations on page load and hover
- Custom fonts

#### Additional Features
These are some other things I've added alongside front end styling:

- Transactional email API for contacting owner via SendinBlue
- Email limits to conform to API service standards via LowDB (minor database for cross-user tracking)
- HTML email formatting to look a bit better

#### Features Under Development
Expect these features to be pushed within the next week:

- Form validation
- Official deployment
- Responsive images for mobile and tablet

# Licenses and Copyright

All artwork belongs to Tristan Carmichael and cannot be reused for any purpose if using this repository as a code template.
Code copyright 2022 Erin Han

The code for this website is licensed under MIT, as it utilizes a theme from Start Bootstrap with some heavy edits for deployment and client needs:

Start Bootstrap - [Grayscale v7.0.4](https://startbootstrap.com/theme/grayscale)
Copyright 2013-2022 Start Bootstrap
[Licensed under MIT](https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)

Bootstrap v5.1.3 (https://getbootstrap.com/)
Copyright 2011-2021 The Bootstrap Authors
Copyright 2011-2021 Twitter, Inc.
[Licensed under MIT](https://github.com/twbs/bootstrap/blob/main/LICENSE)