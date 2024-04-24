---
layout: '../../layouts/PersonalProject.astro'
title: 'Homeschool Hours'
assets: 'homeschool-hours'
cover: '/src/assets/homeschool-hours/cover.png'
---

## Inspiration

We homeschool our kids and tracking hours for state requirements is a pain in the butt. There are some rules you need to follow and a percentage of hours needs to occur at specific locations, and your kids need to exceed a certain total of core school hours.

There are some great software solutions out there but most are too complicated or bloated with features unrelated to core hour tracking. I decided I could build a simpler app to get the job done and make our lives easier.

## Strategy

Since my wife does the schooling I set her up with a basic Google form, first. The aim was to understand what data she wanted to capture before building a custom solution - a lean prototype. After she'd been using her form for several months I built a dedicated app using Vue JS and Tailwind.

I didn't want to fuss with a cloud back-end, and the risks of storing data in the browser made me uneasy, so I settled on bundling the app up with Capacitor and deploying it to Android. The app wrote data to a basic JSON file on the device.

## Outcomes

The app successfully launched to the Google Play store for $9.99. I got a few dozen downloads over the course of the summer before pulling the app. There were two reasons for this.

1. I felt like cloud storage was essential to the app providing value. I offered an easy export from the app to download log data as JSON or CSV so users could back up to Google Drive or Dropbox, but this never felt like a permanent solution. Since Android doesn't offer a native cloud storage solution, I was going to have to leverage a Google product like Firebase and integrate it with in-app purchases. Managing all that felt like a huge pain.

2. We switched to iPhones and it was suddenly very hard to support the app, and I really wanted to learn Swift.

I learned a few things about the user experience that needed to change, and also got a better idea on the data structures needed to power the app at scale.

The proceeds from the Android app were enough to cover the Apple developer fee, and now I'm working on a successor for iOS. The app will function the same but be written with native code, support CloudKit for personal cloud backups, and I hope to make some widgets and Apple Watch extensions for better ecosystem integration.

The below are screenshots from the Google Play listing, which has been removed. However <a href="https://www.appbrain.com/app/homeschool-hours/com.homeschoolhours" target="_blank">here is a link</a> to view some metadata about the app from AppBrain (and yes, I issued a refund to that lady).
