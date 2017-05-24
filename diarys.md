---
layout: default
title: Diarys
permalink: /diarys/
---

{% for post in site.diarys %}
  <content>
    <h1> {{ post.date | date_to_string }} </h1>
    <div class='diary-content'>
      {{ post }}
    </div>
  </content>
{% endfor %}