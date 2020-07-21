# Giraffe-farm
This is test task for one of junior job vacancies. And my first try in backend development =) 
<br>I'm very excited about all this stuff I have gotten to know and even more excited for all those things I haven't yet.

## How to use it
<br>For lauching this code you will need Node.js and MongoDB installed.
<br>After cloning repo and installing packages run script <code>npm run dev</code>. UI-part starts on localhost:4343.

## What's inside
  This is one-page application with cute design and limited functionality. (Mock-up was provided by https://github.com/nikas-light/test-task .) All you can do on this site is collecting giraffes: create them, delete or change their info.
  
Unfortunately, I failed to implement image upload =( That's why all your giraffes look the same: this avatar is hard-coded. Validation for input fields is also very poor. Front-side checks if name field is filled, server does the same. Frontend also checks if number inputs are in specific range; and that's all. I wish I had more time and skill for good validation. 

On the other hand, I'm pleased with component design. I like the way Card wrapper manages giraffe look and behavior. Card wrapper renders 4 different types of card template accordingly to selected action: add giraffe, change it, delete or just observe them all (CRUD actions). I'm also pretty fine with my HTML-CSS; I used some media-query, so site is not mobile-hostile. 

Backend was huge challenge for me, especially CORS policy - after all, I used cors module with options. MongoDB and mongoose are really cool tools; I'm looking forward to using them more. 

Also, there is no production mode, but since whole application is obviously not ready for production, I believe it's fair.
