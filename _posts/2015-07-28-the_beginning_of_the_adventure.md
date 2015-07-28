---
layout: post
title:  The beginning of the adventure.
date:   2015-07-28 12:00:00
categories: rgsoc
---


After a lot of excitement and a long wait, finally the 1st of July arrived the moment,our team started the adventure of participating in an open source project actively : the Living Style Guide’ gem, as part of Rails Girls - Summer of Code. As  every good start, our summer of code had a great introduction, the first week was very important to us, in regard to acquiring habits, knowledge, learnings, as well as knowing in depth the activities and tasks to accomplish as participant of the Rails girls summer of code.

***

## What did we do during this week?

We could summarize it as a lot of study, many questions and too many discoveries and learnings; as the week in which we worked hard in this blog, improving it with the objective of improving ourselves as programmers. But, especially a week dedicated to know and understand the gem and its structure with the support of our coaches Ignacio Galindo and Jonathan Tapia.

It was a week of tests: we tested ourselves and we did tests of style guides with the gem Living Style Guide on our blog.

Also, this week was a week of nervous, doubts, introductions, meet our coworkers and our Supervisor Katrin (She is great!), to the first interactions with the other participant teams and the first accords and conversations with our mentor Nico and the Media and Content Chief, Jen.

***

## You probably wonder, What is Living Style Guide? and How can we play with it?

Living Style Guide is a ruby’s gem, it generates style guides for your web page easily.
As indispensable requisite to install this gem:

* Ruby.
* Bundle.

In our case we configured a Gemfile file, where we included the living style guide’ gem of this form :

{% highlight ruby %}
gem “livingstyleguide”,   “v2.0.0.alpha.8”
{% endhighlight %}

You are able to select whichever of the versions disponible, we have worked with this for to be the most recent.

Subsequently, we executed  $bundle install in the console to install the gems present in our Gemfile and we structured our files of the following mode :

    mi_guia_de_estilo/
    ├── partials/
    │   ├── test.lsg
    ├── guia.lsg


***

##  How did we made our files .lsg?

At the first of them we included the examples that we want to show in our style guide, and we will call, for example,  x.lsg:

![](https://www.evernote.com/l/AnfZ48xrNc5Iro9-IY6fVD9sIvCEM0YpE3sB/image.png)

At the second of them, we imported the file that we mentioned above and also, we require all CSS files necessary to generate our guide:

![](https://www.evernote.com/l/And91K9031hABLP3oi8OnBZmoaoiC-i1-lIB/image.png)

***

##  How can we compile?

To compile we executed this simple command in the console:

      $bundle exec livingstyleguide compile x.lsg x.html

Once compiled, it  generates automatically a  HTML file, with the name that we gave it, and when we open it we can view our own guide, with the examples that we included.
Ready! As simple it is generate a style guide using Living Style Guide.
As can you see, the week was very productive and enriching for every team, that for us,  are every world that strives for explain us, helped us always when we need it  (coaches , mentor , Media and content Chief , supervisor and every team of crowd that help us) . We are grateful  immensely with their.
