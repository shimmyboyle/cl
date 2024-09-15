Ok, so let's talk a little bit about the process.

First I created a basic event-triggered system where I made a button, created an event listener and then made it so that an alert popped up when the button was pressed.

I tested all this functionality using console.log before inputting the main content.

Once I had a working button and listener, and had the button clicks launching an alert (I liked the idea of hijacking the webpage alerts because they feel very official), it was really a matter of creating a for loop to clone the button 100 times.

I knew the basic concept I wanted to use was to have a massive amount of buttons (heavily inspired by, but much less grand in scale than: https://onemillioncheckboxes.com/, which is exactly what it sounds like: when it was launched it was essentially a multi-player game with a million check boxes on a website to see if they could get all million boxes checked.  Spoiler alert: they did.)

In terms of story, I seem to be pretty into meta-concepts, so I landed on the idea of being stuck inside a website and what various things might happen to you if you were stuck inside a website.  I wouldn't say conceptually this was influenced by it, but after I started it reminded me of the book "Several People Are Typing", which takes place entirely via slack conversations and somehow one of the characters accidentally trades place with the Slackbot and gets trapped inside Slack.

Since I wanted 100 buttons, with my level of time committments, it felt prohibitive to write 100 different one line stories, so being that we live in the age of AI, naturally I turned to ChatGPT and asked it to generate 100 different one line stories of things that might happen to you if you were stuck inside a webpage.  I thought what it turned out was pretty great.

From there, I put all the stories inside an array and I originally thought I was going to randomize the choosing, but ultimately it didn't seem necessary, so I assigned each index number to i, the same as the button it created.

There was some basic CSS work where I wanted the buttons to be arranged so they took up the entire page and once I got that figured out, I started to wonder about the style of the buttons.

I originally pictured the most boring, dry, windows 98 looking buttons you could imagine, but then I started to think maybe a DOS-inspired look might be cool.

I asked Chat GPT what it thought about that and I really liked what it came back with.  I had already been planning on creating rollovers using the "hover" and "active" states for the buttons, but one thing it suggested that never would have occurred to me was "transition", which created a slight delay when the rollover happened, which made it feel a bit more stylish.

Ultimately, I feel relatively good about the result.
