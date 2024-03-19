---
layout: '../../layouts/CaseStudy.astro'
title: 'International'
date: '2017-11-12'
assets: 'international'
summary: 'Increasing online mortgage applications for a national bank'
---

## Background

As a UX Designer with WWT Asynchrony Labs I was assigned to a long-term contract with a national bank. The goal of my engagement was to modernize their online mortgage application which currently had zero traffic. They were looking to roll out a new design that would increase online mortgage app conversions, with a long-term goal of modeling this approach to other consumer lending applications.

## Design Thinking

I started by journey mapping the home buying process, leveraging my experience as a licensed Realtor in the State of Missouri. I also did a few usability reviews of the current app to establish a baseline for success. I presented my findings to the business team at the bank and we workshopped a few approaches to the problem.

After testing some of our ideas I ultimately landed on building a single page application that incrementally moved users along the happy path to lending. I wanted to break the long data-capture process of applying for a loan into smaller chunks of activity. This approach allowed for branching logic so users could skip questions that weren't relevant to them and enabled a more conversational interface- answers from some questions populate the text of others.

This may seem common place today if you've use Rocket Mortgage or Turbo Tax software but at the time "conversational UI" was just becoming a thing and it took some convincing to get the bank team on board. I laid out the logic maps, wire frames, and made a prototype using Sketch and InVision. There were **205** initial screens for the new home purchase flow. I validated my assumptions by leading usability labs to test new interaction patterns. During the sessions I evaluated confidence level, time on task, and accuracy of data entry as my metrics.

I took my design a step further and built a responsive prototype using HTML, SaSS, and JavaScript because I believe in giving users the highest fidelity prototype to test with. Also, when an application is data-centric or uses a lot of forms I find that static pictures or slide shows create a huge disconnect with users. It was nice to give them a real form to fill out when testing.

## Code Contributions

When it came time to produce the app I was blessed to work with Calvin Cox, an amazing developer and mentor. He gave me a few development tasks to help implement the UI styles and form controls into his Angular 4 codebase. I was still learning modern JavaScript at the time so I stuck to HTML and CSS mostly.

I was able to write some tests for the user flow using Cypress, a JavaScript based testing framework for anything that runs in a browser. This tool made it easy to automate filling out forms and navigating through the app, ensuring users got to the right screen after entering different types of information.

I also handled light PM duties like managing the backlog, providing transparency to the business teams at the bank, and ensuring the feedback or issues were captured on our Kanban board.

<div class="quote">
  <p>Brendan brought strong design skills to our projects together while at Asynchrony. He was able to manage the client relationship and user feedback to build a complete application. Brendan was also quick to jump into technical discussions and gain knowledge and understanding of every aspect of the user experience.</p>
  <p><a href="https://www.linkedin.com/in/calvinkcox/" target="_blank">Calvin Cox</a></p>
  <p>Developer, Asynchrony Labs</p>
</div>

## Outcomes

We shipped our MVP on time and were awarded an additional project by the client to map out a tracker for the entire mortgage process. Our design system was adopted for other digital products in consumer lending. Mortgage Loan Originators from the bank began referring customers to the online app because of its ease of use and the bank began seeing increased conversions compared to the previous application flow.

<div class="quote">
  <p>Everyone is so excited about it as it is our first step into creating a first class experience for our customers and, I believe, will be the foundation to move us past our peers in our digital experience. Corporate marketing loved it so much that they are looking at the possibility of a commercial! All of you should take a HUGE amount of pride in the work you’ve already done and the fine tuning to get this perfect. It amazes me every time I do a demo how incredible this looks. I am extremely lucky to work with this kind of talent. You all are amazing and I thank you very much for all of the effort.</p>
  <p>Rory Ferrell</p>
  <p>VP Customer Experience</p>
</div>
