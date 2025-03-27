const startBtn = document.getElementById('startBtn');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const giftImage = document.getElementById('giftImage');



startBtn.addEventListener('click', function(){
	startBtn.classList.add('hidden');
	//giftImage.classList.remove('hidden');
	giftImage.classList.add('show');
	musicBtn.classList.remove('hidden');
	musicBtn.addEventListener('click', function() {
		if (bgMusic.paused) {
			bgMusic.play();
			musicBtn.textContent = "🎵 关闭音乐";
		} else {
			bgMusic.pause();
			musicBtn.textContent = "🎵 播放音乐";
		}
	});
	bgMusic.play();
    createBubbles();
});

function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // 随机大小和位置
        const size = Math.random() * 60 + 20;
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}%`;
        bubble.style.animationDelay = `${delay}s`;
        
        bubblesContainer.appendChild(bubble);
    }
}