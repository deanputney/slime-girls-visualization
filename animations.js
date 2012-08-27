var top, bottom, drawBarsLoop, scrollBarsLoop;
var drawBarsLoopSpeed = 200;
var scrollBarsLoopSpeed = 100;
var scrollBarsColors = new Array();
    
var COLORSETS = {
  RAINBOWBRITE: new Array('#71c8bf', '#1ba554', '#cad93b', '#fef02f', '#fbb62c', '#f38a2e', '#ee592c', '#ea1d2b', '#b42767', '#65328f', '#52529f', '#20aeda'),
  CMY: new Array('#FFE328', '#FF0E9B', '#20BECC'),
  CMYK: new Array(''),
  WHITE: new Array('#fff'),
};
    
COLORSETS.GREYSCALE = new Array();
for(x=1; x<=12; x++){
  color = '#'+zeroFill(parseInt(255-20*x).toString(16), 2)+zeroFill(parseInt(255-20*x).toString(16), 2)+zeroFill(parseInt(255-20*x).toString(16), 2);
  COLORSETS.GREYSCALE.push(color);
}
    
COLORSETS.BLUE = new Array();
for(x=1; x<=12; x++){
  color = '#'+zeroFill(parseInt(0).toString(16), 2)+zeroFill(parseInt(0).toString(16), 2)+zeroFill(parseInt(255-20*x).toString(16), 2);
  COLORSETS.BLUE.push(color);
}
    
COLORSETS.LIGHTBLUE = new Array();
for(x=1; x<=12; x++){
  color = '#'+zeroFill(parseInt(255-20*x).toString(16), 2)+zeroFill(parseInt(255-20*x).toString(16), 2)+zeroFill(parseInt(255-10*x).toString(16), 2);
  COLORSETS.LIGHTBLUE.push(color);
}   
 
COLORSETS.LIGHTCYAN = new Array();
for(x=1; x<=12; x++){
  color = '#'+zeroFill(parseInt(32+5*x).toString(16), 2)+zeroFill(parseInt(190+5*x).toString(16), 2)+zeroFill(parseInt(204).toString(16), 2);
  COLORSETS.LIGHTCYAN.push(color);
}
    
COLORSETS.LIGHTPINK = new Array();
for(x=1; x<=12; x++){
  color = '#'+zeroFill(parseInt(255).toString(16), 2)+zeroFill(parseInt(36+10*x).toString(16), 2)+zeroFill(parseInt(120+10*x).toString(16), 2);
  COLORSETS.LIGHTPINK.push(color);
}

COLORSETS.LIGHTGOLD = new Array();
for(x=1; x<=12; x++){
  color = '#'+zeroFill(parseInt(255).toString(16), 2)+zeroFill(parseInt(227).toString(16), 2)+zeroFill(parseInt(40+15*x).toString(16), 2);
  COLORSETS.LIGHTGOLD.push(color);
}
    
COLORSETS.UNRAINBOW = new Array();
for(x=0; x<12; x++){
  COLORSETS.UNRAINBOW[x] = Colors.complement(COLORSETS.RAINBOWBRITE[x]);
}
    
COLORSETS.RAINBOW = new Array();
for(i=1; i<=12; i++){
  console.log(i);
  color = Colors.rgb2hex(Colors.hsv2rgb([i*25, 90, 100]).a);
  console.log(i);
  console.log(color);
  COLORSETS.RAINBOW.push(color);
}

COLORSET = {
  CURRENT: COLORSETS.WHITE,
  INDEX: 0,
  COLOR: function(){
    return this.CURRENT[this.INDEX];
  },
  NEXT: function(){
    if(this.INDEX+1 < this.CURRENT.length)
      this.INDEX = this.INDEX+1;
    else
      this.INDEX = 0;
  },
  PREVIOUS: function(){
    if(this.INDEX-1 >= 0)
      this.INDEX = this.INDEX-1;
    else
      this.INDEX = this.CURRENT.length-1;
  }
}

CS = {
  BEAT: jQuery.extend({}, COLORSET),
  SCROLL: jQuery.extend({}, COLORSET),
}

