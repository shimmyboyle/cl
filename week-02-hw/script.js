let stories = [
    "You try to exit, but the browser tab keeps multiplying.",
    "You click on a link, and it transports you to a forgotten page from 1999.",
    "You attempt to refresh, but the page only reloads in reverse.",
    "You scream, but your voice becomes a CAPTCHA.",
    "You try to log out, but your password has been replaced by a series of emojis.",
    "You’re forced to complete an endless series of pop-up ads to move forward.",
    "You discover you can only communicate in GIFs.",
    "You run towards the login button, but it keeps scrolling down out of reach.",
    "You become the cursor and must click your way through the site.",
    "You’re stuck in an infinite loop of ‘Page Not Found’ errors.",
    "You try to find help, but the contact form auto-rejects every message.",
    "You see your reflection in a broken image icon.",
    "You open a menu, but it keeps nesting infinitely deeper.",
    "You discover you're now the main character in every video autoplaying on the site.",
    "You try to close a pop-up, but it keeps spawning new ones.",
    "You are forced to solve endless reCAPTCHAs that never seem to end.",
    "You click on a button, but it redirects you to the same page again and again.",
    "You try to open another tab, but every tab is this one.",
    "You start hearing the page’s background music on a loop, louder each time.",
    "You attempt to scroll down, but the page only scrolls you up.",
    "You find yourself inside a forum thread that has no bottom.",
    "You can’t leave the page until you agree to impossible terms and conditions.",
    "You hover over a link, but it warps to a different location each time.",
    "You try to log out, but the ‘Are you sure?’ dialogue won’t close.",
    "You try to download a file, but it keeps getting stuck at 99%.",
    "You’re stuck in an infinite carousel of product images that you can’t exit.",
    "You become part of the site's footer, endlessly scrolling beneath every page.",
    "You click a button, but every result is just 'Access Denied'.",
    "You can only move by clicking hypertext, which randomly teleports you across the site.",
    "You try to type, but every letter becomes a random symbol.",
    "You must complete an impossible puzzle to unlock the next page.",
    "You’re forced to re-enter your information in a form that resets every time you press submit.",
    "You try to find help, but the help page keeps redirecting you to FAQs in another language.",
    "You are stuck in an endless 'Loading…' animation.",
    "You attempt to watch a video, but the buffering never stops.",
    "You find yourself endlessly sliding through an infinite cookie policy prompt.",
    "You try to leave, but a pop-up begs you to stay.",
    "You suddenly become part of a spam email list, and every message is about you.",
    "You open the site’s search bar, but it only returns cryptic error codes.",
    "You try to delete your account, but the confirmation email never arrives.",
    "You attempt to contact support, but the chatbot can only reply with 'I don’t understand'.",
    "You try to access the site's homepage, but it's hidden behind layers of redirects.",
    "You attempt to change your profile picture, but it’s stuck as a pixelated version of you.",
    "You get stuck in a loading screen where the progress bar resets every time it hits 100%.",
    "You try to view your profile, but it keeps morphing into a stranger’s.",
    "You’re forced to play a pop-up mini-game that you can never win.",
    "You try to click ‘Next Page,’ but it redirects you to the beginning.",
    "You attempt to close the browser, but your face appears in the favicon.",
    "You refresh the page, and now everything is written in code you can’t understand.",
    "You try to click a link, but the cursor turns into a spinning wheel of doom.",
    "You’re stuck in a loop of infinite cookie pop-ups you can’t accept.",
    "You suddenly find yourself as a pixelated character in a 16-bit game embedded on the site.",
    "You try to close the tab, but it only duplicates itself endlessly.",
    "You’re trapped in a slideshow that loops forever.",
    "You try to click the back button, but it keeps sending you deeper into the site.",
    "You try to submit a form, but it erases your progress every time.",
    "You get stuck in an autoplay video that you can't pause or escape.",
    "You attempt to check the site’s menu, but it expands across the entire page.",
    "You try to refresh the page, but it always reloads you back to the same pop-up ad.",
    "You’re forced to choose between two links, and both lead to error pages.",
    "You see yourself reflected in every image, but slightly altered each time.",
    "You try to scroll down, but it keeps pulling you back to the top of the page.",
    "You find a way out, only to discover it was a broken link.",
    "You try to use the search bar, but it only finds outdated memes.",
    "You attempt to read an article, but ads keep covering the text.",
    "You try to click a button, but your mouse pointer glitches and won’t reach it.",
    "You become the avatar in the site's interactive tutorial, unable to escape.",
    "You try to navigate the site, but every link is a dead end.",
    "You try to click the 'Home' button, but it redirects you to a blank page.",
    "You suddenly become the background image, looping forever.",
    "You try to change your settings, but they revert back the moment you leave the page.",
    "You attempt to scroll, but the page zooms in instead.",
    "You try to leave, but a chatbox opens asking for feedback you can’t escape.",
    "You attempt to read the terms of service, but the page grows longer the more you scroll.",
    "You’re caught in a banner ad that you must watch over and over.",
    "You try to click ‘Skip Ad,’ but it extends the ad time instead.",
    "You attempt to load a new page, but the URL keeps changing every time you type.",
    "You try to save your work, but the page crashes and erases everything.",
    "You open a tab, only to find a version of yourself trapped inside.",
    "You try to log out, but the 'Remember Me' button keeps reactivating.",
    "You try to download a file, but it becomes a never-ending chain of viruses.",
    "You enter a virtual store, but every item is out of stock except for the most expensive one.",
    "You try to enter your payment information, but the site keeps rejecting your card.",
    "You try to open a new window, but every window leads back to the same page.",
    "You attempt to leave, but a spinning circle keeps you frozen in place.",
    "You find a hidden message in the source code, and it’s a warning about you.",
    "You’re stuck in a live chat loop where the agent always disconnects before solving your problem.",
    "You click on an article, but it’s just an infinite scroll of lorem ipsum.",
    "You see a message that says 'You’ve been here before, haven’t you?'",
    "You try to watch a video, but it loops the first 5 seconds endlessly.",
    "You attempt to adjust the volume, but it only gets louder.",
    "You try to sign up for an account, but the form keeps resetting with every field.",
    "You try to leave a comment, but it autocorrects everything into nonsense.",
    "You open an FAQ page, but none of the questions make sense.",
    "You attempt to zoom in on a picture, but it zooms out instead.",
    "You try to check out, but the site freezes every time you enter your details.",
    "You get stuck inside an endless poll that asks the same question in different ways.",
    "You attempt to fill out a survey, but the questions get more personal with every click."
  ];
  


window.addEventListener("load", function() {
    alert("Oh no! You are trapped inside a webpage! Click one of the buttons to see what happens to you!");
    
    let buttonContainer = document.getElementById('button-container');
    

    for (let i = 0; i < 99; i++) {
        let button = document.createElement('button');
        button.innerText = "Push Me";
        button.classList.add('buttons');
        

        button.addEventListener('click', function() {
            alert(stories[i]);
        });
        
  
        buttonContainer.appendChild(button);
    }
});