let catCount = 0;

// 点击次数提示
const messages = {
    20: "你点了太多次了，玩也会很卡！🐱💨",
    50: "哇，你还在点啊？你的鼠标坏了吗？🖱️🔥",
    100: "既然你那么无聊，去看看我的视频吧！🎥🐱",
    200: "不是吧，你还在点啊？😳",
    250: "你是不是开了连点器？🤖",
    350: "你的鼠标还好吗？？🖱️🔥🔥",
    400: "既然你那么无聊，去看看我的视频吧 IG: nian_xia.zi",
};

// 🎵 播放 YouTube 音乐
function playYouTube() {
    const url = document.getElementById("musicURL").value;
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
        alert("请输入有效的 YouTube 视频链接！");
        return;
    }

    let videoId = url.split("v=")[1] || url.split("youtu.be/")[1];
    if (videoId.includes("&")) videoId = videoId.split("&")[0];

    const player = document.getElementById("youtubePlayer");
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    player.style.display = "block";
}

// 🎵 显示或隐藏音乐面板
document.getElementById("musicToggle").addEventListener("click", () => {
    document.getElementById("musicPanel").classList.toggle("hidden");
});

// 🚀 生成小猫
document.getElementById("spawnCat").addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    createCat();
});

function createCat() {
    catCount++;
    document.getElementById("clickCount").innerText = "点击次数: " + catCount;

    const cat = document.createElement("div");
    cat.classList.add("cat");
    cat.innerHTML = "🐱";
    document.body.appendChild(cat);

    // 让猫咪不会干扰鼠标点击
    cat.style.userSelect = "none";
    cat.style.pointerEvents = "none";

    // 生成随机位置
    cat.style.left = Math.random() * (window.innerWidth - 50) + "px";
    cat.style.top = Math.random() * (window.innerHeight - 50) + "px";

    // 让猫咪随机移动
    setInterval(() => {
        cat.style.left = Math.random() * (window.innerWidth - 50) + "px";
        cat.style.top = Math.random() * (window.innerHeight - 50) + "px";
    }, 2000);

    // 显示提示信息
    if (messages[catCount]) {
        showMessage(messages[catCount]);
    }

    // 🚀 500 只猫咪解锁疯狂模式！
    if (catCount === 500) {
        document.body.style.backgroundImage = "url('crazy-cat-background.jpg')";
        document.body.style.animation = "shake 0.2s infinite";
        showMessage("🐱🐱🐱 500 只小猫出现了！你解锁了疯狂模式！🐱🐱🐱");
    }
}

// 💬 显示弹出提示
function showMessage(text) {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerText = text;
    messageBox.style.top = "20px";
    messageBox.style.opacity = "1";

    setTimeout(() => {
        messageBox.style.top = "-50px";
        messageBox.style.opacity = "0";
    }, 5000);
}