function zeroFill( number, width ){
  width -= number.toString().length;
  if (width>0){
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

function clearCanvas(c) {
  var ctx = c.getContext("2d");
  // Store the current transformation matrix
  ctx.save();

  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, c.width, c.height);

  // Restore the transform
  ctx.restore();
}





function drawBars(c, bs){
  var ctx = c.getContext("2d");

  pow = Math.random()*10;
  for(y=0; y<101; y++){
    for(x=0; x<101; x++){
      ctx.fillStyle = parseInt(Math.random()*(2000*((x+1)+(y+1)))).toString(16);
      ctx.fillRect(bs*x,bs*y,bs,bs);
    }
  }
}
    
    
// function addScrollColor(){
//   c = Math.random();
//   if(c>.6){
//     // console.log('red');
//     c = parseInt(Math.random()*(4095-3840)+3840);
//   }
//   else if(c>.3){
//     // console.log('green');
//     c = parseInt(Math.random()*(240-12)+12);
//   }
//   else{
//     // console.log('blue');
//     c = parseInt(Math.random()*(4095-3000)+3000);
//   }
//   scrollBarsColors.push(c.toString(16));
// }

function addScrollColorSet(colorset){
  // console.log(scrollBarsColors);
  for(x=0; x<colorset.length; x++){
    // console.log(colorset[x]);
    // console.log(scrollBarsColors);
    scrollBarsColors.push(colorset[x]);
    // console.log(colorset[x]);
    // console.log(scrollBarsColors);
  }
}
    
    
function scrollBars(c){
  // console.log('scrolling bars');
  var ctx = c.getContext("2d");
  w = parseInt(c.width/scrollBarsColors.length);
  h = c.height;
  for(x=0; x<scrollBarsColors.length; x++){
    ctx.fillStyle = scrollBarsColors[x];
    ctx.fillRect(w*x,0,w,h);
  }
  for(x=0; x<scrollBarsColors.length; x++){
    ctx.fillStyle = scrollBarsColors[x];
    ctx.fillRect(w*scrollBarsColors.length+w*x,0,w,h);
  }
  scrollBarsColors.push(scrollBarsColors.shift());
}
    
function scrollSlash(c,d){
  // console.log('scrolling slash');
  var ctx = c.getContext("2d");
  w = parseInt(c.width/scrollBarsColors.length);
  h = c.height;
  for(x=0; x<scrollBarsColors.length; x++){
    ctx.rotate(d);
    ctx.fillStyle = scrollBarsColors[x];
    ctx.fillRect(w*x,-1.7*h,w,h*3);
    ctx.rotate(-1*d);
  }
  for(x=0; x<scrollBarsColors.length; x++){
    ctx.rotate(d);
    ctx.fillStyle = scrollBarsColors[x];
    ctx.fillRect(w*scrollBarsColors.length+w*x,-1.7*h,w,h*3);
    ctx.rotate(-1*d);
  }
  scrollBarsColors.push(scrollBarsColors.shift());
}
    
function drawBackground(){
  if(jQuery('#canvas1').css('display') == 'none'){
    var c = document.getElementById("canvas1");
    var top = jQuery("#canvas2");
    var top_s = "#canvas2";
    var bottom = jQuery("#canvas1");
  }
  else{
    var c = document.getElementById("canvas2");
    var top = jQuery("#canvas1");
    var top_s = "#canvas1";
    var bottom = jQuery("#canvas2");
  }
      
  drawBars(c, 10);
      
  top.css('z-index', '-10');
  bottom.css('z-index', '-5');
  bottom.fadeIn('slow', function(){top.hide();});
}
    
function scrollCircles(c){
  // console.log('scrolling circles');
  var ctx = c.getContext("2d");
  // Store the current transformation matrix
  ctx.save();

  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, c.width, c.height);

  // Restore the transform
  ctx.restore();
      
  w = parseInt(c.width/scrollBarsColors.length);
  h = c.height;
  for(x=1; x<scrollBarsColors.length; x++){
    ctx = c.getContext("2d");
    // console.log("scrollBarColors "+x+" "+scrollBarsColors[x]);
    ctx.fillStyle = scrollBarsColors[x];
    ctx.strokeStyle = scrollBarsColors[x];
        
    ctx.beginPath();
    d = c.height*1.2-(1.2*x*c.height/scrollBarsColors.length);
    ctx.arc(c.width/2,c.height/2,d,0,Math.PI*2,true);
    // console.log(d);
    // console.log(ctx.fillStyle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
        
    // ctx.fillRect(w*x,0,w,h);
    // console.log(ctx.fillStyle);
  }
  scrollBarsColors.push(scrollBarsColors.shift());
}


function squareBeatHit(){
  b = $('.beat.square');
  if(!b.is(':visible')){
    b.css('background', CS.BEAT.COLOR());
    b.show();
    return true;
  }
  return false;
}

function squareBeatRelease(){  
  b = $('.beat.square');
  b.fadeOut('fast');
}

function squareBeatNext(){
  if(squareBeatHit())
    CS.BEAT.NEXT();
}

function squareBeatPrevious(c){
  if(squareBeatHit())
    CS.BEAT.PREVIOUS();
}


function beatFullscreenHit(color){
  b = $('.beat.fullscreen');
  if(!b.is(':visible')){
    if(!color)
      b.css('background', CS.BEAT.COLOR());
    else
      b.css('background', color);
    b.show();
    return true;
  }
  return false;
}

function beatFullscreenRelease(){
  b = $('.beat.fullscreen');
  b.hide();
}

function beatFullscreenNext(){
  if(beatFullscreenHit())
    CS.BEAT.NEXT();
}

function beatFullscreenPrevious(c){
  if(beatFullscreenHit())
    CS.BEAT.PREVIOUS();
}


function scrollGirlsHit(){
  b = $('#scrollgirls');
  if(!b.is(':visible')){
    b.show();
    return true;
  }
  return false;
}

function scrollGirlsRelease(){
  b = $('#scrollgirls');
  b.fadeOut('fast');
}

function scrollGirlsNext(){
  if(scrollGirlsHit()){
    g = $('#scrollgirls:visible');
    // if(g != null && )
  }
}


jQuery(document).ready(function(){  
  // scrollBars(document.getElementById('canvas1'));
  // drawBars(document.getElementById("canvas1"), 10);
  // drawBackground();  
  // setInterval("drawBackground();", 5000);
  console.log('rect drawn');
      
  addScrollColorSet(COLORSETS.LIGHTPINK);
  beatColor = COLORSETS.RAINBOWBRITE[0];
  
  var c = document.getElementById('canvas1');
  // scrollCircles(document.getElementById('canvas1'));
  // scrollBarsLoop = setIntebhjrval('scrollSlash(document.getElementById(\'canvas1\'), .90);', scrollBarsLoopSpeed);
});