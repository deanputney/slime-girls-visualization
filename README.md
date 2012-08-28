Slime Girls at DNA Lounge visuals in HTML/JS/CSS
========

This repo contains an HTML application for creating visuals at live performances. This is my first attempt at creating visuals for a band. The code here is as it was used for Slime Girls's performance at DNA Lounge in San Francisco on August 26th, 2012. 

This is mostly cobbled together from some HTML Canvas experiments I was working on and an HTML clone of Doodle Jump. The final version was made in about a day and a half. *This is tested only in Chrome due to time restrictions.*

Slime Girls describes themselves as:

> The soundtrack to every time you've dreamed about the far reaches of space, the waves washing over a neon beach or giant mechs battling for your planet. Alternatively: just some sorta chiptune anime punk bullshit.

Their style includes pixelation, bright saturated colors and pictures of women in bikinis. Their music is very much beat-heavy and feels pretty dancy. I tried to encorporate these elements in my visualization.

### Demos and more info

- [Play a demo of the application here](https://dl.dropbox.com/u/994121/canvastest/slime-girls/index.html)
- [DNA Lounge's recording of the performance](http://www.justin.tv/dnalounge/b/330096677) Performance begins at 1:15:00. Parts of the visuals are best viewed around 1:18:00, 1:22:30, 1:30:00, 1:40:00, 1:43:00 and 1:44:00 (the finale). DNA Lounge's stream is pretty low-resolution.
- [slimegirls.bandcamp.com](http://slimegirls.bandcamp.com) Includes most of the songs played in the performance. Support these guys, they rock.

Usage
========

The visuals are triggered entirely through key commands. These are laid out in order to make certain features easily accessible at the same time. These are detailed in hotkeys.js. Features include:

- Full screen color beats
- Scrolling color palettes in bars, slashes and circles
- Marqueeing pixel art bikini babes
- Show/hide centered band name
- Rumble band name
- "Hamburger Heaven" doodle jump game based off of [this example](http://cssdeck.com/labs/html5-doodle-jump/8)

### Hotkeys

- QWE: Full screen color beats. This just makes the whole screen flash a bright color. Shows on press, hides on release.
- ASDFG: Select or switch color palettes for cycling. RAINBOWBRITE, GREYSCALE, LIGHTCYAN, LIGHTPINK, LIGHTGOLD respectively.
- SHIFT+ASDFG: Add color palette to cycling pattern. Allows adding more colors rapidly for major freakouts.
- ZXC: Show scrolling bikini babe. Hold key to continue scrolling babe, release to hide.
- SHIFT+ZXC: Toggle scrolling bikini babe. Same babes as above.
- V: Show band name. Hold to show, release to hide.
- SHIFT+V: Toggle band name.
- B: Rumble band name if visible.
- SHIFT+B: CRAZY rumble band name. Use sparingly, can't return to smaller rumble afterwards and doesn't play well with bigger effects.
- UIOP: Activate scrolling patterns. CIRCLES, RIGHT SLASH (broken), LEFT SLASH, BARS respectively.
- SHIFT+UIOP: Accelerate scrolling patterns. Allows multiple patterns to fight for position creating z-fighting effects. Can be sped up a lot to really freak out. This is the finale, requires a page refresh to undo at the moment but looks awesome.
- SPACE: Stop and toggle scrolling patterns.
- 0: Slow fade in or hide Hamburger Heaven game.
- LEFT & RIGHT: Play Hamburger Heaven game.

### Suggested usage

Here's a suggested performance based on what I did using this software.

- Start with just the band name and the fullscreen beats. Pulse band name and colors with song beats.
- Add in the band name rumble to the beat.
- Get those bikini babes scrolling. You can pulse them along with the beat as well, and pulse colors and band name with them too.
- Bring in scrolling bar colors. Don't reveal circles or slashes yet. Use these in conjunction with the previous elements and visualize beats with them. 
- Reveal scrolling color palettese slowly. Hold color palette keys to stop scrolling. Press palette keys to start pattern over again. Good for beat visualization.
- Bring in RAINBOWBRITE.
- Fade in Hamburger Heaven when appropriate. Use scrolling patterns, fullscreen beats and band name to keep the beat. Play the game yourself, or if possible have the audience come play.
- Close out Hamburger Heaven.
- Scroll babes, reveal circles and slashes patterns. Pulse band name.
- Speed up circles and slashes. Initiate z-fighting.
- Bring back Hamburger Heaven if you want.
- Speed up patterns more. Get things nearly freaking out.
- Finish by adding color palettes to scrolling colors. Speed things up as much as possible.
- Scroll a babe. She will scroll very slowly because you should be really freaking out your computer by now.
- Mess with color pallettes, try pulsing the band name or fullscreen beats. You probably won't be able to do much else.
- Sit back and watch the mayhem.

Result and Lessons
========

I'm pretty happy with how this went. I was very concerned that I didn't have enough material to fill a whole half hour set, but I received very good advice that I should take it slow and reveal things one by one. Pacing myself properly was much more important than I originally expected, and I had nearly built much more material than I needed.

I planned bigger than I was able to implement, but this was a good thing. The close deadline (I got my assignment to Slime Girls Friday evening) forced completion and made me keep things simple. I much prefer this aesthetic to something overly complicated. I scrapped a plan to distribute the Hamburger Heaven game to the audience's phones, which was a good decision, but I look forward to experimenting with mobile in this environment soon.

Friends in the audience were very positive about the visuals. Some reported that other audience members were pointing and talking to each other about them. One girl apparently wanted to know what game was being played because it looked like fun. I've been invited back by the organizer to do visuals again.

For a first outing with a quick project, I'm ecstatic.