---
title: Targeting input placeholder text with CSS
date: '2016-09-13 01:44:50'
slug: targeting-input-placeholder-text-css
status: publish
---

Targeting input placeholder text with CSS is usually a vendor-prefix ridden mess of unreadable code. Like with *many* other aspects of CSS, Sass comes the rescue with this one. 

This is a simple mixin that I've created for helping to deal with this.

```scss
@mixin targetPlaceholderText {
	&::-webkit-input-placeholder { @content; }
	&:-moz-placeholder { @content; } // Firefox 18-
	&::-moz-placeholder {  @content; } // Firefox 19+
	&:-ms-input-placeholder { @content; }
}

// Usage example:
input {
	@include targetPlaceholderText {
		color: #ff0000;
		// Any other standard text styles...
	}
}
```