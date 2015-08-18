---
layout: post
title:  How did you add the copy functionality?
date:   2015-08-18 12:00:00
categories: livingstyleguide Javascript
---

After of a great start and a week preparing ourselves, at last we had the courage to start writing our first lines of code for the Living Style Guide gem, as part of the Rails Girls Summer of Code program.  

### **What was our first task and contribution to Living Style Guide?**

It consisted of adding the functionality of copying values from the color swatches included in the style guide generated through the gem.  

### **What  programming languages did we use to do this task?**

<p align= "center"> *JavaScript</p>  
<p align= "center"> *Ruby </p>  
<p align= "center"> *HTML</p>  
<p align= "center"> *SCSS</p>  

### **How did we do it ?**

We added a condition to know if whether the copy functionality is compatible with the browser being used. With this check we avoid showing incompatibility errors, and disable the copy functionality.

The main part of our contribution is a copy function, triggered by “click” or “alt + click” events making use of other functions to create new html nodes and select the range of elements that we want to copy .

Once we achieved the copy functionality, we worked in the visual part with SCSS, using a hover effect over the color swatches.

[If you want to see the code, click here](https://github.com/livingstyleguide/livingstyleguide/pull/143/commits)

### **What was the result?**

The functionality included three visual aspects for the user:  

In the first place, a hover effect allows the user to visualize how to copy the value of interest.

![](https://www.evernote.com/l/AnfYJN5WGtJGaozIQWH88P16HU1vC80B4NsB/image.png)

Secondly, the functionality allows the user to copy the name of the variable for the color swatch in which the mouse pointer is over and clicking into it.

![](https://www.evernote.com/l/And9RVOj6SlNmZCBiwqaq2oMo7-ZqlEShQsB/image.png)

Finally, the functionality also allows the user to. to copy the hexadecimal color code by pressing the “alt” key and “clicking” into a color swatch.

![](https://www.evernote.com/l/Anfx_l6PsdpJdrHlkAgJzJ4pKdc0k3U1saEB/image.png)

Moreover, we have great news! Hard work has its rewards: our task has been merged and included in the new version of the gem (v2.0.0.alpha.9)  

And, we couldn’t be more excited =)
