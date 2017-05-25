---
layout: default
title: Diarys
permalink: /diarys/
---

{% assign diarys = site.diarys %}
{% for diary in diarys reversed limit: 10 %}
  <content>
    <h1> {{ diary.date | date_to_string }} </h1>
    <div class='diary-content'>
      {{ diary }}
    </div>
  </content>
{% endfor %}
