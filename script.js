const msgs = ['hello',
  'so you want to talk about digital footprint?', 'was cyberspace once not just space?', "extractEDexploitED, exterminatED," 'reparations are not gifted'];
let p1 = new P5();
let msg_idx, current_char = 0;
let w = p1.windowWidth, h= p1.windowHeight;

p1.draw = () => {
  let msg = msgs[3]; //***
  p1.textSize(40); //***
  p1.fill(0);
  //p1.background(240, 60, 220);//***
  p1.lo
  p1.display(msg);
  //p1.type(current_char, msg);
  // p1.populate(msg);
}
p1.display = (msg) =>{
    p1.text(msg,w/5, h/2,2*w/3,h,);
}
p1.type = (current, string) => {
  let curr = string.substring(0, current);
  p1.text(curr, w/5, h/3,2*w/3,h);
  current_char += p1.random(0.3, 0.8);
}
p1.populate = (msg) => {
  if (p1.frameCount % 5 == 0){
    p1.text(msg, p1.random(w), p1.random(h), 100,100);
  }
}
s0.init({src: p1.canvas})

"LOAD"
  let path = "file:///Users/phoebelemon/Desktop/MA-IE-Term1/feminist-coding-practices/final-project/assets/"
  s1.initImage(path+"card.jpg");
  // s1.initVideo(path + "world.mp4")
  // s1.src.muted = true;

"TEXT ANIMATION"
src(s0)
  //.modulate(voronoi(2, 3)) //jitter
  //.mult(osc(4,2,8)) //flash and osc
  //.modulate(noise(0.1,2)) //sway
  // .scrollY(1, 0.2)
  // .scrollX(1, -0.3)
  //.kaleid(4)
  .repeat(2,2)
  .out();

""SCREEN ANIM"
osc(6, 0.3, 2)
  .kaleid(5)
  .color(2,0.3,3)
  .modulate(noise(6, 2))
  //.pixelate(30)
  .layer(src(s0)  //***text
    //.scrollY(0.001,0.5)
    //.modulate(noise(0.5, 0.1))
  )
  //.blend(s1) //***image
  .out();

"TEXT + IMAGE/VIDEO"s
let path = "file:///Users/phoebelemon/Desktop/MA-IE-Term1/feminist-coding-practices/final-project/assets/"
//s1.initImage(path+"cross.jpg");
s1.initVideo(path + "land.mp4")
s1.src.muted = true;

let n = 200;
src(s1) //normal layer
  .scale(1, 5/7)
  // .colorama(4,0,1)
  //.pixelate(()=> n--)
  .layer(src(s0)
      //.scrollY(1, 0.2)
      //.mult(osc(4,2,8))
      //.scale(1.4)
      //.modulate(voronoi(1,0.5))
   )
  //.modulatePixelate(0.5)
  //.modulate(noise(2, 0.8))
  //.pixelate(()=> n--)
  //.scrollX(1,0.2)
  // .scrollY(-1, 0.2)
  // .colorama(4,0,1)
  //.repeat(2,2)
  .out();

shape(4, 1, 0.01) //fit smaller inside shape
  //.mask(noise(3,0.4))
  .mask(s1)
  .colorama([0.7,2].fast(5))

  .scale(0.75)
  //.modulate(noise(0.5, 0.7))
  //.scrollY(0.5, 0.3)
  //.scrollX(1, 0.2)
  .layer(s0)
  .out();


 osc(1,0, 9).out(); //idle
 "AUDIO"
 a.setSmooth(0.8);
 a.setCutoff(5); //threshold
 noise(400,3).rotate(Math.PI/4).modulate(osc(16,0.03),()=>a.fft[0]).out(o0); //beginning
