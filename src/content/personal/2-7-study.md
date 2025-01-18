---
title: '2:7 Study'
assets: '2-7-study'
cover: '/src/assets/2-7-study/cover.png'
---

## Inspiration

Our small group leader at church led us through the first book of the <a href="https://www.navigators.org/resource/the-27-series/" target="_blank">2:7 Series</a>. The goal of which is to memorize some key promises from the Bible. I built a basic app for everyone to make memorizing more practical and fun. The app needed to be simple to access, available across devices, work offline, persist user preferences, and tolerate various translations.

## Strategy

Leveraging my knowledge of JavaScript and Vue JS I built a PWA with local storage and deployed it to GitHub. The root app supports dark and light modes and has a launching point for various activities to help with memorization. The content abstracted to a global dictionary, the content is tagged by translation and dynamically loaded to each activity. All preferences are stored in localStorage for persistence.

## Outcomes

This was a fun app that helped everyone meet their memorization goals and made testing each other super easy. Because it's a PWA there's no barrier to entry and the app worked across devices. The translation picker was helpful because if someone used a different translation than you the app made it easy to swap and follow along. The games I designed were also engaging and made memorizing the scriptures a delight.

<a href="https://brendanbax.github.io/27_study/" target="_blank">Check it out</a>
