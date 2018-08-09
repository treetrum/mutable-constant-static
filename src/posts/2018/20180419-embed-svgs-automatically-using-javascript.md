---
title: Embed SVGs automatically using JavaScript
date: '2018-04-19 00:15:52'
slug: embed-svgs-automatically-using-javascript
status: publish
---

When working with SVGs on the web it can sometimes be useful to actually embed them into the HTML rather thank using an `img` tag. Rather than using the messy approach of copying and pasting the SVG source code into your HTML I have written a very small JavaScript snippet that will automatically embed your SVGs when using an img tag that includes the data attribute: `data-svg-inline`. 

Here is the original source code, including a minified, babel-ified version. Please note, if you use the un-minified version, you will probably want to run this through babel before using it on a production site as it uses ES6 syntax.

Minified:

```js
'use strict';(function(){var a=new DOMParser,b=document.querySelectorAll('img[data-svg-inline]');b.forEach(function(c){var d=c.src,e=c.parentNode;fetch(d).then(function(f){return f.text()}).then(function(f){var g=a.parseFromString(f,'image/svg+xml'),h=g.documentElement;e.replaceChild(h,c)})})})();
```

Original: 

```js
(() => {

    let parser = new DOMParser();
    let svgTags = document.querySelectorAll('img[data-svg-inline]');

    svgTags.forEach(svgTag => {

        let imageURL = svgTag.src;
        let imageParent = svgTag.parentNode;

        fetch(imageURL)
            .then(response => response.text())
            .then(svgData => {
                var svgDocument = parser.parseFromString(svgData, 'image/svg+xml');
                let svgElement = svgDocument.documentElement;
                imageParent.replaceChild(svgElement, svgTag);
            });

    });

})();
```