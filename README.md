Slime Girls at DNA Lounge visuals in HTML/JS/CSS
========

This repo contains an HTML application for creating visuals at live performances. This is my first attempt at creating visuals for a band. The code here is as it was used for Slime Girls's performance at DNA Lounge in San Francisco on August 26th, 2012. This is mostly cobbled together from some HTML Canvas experiments I was working on and an HTML clone of Doodle Jump.

Slime Girls describes themselves as:

> The soundtrack to every time you've dreamed about the far reaches of space, the waves washing over a neon beach or giant mechs battling for your planet. Alternatively: just some sorta chiptune anime punk bullshit.

Their style includes pixelation, bright saturated colors and pictures of women in bikinis. Their music is very much beat-heavy and feels pretty dancy. I tried to encorporate these elements in my visualization.

### Demos and more info

- [DNA Lounge's recording of the performance](http://www.justin.tv/dnalounge/b/330096677) Performance begins at 1:15:00. Parts of the visuals are best viewed around 1:18:00, 1:22:30, 1:30:00, 1:40:00, 1:43:00 and 1:44:00 (the finale). DNA Lounge's stream is pretty low-resolution.
- [slimegirls.bandcamp.com](http://slimegirls.bandcamp.com) Includes most of the songs played in the performance.

Usage
========

The visuals are triggered entirely through key commands. These are laid out in order to make certain features easily accessible at the same time. These are detailed in hotkeys.js. Features include:

- Full screen color beats
- Scrolling color palettes in bars, slashes and circles
- Marqueeing pixel art bikini babes
- Show/hide centered band name
- Rumble band name
- "Hamburger Heaven" doodle jump game based off of [this example](http://cssdeck.com/labs/html5-doodle-jump/8)

Hoykeys are laid out in this manner:

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
- 0: Slow fade in or hide Hamburger Heaven game.
- LEFT & RIGHT: Play Hamburger Heaven game.