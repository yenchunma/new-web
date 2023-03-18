let player;
let currentPlay=0;

function onYouTubeIFrameAPIReady(){
    player=new YT.player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playVars:{
            autoplay:0,
            controls:0,
            start:playtime[currentPlay][0],
            end:playtime[currentPlay][1],
            iv_load_policy:3

        },

    })
}

function onPlayerReady(event){

}

function onPlayerStateChange(event){

}