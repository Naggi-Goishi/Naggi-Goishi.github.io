---
layout: default
title: Naggi
---

<div id="home">
  <h2>Diary</h2>
  <ul class="posts">
    {% for post in site.posts %}
    <li><span>&#x2610; {{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
