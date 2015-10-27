# web-scroll
Modular project that allows easy Jquery smooth scrolling down a page

Links
=====
CSS > https://raw.githubusercontent.com/edprince/web-scroll/master/styles/main.css

JS > https://raw.githubusercontent.com/edprince/web-scroll/master/scripts/app.js

Usage
=====
A div needs to be added with a class of > ws-wrapper

```html
<div class='ws-wrapper'></div>
```
Now within that div, each of the tiles can be added by adding another
div with a class of > ws.

```html
<div class='ws-wrapper'>
  <div class='ws'></div>
  <div class='ws'></div>
</div>
```

This will create 2 tiles, with arrow icons on to scroll to the next div.
Within these divs you can add whatever content you like, but be wary to 
not overfill your div, as they stick to 100% of the height of the screen.
