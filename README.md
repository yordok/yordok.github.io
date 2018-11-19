# yordok.github.io
##What is this?
This repo is made to be an interactive portfolio of sorts.  It's an example of how to set up a Babel project with HTML5 canvas, how to updated a canvas at ~30 frames per second, and how to use ES2016 syntax with Browserify as a packager (very basically).  In the end, it should showcase some cool stuff you can do with HTML5 canvas.

##Setup a local devlopment environment
To set up the development environment use these steps.
1. Run `npm install`.
2. Run `npm start`. This will begin hosting the app on localhost:8080 and begin to watch your source files (/src/*) for changes at the same time.  A new port can be specified by modifying the `npm start` command in the `package.json` file.

##Planned features
Some planned features to the app.
- Fully working buttons from scratch with event listeners for hover, onMouseDown, onMouseUp.
- Simple animation rendering library from scratch that can render simple shapes to the screen with ease and have them tween their movment.  Animations will also later include images and image animations.
- Physics hopefully using box2d, if not an alternative might be found.  If no alternative is found, I might just start to write one form scratch.
- Info about myself presented in a cool interactive way (I don't exatly know what this means yet.)