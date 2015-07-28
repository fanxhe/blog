---
layout: post
title:  The beginning of the adventure.
date:   2015-07-28 12:00:00
categories: rails-girls-summer-of-code livingstyleguide
---

After a lot of excitement and a long wait, finally on July 1st our team started the incredible adventure of actively participating in an open source project : the [Living Style Guide's gem](https://github.com/livingstyleguide/livingstyleguide) as part of [Rails Girls Summer of Code 2015](http://railsgirlssummerofcode.org/). As every good start, our summer of code had a great introduction; the first week was very important to us, in regard to acquiring habits, knowledge, learnings, as well as knowing in depth the activities and tasks to accomplish as a student.

***

## What did we do during this week?

We could summarize it as a lot of study, many questions and so many discoveries and learnings; it was a week in which we worked hard on this blog, improving it with the purpose of improving ourselves as programmers. Especially, it was a week dedicated to know and understand the gem and its structure with the support of our coaches Ignacio Galindo and Jonathan Tapia.

It was a week of tests: we tested ourselves and we did style guides tests with the Living Style Guide's gem on our blog.

Also, this week was a week of feeling nervous, doubts, introductions, we met our coworkers and our supervisor Katrin (she is great!), and we had the first interactions with other participant teams and the first agreements and conversations with our mentor Nico and the Media and Content Chief, Jen.

***

## You probably wonder, what is Living Style Guide and how can we play with it?

Living Style Guide is a Ruby gem, which generates style guides for your web page easily.
The indispensable requisites to install this gem:

* Ruby ~> 2.0.0.
* Bundler.

In our case we configured a `Gemfile`, where we included the Living Style Guide's gem as shown below:

{% highlight ruby %}
gem "livingstyleguide",   "v2.0.0.alpha.8"
{% endhighlight %}

You are able to select any of the available versions, but we have worked with `v2.0.0.alpha.8` because it was the most recent version when we started.

Subsequently, we executed  `$ bundle install` in the console to install the gems present in our `Gemfile` and we structured our files as follows:

    mi_guia_de_estilo/
    ├── partials/
    │   ├── test.lsg
    ├── guia.lsg

***

##  How did we make our .lsg files?

In the first of files we included the examples that we want to show in our style guide, we will call it  partials/test.lsg. In it we used the `@colors` filter to show the colors used in our blog:

![](https://www.evernote.com/l/AnfZ48xrNc5Iro9-IY6fVD9sIvCEM0YpE3sB/image.png)

In the second of file, we imported the file that we mentioned above using the `@import` filter and required all the necessary CSS files to generate our style guide using the `@css` filter:

![](https://www.evernote.com/l/And91K9031hABLP3oi8OnBZmoaoiC-i1-lIB/image.png)

***

##  How can we compile the style guide?

To compile the style guide we executed this simple command in the console:

      $ bundle exec livingstyleguide compile guia.lsg guia.html

It generates a HTML file that we called guia.html, and when we open it we can view our own guide, with the examples that we included.

Done! It's as simple as that is to generate a style guide using Living Style Guide.

As you can you see, the week was very productive and enriching for the team, and for us as everyone that strives to explain things to us, and help us whenever we need it (coaches, mentor, Media and content Chief, supervisor and every crowd coworker that helps us). We are immensely grateful to them.
