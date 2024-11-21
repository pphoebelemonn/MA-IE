osc(0).out();
"AUDIO INTRO"
//  a.setSmooth(0.8);
//  a.setCutoff(5); 
//  noise(400,3).rotate(Math.PI/4).modulate(osc(16,0.03),()=>a.fft[0]).out(o0); 

"STNZA 1"
// let p1 = new P5();
// let w = p1.windowWidth, h= p1.windowHeight;
// p1.draw = () => {
//   let msg ='So you want to talk about digital footprints?';
//   p1.textSize(60); 
//   p1.fill("red");
//   p1.background(240, 60, 220);
//   p1.text(msg,w/6, h/2,3*w/4,h);
// }
// s0.init({src:p1.canvas})
// src(s0).modulate(voronoi(2,3)).out(); 

// s1.initImage("https://raw.githubusercontent.com/pphoebelemonn/MA-IE/refs/heads/main/comps.jpg")
// src(s1)
// //   .repeat(2)
// //   .scrollY(1,0.2)
//   .posterize( [10, 60].fast(10))
//   .layer(s0)
//   .out(); 

// let p1 = new P5();
// let w = p1.windowWidth, h= p1.windowHeight;
// let msg_idx, current_char = 0;
// p1.draw = () => {
//   let msg ="What/are/all/the/paths/you’ve/taken/before?\nHow-is-your-mind-networked-with-the-history-\nof-the-past-present-and-future?";
//   p1.textSize(60); 
//   p1.fill("red");
//   let curr = msg.substring(0, current_char);
//   p1.text(curr, w/5, h/3,2*w/3,h);
//   current_char += p1.random(0.8, 1.5);
// }
// s0.init({src:p1.canvas})
// s1.initVideo("https://raw.githubusercontent.com/pphoebelemonn/MA-IE/refs/heads/main/world.mp4")

"STNZA 2"
// let p1 = new P5();
// let w = p1.windowWidth, h= p1.windowHeight;
// p1.draw = () => {
//   let msg = "Was (cyber)space once not just space?"
//   let msg1 ='MAN                 WOMAN\nWEST\
//                EAST\nWHITE              OTHER';
//   let msg2 = "COLONIZER AND COLONIZED?"
//   p1.textSize(100); 
//   p1.fill("blue");
//   p1.text(msg2,w/4, h/2,w,h);
// }
// s0.init({src:p1.canvas})

// s1.initImage("https://raw.githubusercontent.com/pphoebelemonn/MA-IE/refs/heads/main/map.jpg")
// osc(6, 0.3, 2)
//   .kaleid(5)
//   .color(2,0.3,3).luma(0.4).modulate(noise(6, 2))
//   .blend(s1,[0.3,0.5,0.7,1].fast(8))
//   .layer(src(s0)  //***text
//     .modulate(noise(0.5, 0.5))
//     //.scrollY(1,0.3)
//   )
//   .out();

"STNZA 3"
s1.initVideo("grown-man-cry.mp4")
src(s1)
  .layer(s0)


