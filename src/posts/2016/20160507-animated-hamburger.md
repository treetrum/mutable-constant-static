---
title: Animated Hamburger
date: '2016-05-07 07:58:09'
slug: animated-hamburger
status: publish
---

Normally, when creating hamburger menus for websites I'm building, I get lazy and simply use the font awesome bars icon. I finally decided to not be lazy and build something that not only functions way better but that I'm able to use in all future sites. My solution is a simple, extendable SASS mixin! 

Here's a fiddle of the result: 

<iframe width="100%" height="300" src="//jsfiddle.net/L35grxpc/10/embedded/result/light/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

And here's the mixin file itself:

```scss
@mixin createHamburger(
    $width: 30px,
    $height: 25px,
    $barHeight: 5px,
    $barColor: black,
    $duration: 0.4s,
    $rotation: 90deg
) {
    width: $width;
    height: $height;
    position: relative;
    transition: $duration ease all;
    span {
        position: absolute;
        left: 0;
        display: block;
        width: $width;
        height: $barHeight;
        background-color: $barColor;
        opacity: 1;
        &:nth-child(1) {
            top: 0;
        }
        &:nth-child(2) {
            top: 50%;
            margin-top: -($barHeight/2);
        }
        &:nth-child(3) {
            bottom: 0;
        }

        transition: $duration/2 $duration/2 ease top, $duration/2 $duration/2
                ease bottom, 0s $duration/2 ease opacity, $duration/2 ease
                transform;
    }
    &.active {
        transform: rotate($rotation);
        span {
            transition: $duration/2 ease top, $duration/2 ease bottom,
                0s $duration/2 ease opacity, $duration/2 ease $duration/2
                    transform;
        }
        span:nth-child(1) {
            transform: rotate(45deg);
            top: ($height/2) - ($barHeight/2);
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:nth-child(3) {
            transform: rotate(-45deg);
            bottom: ($height/2) - ($barHeight/2);
        }
    }
}
```
