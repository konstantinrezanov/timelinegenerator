# timelinegenerator
Simple timeline generator, built using plain CSS and JavaScript.
## Installation 
Include main CSS-file on top of the HTML:
```html
<link rel="stylesheet" href="timelinecreator.css">
```
Include timelinecreator.js before the closing `body` tag:
```html
<script src="timelinecreator.js"></script>
```
Initalize library(replace `timeline` with ID of your timeline element): 
```JavaScript
  createTimeline(document.getElementById("timeline"))
```
## Usage 
Basic HTML template for this library is:
```html
<div id="timeline" class="time-line">
  <div class="time-content">
    <p class="time-date">
    </p>
    <p class="time-text">
    </p>
  </div>
</div>
```
You can customize library for your use in the included CSS file.
## Customization 
You can include `<div class="time-year">` in your HTML-file to add year mark.
## Planned features
- [ ] Included Customiztion
## License 
  MIT
