---
layout: default
title: Diarys
permalink: /diarys/
---

{% for diary in site.diarys reversed limit: 10 %}
  <content>
    <h1> {{ diary.date | date_to_string }} </h1>
    <div class='diary-content'>
      {{ diary }}
    </div>
  </content>
{% endfor %}
