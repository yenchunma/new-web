let mapArray,ctx,currentImgMain;
let imgMountain, imgMain, imgEnemy;

const gridLength=200;

$(function(){
  mapArray=[
    [0,1,1]
    [0,0,0]
    [3,1,2]
  ];
  ctx=$("#myCanvas")[0].getContext("2d");

  imgMain= new Image();
  imgMain.src="images/spriteSheet.png";
  currentImgMain={
    "x":0,
    "y":0
  };
  imgMain.onload=function(){
    ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength)
  };

})

$(document).on("keydown",function(event){
});