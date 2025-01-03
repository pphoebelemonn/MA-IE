"names for each block correspond to sections of the audio/poem"

"intro"
//static animation with audio feedback
a.setSmooth(0.8); a.setCutoff(5);
noise(300,3).rotate(Math.PI/4).modulate(osc(16,0.03),()=>a.fft[0]).out(o0);

"stanza 1"
let start = 255; let speed = 1; let p1 = new P5();
//first layer p5 sketch with teal and purple gradient
p1.draw = () => {
  p1.noStroke();
  if(start > p1.windowWidth + 255 || start < 255) {
    speed *= -1;
  }
  //define how fast and how many segments of the gradient
  start += speed*8; let numRectangles = 20;
  let rectWidth = p1.windowWidth / numRectangles;
  for (let x = 0; x < p1.windowWidth; x +=rectWidth) {
    let green = start - x; //gradually increase green value ot purple
    let red = 180;
    p1.fill(red, green, 220);
    p1.rect(x, 0, rectWidth, p1.windowHeight)
  }
};
s0.init({src:p1.canvas}
//second layer p5 with text
let p2 = new P5();
p2.draw = () => {
  let msg ='So you want to talk about digital footprints?';
  p2.textSize(60); p2.fill("red");
  p2.text(msg,p1.windowWidth/4, p1.windowHeight/2.8,3*p1.windowWidth/4,p1.windowHeight);
} ; s1.init({src:p2.canvas})
src(s0).layer(src(s1).modulate(voronoi(2,0.2))).out(); //make wavy motion with text

let n = 500; //set initial pixel value
s1.initImage("file:///Users/phoebelemon/comp.jpg") //scroll, repeat, and postrerize image
src(s1).scale(1, 4/5).scrollY(1,0.1)
   .posterize( [10, 60].fast(10))
   // .pixelate(()=> n-=4) //***  //decrease pixel amount by 4
   .out();

//layering p5  canvas with typing effect over video
//*** typing effect is used several times throughout the performance, see explanation in following block only
let p1 = new P5();
let current_char = 0; //initalize curent charcter of typed message
p1.draw = () => {
  let msg ="What/are/all/the/paths/you’ve/taken/before?\n\n\
  How-is-your-mind-networked-with-the-history-\n\
  of-the-past-present-and-future?";
  p1.textSize(40); p1.fill("red");
  if (p1.frameCount > 30) { //delay typing by 30 frames
  let curr = msg.substring(0, current_char); //get a substring of the message
  p1.text(curr, p1.windowWidth/5, p1.windowHeight/3,2*p1.windowWidth/3,p1.windowHeight); //display the sliced message
  current_char += p1.random(0.2, 0.7); //increase the size of substring by random amount to look like oragnic typing
  //higher values = faster typing
  }
}
s0.init({src:p1.canvas})
s1.initVideo("file:///Users/phoebelemon/world.mp4")
src(s1).layer(s0).out(); //layer canvas with video

"stanza 2"
let p1 = new P5();
let w = p1.windowWidth, h= p1.windowHeight;
p1.draw = () => {
  //set vars for messages
  let msg = "Was (cyber)space once not just space?"
  let msg1 ='MAN                 WOMAN\nWEST\
               EAST\nWHITE              OTHER';
  let msg2 = "COLONIZER AND COLONIZED?"
  p1.textSize(80); p1.fill("blue");
  p1.text(msg,w/3, h/2.5,2*w/3,h);
  // p1.text(msg1,w/4, h/2,2*w/3,h);   //***
  p1.text(msg2,w/3, h/2.5,2*w/3,h);  //***
}
s0.init({src:p1.canvas})
s1.initImage("file:///Users/phoebelemon/map.jpg")
osc(6, 0.1, 2).kaleid(5).color(2,0.3,3).luma(0.4).modulate(noise(6, 0.5))
  .blend(s1,[0.3,0.5,0.7,0.9,0.7,0.5].fast(5)) //*** //fade in and out image
  .layer(src(s0) //***
    .modulate(voronoi(0.5, 0.5)) //create warping effect
    // .scrollY(1,0.3) //***
  ).out();

"stanza 3"
let p1 = new P5();
//create canvas
p1.draw = () => {
  let msg = "extractING, exploitING, exterminatING";
  p1.textSize(120); p1.fill("yellow");
  p1.text(msg, 0,0,400,500);
  }
s0.init({src: p1.canvas})
s1.initVideo("file:///Users/phoebelemon/cry.mp4")
src(s1).scale(1, 4/5).modulate(voronoi(0.3,0.6))
    .layer(src(s0).repeat(2,2).scrollY(1,0.1).scrollX(1,0.1)) //*** layer  canvas and have it scroll and repeat in upward left motion
    .out();

s1.initImage("file:///Users/phoebelemon/laptop.jpg")
s2.initImage("file:///Users/phoebelemon/card.jpg")
src(s1).repeat(3,3).scrollX(1,-0.07) //3 by 3 grid of video
  .blend(s2,[0,0.2,0.4,0.6,0.8,1].fast(10)) //*** fade in and out with second image
  .out()

//code is like
s1.initVideo("file:///Users/phoebelemon/man.mp4")
let p1 = new P5();
let msg_idx, current_char = 0;
//create canvas with typing effect
p1.draw = () => {
  let msg ="<code> is like a sermon,\n\
  shoved down the throats of those\
  who are willing to eat it";
  p1.textSize(50); p1.fill(150,255,0);
  let curr = msg.substring(0, current_char);
  p1.text(curr, p1.windowWidth/4, p1.windowHeight/3,2*p1.windowWidth/3,p1.windowHeight);
  current_char += p1.random(0.5, 1);}
s0.init({src:p1.canvas})
src(s1).layer(s0).out();  //layer canvas with video

"STNZA 4"
let p1 = new P5();
//create canvas
p1.draw = () => {
  let msg = "extractED, exploitED, exterminatED";
  p1.textSize(120);  p1.fill("blue");
    p1.text(msg, 0,0,600,600)}
s0.init({src: p1.canvas})
noise(1,0.3).color(0,2,3).invert()
  .layer(src(s0).repeat(2,2).scrollY(1,-0.1).scrollX(1,0.1))  //*** //layer  canvas and have it scroll and repeat in downward right motion
  .out();

s1.initImage("file:///Users/phoebelemon/desert.jpg")
s2.initImage("file:///Users/phoebelemon/ewaste1.jpg")
s3.initImage("file:///Users/phoebelemon/ewaste2.jpg")
//bodies , souls
src(s1).blend(s2, [0,0.2,0.4,0.6,0.8,1,0.8,0.6,0.4,0.2].fast(12)).out() //blend 2 images on fading in/out opacity from 0 ot 1

src(s3).invert([0,1].fast(2)).scrollX(1, 0.08).out(); //invert image and scroll

//cultures mut
let p1 = new P5();
p1.draw = ()=>{
  p1.textSize(20); p1.fill(0);
  if (p1.frameCount > 130){
    for (let i = 0; i<p1.windowWidth; i+=20){
      for (let j = 0; j<p1.windowHeight; j+=20){
        p1.text('w', i+40, j+40, 40,40)
      }  } } }
s0.init({src:p1.canvas});
s1.initImage("file:///Users/phoebelemon/window2.jpg")
src(s1).scale(0.6, 5/4).rotate(Math.sin(time), 0.5) //rotate image continuously
 .layer(src(s0).scale(1.5).modulate(noise(0.3, 0.3))).out(); //layer w's and add warping animation

//sign
let p1 = new P5(); let msg = "click";
p1.draw = () => {
  p1.textSize(50); p1.fill(255);
  //adding a delay, if frameCount  > 120 and for every 2 frames, display 'click' on a random (x,y) coordinate on the canvas
  if ((p1.frameCount > 120) && (p1.frameCount % 2 == 0)){
    p1.text(msg, p1.random(p1.windowWidth), p1.random(p1.windowHeight), 100,100); } }
s0.init({src: p1.canvas})
s1.initImage("file:///Users/phoebelemon/sign.jpg")
shape(4,0.75).mask(s1).modulate(osc(0.7,-0.8,1)) //warping image
  .colorama(2,8,0.5).layer(s0).out(); //adding red and blue colors

//reparations
let p1 = new P5(); let msg_idx, current_char = 0;
p1.draw = () => {
  let msg = "reparations are not\n gifted, \
  but sold in the form of 5 bars and 30 free minutes";
  p1.textSize(70);  p1.fill(240, 60, 220);
  let curr = msg.substring(0, current_char);
  p1.text(curr, p1.windowWidth/3, p1.windowHeight/4,p1.windowWidth/2,p1.windowHeight);
  current_char += p1.random(0.3, 1); }
s0.init({src: p1.canvas})
voronoi(3,0.3).pixelate(20) //add wavy movement to text
  .kaleid(2).color(1, 2.5,0.5) //pixelated kaledi efffect
  .layer(src(s0).modulate(noise(1,0.1))).out(); //adding noise and layering with canvas

"stanza 5"
s1.initImage("file:///Users/phoebelemon/cross.jpg")
voronoi(300,0.15) //line 184 - 186 adapted from @ Ritchse (see rest of resferences below)
    .modulateScale(osc(8).rotate(Math.sin(time)),0.001)
    .thresh(.8).modulateRotate(osc(7), 0.8)
    .layer(shape(4, 1).mask(s1) //***
      .invert([0,1].fast(15)))  //***
    .colorama(0.9)  //***last
    .out();

//now its 2050
" stanza 6"
s2.initVideo("file:///Users/phoebelemon/montage.mp4");
s3.initImage("file:///Users/phoebelemon/boycomp.jpg");
let p = new P5(); let w=p.windowWidth; let h=p.windowHeight;
let msg1 = "YOU ARE A SLAVE TO THE COMPUTER!";
let msg = "WHY CAN'T YOU KEEP UP?";
p.draw = () => {
  // if ((p.frameCount > 30) ){ //add a slight delay
  // p.textSize(60); p.fill(0,0,255); p.text(msg, w/4,h/2,900,400)}
  p.textSize(80); p.fill(255,0,0); p.text(msg1, w/4,h/3,900,700)
}
s0.init({src: p.canvas})
src(s2).scale(0.7)
  .layer(shape(4,0.5).mask(src(s3).invert([0,1]).scale(0.5))) //*** //layer image
  .layer(src(s0).mult(osc(4,0.8))).out(); //layer video with flashing text in oscillating pattern

"7"
let p1 =new P5(); let current_char = 0;
//type message with no background
p1.draw = () => {
  let msg = "data is next on the agenda of\n the White Man’s Burden";
  p1.textSize(60);
  p1.fill(0,255,0);
  let curr = msg.substring(0, current_char);
  p1.text(curr, p1.windowWidth/4, p1.windowHeight/3,2*p1.windowWidth/3,p1.windowHeight);
  current_char += p1.random(0.3, 0.8);
}
s0.init({src:p1.canvas});
s1.initImage("file:///Users/phoebelemon/wmb2.jpg");
a.setSmooth(0.8); a.setCutoff(5); //layer typing over image

//same effect as intro but with layered p5 canvas
noise(400,3).rotate(Math.PI/4).modulate(osc(16,0.03),()=>a.fft[0])
  // .blend(s1, [0,0.2,0.4,0.6,0.8,1, 0.8,0.6,0.4,0.2].fast(5)) //***
  // .layer(s0)  //***
  .out();

"REFERENCES"
"background music for audio track: 'i' by MGR found on bandcamp "
"typing effect: previously developed sketch by me ->  https://editor.p5js.org/pphoebelemonn/sketches/Q2o88Dgos"
"starry black and white animation (line 184-6 )"
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//corrupted screensaver
//by Ritchse
//instagram.com/ritchse
"p5js gradient adapted from https://editor.p5js.org/stalgiag/sketches/webaJ2Dpe"
"audio clips:"
//https://www.youtube.com/watch?v=mCgBQFhQGf0
//https://www.youtube.com/watch?v=CYt7mwfJIzI&t=65s
//https://archive.org/details/bridging-world-history-07-the-spread-of-religions/Bridging+World+History+02+History+and+Memory.mp4
//https://archive.org/details/world-of-chemistry-02-color/World+of+Chemistry+01+World+of+Chemistry.mp4
"videos and images"
//https://archive.org/details/movies
