---
layout: default
title: HOME
permalink: /en/
lang: en
---

{% assign sections = site.data.sections_en %}
{% assign slogans = site.data.slogans_en %}
{% assign offer = site.data.offer_en %}
{% assign technologies = site.data.technology_en %}
{% assign team = site.data.team_en %}
{% assign contact = site.data.contact_en %}

{% include sections/slogan.html  %}
{% include sections/offer.html %}
{% include sections/partners.html %}
{% include sections/technology.html %}
{% include sections/team.html %}
{% include sections/contact.html %}
