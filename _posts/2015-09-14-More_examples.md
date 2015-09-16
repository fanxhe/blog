---
layout: post
title:  More examples.
date:   2015-09-15 12:00:00
categories: daily-log-RGSoC
---

Today we started our day with a standup and we planned our day and we accomplish the following:

We researched how to load the page with  LSG examples (the source code and the result) , we triggered  an ajax request on page load sending the data loaded in the form to generate the style guide.

{% highlight javascript %}
var ajax = function(){
  var req = new XMLHttpRequest();
  req.open('POST', '/lsg', true);
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  req.onreadystatechange = function (e) {
    if(req.readyState == 4){
      if(req.status == 200){
        createIframe(req.response);
      }
      else{
        console.error("Error loading page\n");
        createDivError();
      }
    }
  }
  req.send("code_lsg=" + encodeURI(document.querySelector('textarea').value));
}
{% endhighlight %}

{% highlight javascript %}
document.addEventListener('DOMContentLoaded', function() {
  ajax();
});
{% endhighlight %}

We added more examples that are shown randomly, now we have:  

   - Colors  

   - Font  

   - Markdown  

   - Code Block  


{% highlight ruby %}
EXAMPLES = %w{ colors fonts markdown }

get '/' do
  doc = LivingStyleGuide::Document.new do
    ERB.new(File.read("#{File.dirname(__FILE__)}/templates/#{EXAMPLES.sample}.lsg.erb")).result
  end
  erb :index, :locals => { :doc => doc }
end
{% endhighlight %}
