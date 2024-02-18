# treehacks
old people are lonely

- [currently following](https://www.twilio.com/en-us/blog/build-video-chat-application-python-javascript-twilio-programmable-video) 
- Generating an access token for a participant


npm run dev in my-app
flask run in flask-demo

# Background

As individuals coming from families where our elderly family members are living alone, we wanted to build a project to help reduce their social isolation and loneliness. According to the National Academies of Sciences, Engineering, and Medicine (NASEM), “more than one-third of adults aged 45 and older feel lonely, and nearly one-fourth of adults aged 65 and older are considered to be socially isolated.” The New York Times reports that "By the year 2050, the global population of people aged 60 and over will … be 2.1 billion" and that "nearly 27 percent of American seniors live alone." Wanting to address the issue of senior isolation, we created Sage, as a way for older adults to connect with younger folk. 

# What is Sage? 

Sage allows anyone (but especially older adults) to connect with either random volunteers or close friends/caregivers. With a push of a button, a user can reach out to their/our network and find someone to talk to about anything they want through video call. The pairings for random volunteers would be prioritized based on common interests and user profiles, hopefully providing a starting point for conversation. 

# How is Sage built?

## UI / UX

### Lo-fi Protoypes

### Hi-fi Prototypes

## Engineeering

For frontend, we used a combination of Next.js, React, Material UI, and CSS. There are a variety of different screens including the login/sign-up page, the request call, and the call page. As this is a Next.js application, we used the serverless function as a primary backend. We used Twilio to implement the video call feature, and additionally ran a Flask server to support the sockets. Twilio's Programmable Video API was used to facilitate calls between users and Websockets were used in conjunction with Flask to match users online at the same time. 

## Screens
Here are a few of our screens:

### Landing
<img width="1408" alt="image" src="https://github.com/jasmine-dragons/sage/assets/40480195/e04dc84d-1628-4372-bd9f-ae28d68c59e8">

### Register
<img width="1298" alt="image" src="https://github.com/jasmine-dragons/sage/assets/40480195/52ec5bec-62bc-435c-b198-ee2d0cbb30dc">

### Sign In
<img width="1297" alt="image" src="https://github.com/jasmine-dragons/sage/assets/40480195/791b5ccb-ede1-4206-85d6-30a9487ce72f">

### Video Call Waiting


### Request Call
<img width="1299" alt="image" src="https://github.com/jasmine-dragons/sage/assets/40480195/3025b2c7-e4fd-431c-833f-dcb1cdf81ee2">

### Video Call
<img width="1355" alt="image" src="https://github.com/jasmine-dragons/sage/assets/40480195/9972287d-8aa3-4b24-b3cd-1435a14ac168">


## Challenges we ran into

Our first challenge was deciding on a project direction, but once we aligned on a problem space, it was also a challenge to imagine what a viable solution would look like. We also faced challenges in terms of finding appropriate ways to implement features we wanted, as well as combining the different aspects of our project while multiple people worked on different parts at the same time (e.g. frontend screens, video calling, notifications). For example one challenge was getting our videos to 

# Takeaways

## Accomplishments that we're proud of

We are proud that we were able to successfully integrate live video calling into our project. Additionally, we are proud that we were able to merge the different parts of our project into one flow. Along the way, we are also proud that we were able to debug a variety of issues to make our current demo.

## What we learned

Throughout the course of Treehacks, we learned a tremendous amount -- from improving our planning and ideation to improving our technical skills. For our beginner hackers, we were able to get a lot of knowledge working on a project and building an MVP in a short amount of time. From prototyping with Figma to building the final product, we learned how to prioritize our tasks and effectively work towards our goal. Another major feature we all learned was working with Twilio to make a functional video calling feature. This was a lot of our first times working with this API, and we learned a great amount about how to get a two way video and audio stream working! 

Another huge thing to note was that for many of us, this was among one of our first in person hackathon experiences! Our more advanced hackers had done hackathons previously, but most of them had been online. An in person hackathon came with its own slew of challenges, one of which being finding space and working in an environment with so many talented other people! It was a unique experience seeing the awesome things others were building which being so motivated to create our own application. 

## What's next for Sage?

We have a few upgrades planned to Sage! The most immediate next steps for Sage would be building out more of our intended features like a friends list, user profiles, and even favorites section. We also want to work on securing our platform, providing a safe space for anyone on the platform to interact. 

