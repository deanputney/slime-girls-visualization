/* key command controls */
/* hide GUI controls */
$(document).bind('keydown', 'shift+/', function(){$('#controls').toggle()});
    
/* clear colors */
$(document).bind('keydown', 'space', function(){if($('#canvas1').is(':visible')){clearInterval(scrollBarsLoop);$('#canvas1').hide();}else{$('#canvas1').show();}});
    
/* colorsets */
$(document).bind('keydown', 'a', function(){scrollBarsColors = new Array();addScrollColorSet(COLORSETS.RAINBOWBRITE);});
$(document).bind('keydown', 'shift+a', function(){addScrollColorSet(COLORSETS.RAINBOWBRITE);});
$(document).bind('keydown', 's', function(){scrollBarsColors = new Array();addScrollColorSet(COLORSETS.GREYSCALE);});
$(document).bind('keydown', 'shift+s', function(){addScrollColorSet(COLORSETS.GREYSCALE);});
$(document).bind('keydown', 'd', function(){scrollBarsColors = new Array();addScrollColorSet(COLORSETS.LIGHTCYAN);});
$(document).bind('keydown', 'shift+d', function(){addScrollColorSet(COLORSETS.LIGHTCYAN);});
$(document).bind('keydown', 'f', function(){scrollBarsColors = new Array();addScrollColorSet(COLORSETS.LIGHTPINK);});
$(document).bind('keydown', 'shift+f', function(){addScrollColorSet(COLORSETS.LIGHTPINK);});
$(document).bind('keydown', 'g', function(){scrollBarsColors = new Array();addScrollColorSet(COLORSETS.LIGHTGOLD);});
$(document).bind('keydown', 'shift+g', function(){addScrollColorSet(COLORSETS.LIGHTGOLD);});
    
/* visual patterns */
$(document).bind('keydown', "p", function(){clearInterval(scrollBarsLoop);scrollBarsLoop = setInterval('scrollBars(document.getElementById(\'canvas1\'));', scrollBarsLoopSpeed);});
$(document).bind('keydown', "shift+p", function(){scrollBarsLoop = setInterval('scrollBars(document.getElementById(\'canvas1\'));', scrollBarsLoopSpeed);});
$(document).bind('keydown', "o", function(){clearInterval(scrollBarsLoop);scrollBarsLoop = setInterval('scrollSlash(document.getElementById(\'canvas1\'), .90);', scrollBarsLoopSpeed);});
$(document).bind('keydown', "shift+o", function(){scrollBarsLoop = setInterval('scrollSlash(document.getElementById(\'canvas1\'), .90);', scrollBarsLoopSpeed);});
$(document).bind('keydown', "i", function(){clearInterval(scrollBarsLoop);scrollBarsLoop = setInterval('scrollSlash(document.getElementById(\'canvas1\'), -0.90);', scrollBarsLoopSpeed);});
$(document).bind('keydown', "shift+i", function(){scrollBarsLoop = setInterval('scrollSlash(document.getElementById(\'canvas1\'), -.90);', scrollBarsLoopSpeed);});
$(document).bind('keydown', "u", function(){clearInterval(scrollBarsLoop);scrollBarsLoop = setInterval('scrollCircles(document.getElementById(\'canvas1\'));', scrollBarsLoopSpeed);});
$(document).bind('keydown', "shift+u", function(){scrollBarsLoop = setInterval('scrollCircles(document.getElementById(\'canvas1\'));', scrollBarsLoopSpeed);});

/* beats */
$(document).bind('keydown', "q", function(){beatFullscreenHit('#000');});
$(document).bind('keyup', "q", function(){beatFullscreenRelease();});
$(document).bind('keydown', "w", function(){beatFullscreenHit('#20becc');});
$(document).bind('keyup', "w", function(){beatFullscreenRelease();});
$(document).bind('keydown', "e", function(){beatFullscreenHit('#ffe328');});
$(document).bind('keyup', "e", function(){beatFullscreenRelease();});

/* girls */
$(document).bind('keydown', "z", function(){$('#scrollgirl1').show();});
$(document).bind('keyup', "z", function(){$('.scrollgirl').hide();});
$(document).bind('keydown', "shift+z", function(){$('.scrollgirl').hide();$('#scrollgirl1').toggle();});
$(document).bind('keydown', "x", function(){$('#scrollgirl2').show();});
$(document).bind('keyup', "x", function(){$('.scrollgirl').hide();});
$(document).bind('keydown', "shift+x", function(){$('.scrollgirl').hide();$('#scrollgirl2').toggle();});
$(document).bind('keydown', "c", function(){$('#scrollgirl3').show();});
$(document).bind('keyup', "c", function(){$('.scrollgirl').hide();});
$(document).bind('keydown', "shift+c", function(){$('.scrollgirl').hide();$('#scrollgirl3').toggle();});


/* bandname */
$(document).bind('keydown', "v", function(){$('#bandname').show();});
$(document).bind('keyup', "v", function(){$('#bandname').hide();});
$(document).bind('keydown', "shift+v", function(){$('#bandname').toggle();});
$(document).bind('keydown', "b", function(){$('#bandname .rumble').jrumble({x:5,y:5,rotation:2});$('#bandname .rumble').trigger('startRumble');});
$(document).bind('keyup', "b", function(){$('#bandname .rumble').trigger('stopRumble');});
$(document).bind('keydown', "shift+b", function(){$('#bandname .rumble').jrumble({x:100,y:100,rotation:5});$('#bandname .rumble').trigger('startRumble');});
$(document).bind('keyup', "shift+b", function(){$('#bandname .rumble').trigger('stopRumble');});



/* game */
var init = true;
$(document).bind('keydown', "0", function(){if($('.container').is(':visible')){$('.container').hide();}else{$('.container').fadeIn(5000);}});
$(document).bind('keydown', "return", function(){if(init){init(); init = false;}else{reset();}});
$(document).bind('keydown', "backslash", function(){console.log('init');init();reset();});
