var playButton = document.getElementById("playButton");
var audioPlay = document.getElementById("audioPlayer");
var image = document.getElementById("playButton");
var musicList = ["music/Away.mp3", "music/HOYO.mp3", "music/wuxian.mp3", "music/DiHuan.mp3"]; // 创建音乐数组

    playButton.addEventListener("click", function() {
    if (audioPlayer.paused) {
        let musicRandom = musicList[Math.floor(Math.random() * musicList.length)]; // 随机选择
        audioPlay.src = musicRandom; // 设置随机选择的音乐
        audioPlay.play();
        audioPlay.loop = true;
        image.src = "img/qd.png";
        console.log("音乐~启动！");
    } else {
        audioPlay.pause();
        image.src = "img/jz.png";
        console.log("pause! pause!");
    }
});




function updateProgressBar(percentage) {
var progressBar = document.getElementById('progressBar');
progressBar.style.width = percentage + '%';
}
window.addEventListener('load', function() {
updateProgressBar(100);
setTimeout(function() {
var container = document.getElementById('container');
container.style.display = 'none';
}, 500); // 延时500毫秒隐藏进度条
});




