---
layout: '../../layouts/CaseStudy.astro'
title: 'AtHome Lite'
date: '2020-05-17'
assets: 'athome-lite'
summary: 'Mercy AtHome Lite aimed to simplify virtual visits during the complex times of COVID-19. This web application, built with React, SocketIO, WebRTC, and Twilio integrations, helped provide a stable, scalable, and simple to use solution for providers needing to connect with patients.'
projectDate: 'April 2020'
technology: ['React', 'JavaScript', 'HTML', 'CSS', 'WebRTC', 'Twilio', 'SocketIO']
roles: ['UX Designer', 'Front End Developer']
---

## Brief

At the start of the pandemic Mercy Virtual needed a cheap and easy video solution to maintain continuity of care. Tools like Zoom, Skype, and FaceTme relied on patients creating accounts and downloading 3rd party apps which added complexity to patient visits, ultimately reducing the efficacy of healthcare professionals.

## Strategy

Build a virtual visit application leveraging SMS and web technology to enable easy video visits. The app would allow providers to log in, enter a patient phone number or email address, and send a magic link to join a video session. Patients would only need to tap the link to join, no account creation or configuration required.

## Challenges

The MVP was 1 doctor calling 1 patient, but a stretch goal was multiple patients per session. Participants could be invited before or during the session. This required special thinking around building the recipient list and streamlining invitations while in the video UI. To keep invites simple I designed and built a hybrid input that handled email and phone number values with clean formatting for users.

## Outcomes

By focusing on a simple user experience we were able to ship the app in a couple weeks and help ease the burden on existing systems at Mercy. After launching our pilot we saw daily user counts skyrocket to nearly **3,000** video visits a day. We also had another hospital reach out about licensing the technology for their care teams.
