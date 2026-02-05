function createFloatingHearts() {
    const background = document.querySelector('.hearts-background');
    const hearts = ['💕', '❤️', '💖', '💗', '💝'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = -50 + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        background.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    setInterval(createHeart, 600);
}

function handleYes() {
    const responseMessage = document.getElementById('response');
    responseMessage.textContent = '🎉 You\'ve made me the happiest! I love you! 💞';
    
    // Add celebration animation
    document.body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    
    // Trigger confetti effect with hearts
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    // Disable buttons
    document.querySelector('.yes-btn').disabled = true;
    document.getElementById('noBtn').disabled = true;
}

function handleNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.querySelector('.yes-btn');
    
    // Make the "No" button smaller and move it around
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.8)`;
    
    // Make the "Yes" button bigger
    yesBtn.style.transform = 'scale(1.2)';
    yesBtn.style.minWidth = '200px';
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = ['💕', '❤️', '💖', '💗', '💝', '✨', '🎉'][Math.floor(Math.random() * 7)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-50px';
    confetti.style.fontSize = (Math.random() * 30 + 20) + 'px';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            from {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            to {
                transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Initialize floating hearts when page loads
document.addEventListener('DOMContentLoaded', createFloatingHearts);
