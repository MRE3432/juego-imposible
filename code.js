var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pared1 = createSprite(190, 120,250,3);
var pared2 = createSprite(190, 260,250,3);
var pared3 = createSprite(67, 145,3,50);
var pared4 = createSprite(67, 235,3,50);
var pared5 = createSprite(313, 145,3,50);
var pared6 = createSprite(313, 235,3,50);
var pared7 = createSprite(41, 170,50,3);
var pared8 = createSprite(41, 210,50,3);
var pared9 = createSprite(337, 210,50,3);
var pared10 = createSprite(337, 170,50,3);
var pared11 = createSprite(18, 190,3,40);
var pared12 = createSprite(361, 190,3,40);
var rojo1 = createSprite(100, 130,10,10);
var rojo2 = createSprite(215, 130,10,10);
var rojo3 = createSprite(165, 250,10,10);
var rojo4 = createSprite(270, 250,10,10);
var azul = createSprite(40, 190,13,13);
var invisible = createSprite(329,190,10,10);
rojo1.shapeColor = "red";
rojo2.shapeColor = "red";
rojo3.shapeColor = "red";
rojo4.shapeColor = "red";
azul.shapeColor = "blue";
invisible.shapeColor = "lightblue";
var muertes =0;
var win =0
rojo1.velocityY = 8;
rojo2.velocityY = 8;
rojo3.velocityY = -8;
rojo4.velocityY = -8;
playSound("assets/category_background/fantasy.mp3");
function draw() {
background("white")
text ("Muertes: "+ muertes,260,100);
 text ("wins:" + win,260,85)
fill("lightblue");
rect(18, 170, 50, 40);
rect(311, 170, 50, 40);
drawSprites();
if (keyDown("d")){
azul.x =azul.x +2
}
if (keyDown("a")){
azul.x =azul.x -2
}
if (azul.isTouching(rojo1)||azul.isTouching(rojo2)||azul.isTouching(rojo3)||azul.isTouching(rojo4)){
  azul.x = 40;
  azul.y =190;
  muertes =muertes +1;
}
if (azul.isTouching(invisible)){
 win = win+1;
  azul.x = 40
  azul.y = 190
}
rojo1.bounceOff(pared1);
rojo1.bounceOff(pared2);
rojo2.bounceOff(pared1);
rojo2.bounceOff(pared2);
rojo3.bounceOff(pared1);
rojo3.bounceOff(pared2);
rojo4.bounceOff(pared1);
rojo4.bounceOff(pared2);
azul.bounceOff(pared11);
azul.bounceOff(pared12);
}














// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
