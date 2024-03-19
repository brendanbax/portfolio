---
layout: '../../layouts/CaseStudy.astro'
title: 'Continuum'
date: '2020-03-01'
assets: 'continuum'
summary: 'Helping to keep complex care kids out of the ER'
---

## Background

Prior to COVID-19 I worked for Mercy Hospital Network's virtual R&D team. An opportunity came up to build a critical pediatric monitoring app. The main objectives were to improve communication between care givers and the care team, give consistent touch-points for patient monitoring, and track engagement to help ensure patient wellness.

My role at Mercy Virtual was _Senior Software Design Engineer_, so I was able to work with the product managers to scope the app experience as well as the dev team to build it.

## Design Thinking

To kick things off I partnered with the Product Manager Eduardo Ramos and our business stakeholder Meghan Haycraft to define a polished MVP. It started with journey maps and interviews with the pediatric care teams then some wire frames to get feedback. To better understand the initial scope we created a feature matrix with an ideal state and then worked to shift expectations for a more realistic launch.

For example we wanted education material in the app, but we lacked the infrastructure to support it. The dev team would need to manually add and curate all the content - which doesn't scale. So we compromised by having care team members email the info to users at their convenience (which gave them the flexibility to create custom content per patient), until we had bandwidth to actually tackle the education systems.

## Code Contributions

We built the mobile app using React Native, our first time as a team building with the framework. RN has its quirks, but it was fast to get the app up and running. For my part I handled a good portion of the UI components including navigation tabs, form inputs, buttons, and list views.

Continuum was a legacy name we inherited from a previous product. I put together a logo and color scheme for our mobile app (everybody loved the purple) and it looked like what's below.

![App icon, launch screen, log in page](/continuum/01_launch.png)

![Account creation flow and confirmation](/continuum/02_account.png)

![Password and terms of service](/continuum/03_signup.png)

![Linked patient list and patient linking flow](/continuum/04_patient.png)

![Chat interactions including image and emoji support](/continuum/05_chat.png)

![Survey list and survey question examples](/continuum/06_survey.png)

![Education list view and example content](/continuum/07_education.png)

![In-app notifications and actions, ex: receiving a survey or video request](/continuum/08_messaging.png)

![User account management and password update](/continuum/09_settings.png)

## Learning Moments

React Native was a super cool bit of tech to learn. One of the developers on our team had a lot of iOS and Swift experience and he was a bit hesitant to use RN, but found it to be really fast to work with. I felt like the documentation was easy to follow and our app came together really fast.

One challenge came from the "need for speed" at Mercy, I was juggling some complex UX work, learning React Native, and trying to ship as much helpful code as I could. I wound up leaning more into the UX work as it helped unify the team and rally us around a common product vision.

<div class="quote">
  <p>Brendan is a rare combination - a software engineer plus user-experience designer. And he is not just adequate at both, he excels.</p>
  <p>Peter Granderson</p>
  <p>Developer, Mercy Virtual</p>
</div>
