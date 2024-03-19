---
layout: '../../layouts/CaseStudy.astro'
title: 'AtHome Lite'
date: '2020-05-17'
assets: 'athome-lite'
summary: 'Simplifying virtual visits during complex times.'
---

## Background

From 2019 to 2020, into the start of COVID-19, I worked for the Mercy Hospital Network's virtual hospital R&D team. At the start of the pandemic Mercy Virtual needed a video visit solution that was easier to use than Zoom, Skype, and FaceTme - and ideally free. One of the developers on our team pitched a proof of concept for a web app that wouldn't require users to download things or create accounts.

## Design Thinking

As a team we hacked a functional prototype together in a weekend with JavaScript, SocketIO, and WebRTC. Sunday afternoon we gave a tech demo to leadership. Once leadership gave their support we spent time polishing the experience so we could ship a lean MVP to the care teams at Mercy.

As a UX designer for the project I devoted a lot of time to understanding the user flows, personas, and general product experience. I partnered closely with Eduardo Ramos, our product manager, to understand his plan to increase adoption across Mercy. One key feature was handling video calls with multiple recipients.

Until this point the MVP was 1 doctor, 1 patient. We wanted to enable doctors to get multiple patients on the call either via invite before the session or during. This required special thinking around building the recipient list and streamlining invitations while in the video UI.

## Pixel Pushing

As we started building the UI out I took time to mock up the various interfaces and experiences. Most of this was helping to visualize the chat screen when multiple video participants were engaged. Some of this was driven from competitive analysis against products like Microsoft Teams, Skype, Face Time, etc but with the product differentiator of controlling what video feed the doctor sees and the level of detail in that stream.

The use case here was that a physician may not care who's speaking, they want the patient in full frame so that they can zoom in to different parts of the video and see a more detailed stream. This was vital for doctors to be able to conduct appropriate remote visits and get eyes on the patient.

I worked to put mockups together and we got feedback from any physician willing to use the app and give their opinions (thankfully they didn't write it down).

## Code Contributions

My role at Mercy was a hybrid, part time designer part time engineer. For this app I converted the plain JavaScript MVP to a more scalable React web app. Some highlights around this process include separate app logic for sockets and WebRTC away from UI code and interface components. I also took a lot of care building responsive layouts.

One nifty feature I built was the input for inviting patients. The app's simplicity came from sending a link to the video session directly to the patient via text or email. The delivery mechanism via the API was different based on the type of entry - so I wrote a text input that sensed whether the user entered a phone number or email and ran the appropriate logic. It kept the UI simple for doctors and made the UX a breeze.

## Learning Moments

I had never built anything with WebRTC or sockets so it was cool to see this magic under the covers. The team was very small but highly motivated, lead by Peter Granderson who concocted the original MVP. Peter was fantastic at sharing his knowledge of JS and really kicked the project off well.

This app was deployed to Google Cloud Platform, which was also new to me. Our cloud architect Mike Grenko was great at coaching me to use GCP and he did some cool load balancing and dark magic to help the app be scalable to the volume of calls we encountered.

## Outcomes

AtHome Lite's experience was minimal, clinical users could create a virtual room and invite a patient via email or text message. The patient got a message with a link to join, once clicked both parties were in a video visit. We planned for a commercial release, as well, so the app tracked sessions, duration, and user totals.

By focusing on a simple user experience we were able to ship the app in a couple weeks and help ease the burden on existing systems at Mercy. After launching our pilot we saw daily user counts skyrocket to nearly **3,000** video visits a day. We also had another hospital reach out about licensing the technology for their care teams.

Here's what Alex, my director at the time, had to say about the work done:

<div class="quote">
  <p>Brendan is extremely passionate about his work, creating/delivering great products, and has great insights. His experience in design thinking and elements, coding, and understanding business value delivery makes him a huge asset to any team.</p>
  <p><a href="https://www.linkedin.com/in/alex-courtney-93aa9157/" target="_blank">Alex Courtney</a></p>
  <p>Director of Innovation R&D, Mercy Virtual</p>
</div>
