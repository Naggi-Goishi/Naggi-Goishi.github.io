---
layout: default
title: Naggi
---

<div id="home">
  <div class='diary-container'>
  <h2>Diary</h2>
  <ul class="posts">
    {% for post in site.posts %}
    <li><span>&#x2610; {{ post.date | date_to_string }}</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
  </div>
  <div class='essays-container'>
  <h2>Essays</h2>
  <ul class="essays">
    {% for essay in site.essays %}
    <li><span>&#x2610; {{ essay.date | date_to_string }}</span> <a href="{{ essay.url }}">{{ essay.title }}</a></li>
    {% endfor %}
  </ul>
  </div>
</div>
