---
title: WordPressSQL - A URL Migration Tool
date: '2016-05-16 12:28:04'
slug: wordpresssql-a-url-migration-tool
status: publish
---

Introducing to the world, my very basic macOS app: WordPressSQL, A super simple utility for helping out with migrating a WordPress site between environments. 

My last blog post said:

> I think it looks like it might be the tool that finally gets me into Mac (plus Windows & Linux as bonus) development. I have a couple of ideas that I think could be fun to build!

At the time, I meant, learn [Reactjs](https://facebook.github.io/react/) (even superficially), then learn [Electron](http://electron.atom.io), then make an app using these technologies. I'm happy to say that I did exactly that over the past couple of days. What I'm not happy about is the quality of that app! It really felt like a web app running on the desktop. It didn't feel native at all. [This](http://samjdavis.com/sql) is the same version of that app, but as a website. Judge for yourself. 

My app was SUPER simple, at it's core, it was a simple find and replace utility (with a **really** narrow scope). The Electron app was over 150MB once it was packaged up and ready to go! 

I decided to build the same app using native technologies; Xcode, Cocoa and Swift. The result is a much more basic looking app, but one that I'm quite a bit more proud of. You can grab a copy of WordPressSQL [right here.](https://wpsql.sjd.co/app/latest/WordPressSQL.zip).. it's free! Plus, now the zipped file is only 4MB ;) 

![WordPressSQL-Screenshot](http://mutableconstant.com/wp-content/uploads/2016/05/WordPressSQL-Screenshot.jpg)