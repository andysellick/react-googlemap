# react-googlemap

A simple way to get a google map up and running with React.

## About

This is a simple React component to get a Google map up and running with minimal effort. The script handles everything gmap related - all you need in your HTML is React and the script itself, all gmap scripts are pulled in automatically.

There are a lot more files in this repo than needed, most of it is just for gulp. The key bits are:

- src/index.html
- src/static/js/main.js
- src/static/js/gmap.js

The data and code that creates the maps is present as an example - much more complicated gmap manipulation code could be inserted instead. Note that the code is written using JSX, which is interpreted in gulp using gulp-babel.

The JS files could be combined, they have been left separate for clarity. They get merged together and minified by gulp anyway.

The gulp and general structure is based on https://github.com/andysellick/house-styles-redux

## Installation

npm run setup

To run it a second time, just run gulp.
