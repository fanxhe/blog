---
layout: post
title:  Super sync day.
date:   2015-09-18 12:00:00
categories: daily-log-RGSoC
---
Today we started our day working on adding more examples to our live editor.

Later we added more styling to the editor layout, and we learn about CSS selectors specificity, overriding a property set by a bootstrap class.

Then we identified a bug ignoring `+` symbols when generating a style guide in the editor, it was a problem with the function used to escape the code before sending the lsg code, we are now using `escapeURIComponent()` instead of `escapeURI()`.

After we got back from lunch, we had a sync meeting with our mentor Nico, he just came back from RubyConf Taiwan. We talked about our progress with the editor, some features to add and asked doubts about other features. We also talked about pending/active pull requests and what to do to complete/close them. There’s a lot to do, but we feel on track :simple_smile:

At end of the day we sent a pull request to the livingstyleguide gem fixing a LoadError issue that we experienced generating style guides from the terminal.
