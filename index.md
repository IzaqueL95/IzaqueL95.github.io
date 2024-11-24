---
layout: default
title: "Bem-vindo ao meu blog"
---

# Bem-vindo ao meu blog!

Aqui estão os últimos posts publicados:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> <br>
      <small>{{ post.date | date: "%d de %B de %Y" }}</small>
    </li>
  {% endfor %}
</ul>
