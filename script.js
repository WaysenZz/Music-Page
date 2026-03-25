/* ========================================
   ECHO VEX - Musician Website Scripts
   现代电子音乐人品牌官网交互脚本
======================================== */

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(5, 7, 20, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 245, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(5, 7, 20, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// 移动端汉堡菜单
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // 汉堡动画
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // 移动端点击后关闭菜单
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// 播放音乐功能
function playMusic(songName) {
    console.log('▶ 播放:', songName);
    
    // 添加视觉反馈
    const buttons = document.querySelectorAll('.play-button');
    buttons.forEach(btn => {
        btn.classList.remove('playing');
    });
    
    event.target.closest('.play-button').classList.add('playing');
    
    // 模拟播放状态
    setTimeout(() => {
        console.log('♫ 正在播放:', songName);
    }, 500);
}

// 播放视频功能
function playVideo() {
    console.log('▶ 播放视频');
    alert('视频播放功能即将上线！\n\n这里将嵌入 YouTube/Vimeo 视频播放器。');
}

// 邮件订阅功能
function subscribe(event) {
    event.preventDefault();
    
    const emailInput = document.querySelector('.email-input');
    const email = emailInput.value;
    
    if (email) {
        console.log('✓ 订阅成功:', email);
        
        // 显示成功提示
        const form = document.querySelector('.newsletter-form');
        const originalHTML = form.innerHTML;
        
        form.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" stroke-width="2" style="margin-bottom: 15px;">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3 style="font-family: 'Orbitron', sans-serif; color: #00f5ff; margin-bottom: 10px;">订阅成功！</h3>
                <p style="color: #b8b8d0;">感谢您的订阅，我们将发送最新音乐动态到您的邮箱。</p>
            </div>
        `;
        
        // 3 秒后重置表单
        setTimeout(() => {
            form.innerHTML = originalHTML;
        }, 3000);
    }
}

// 滚动动画 - Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 为所有需要动画的元素添加观察
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.music-card, .tour-card, .about-content, .about-image, .video-wrapper, .newsletter-box'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // 初始化粒子背景
    initParticles();
});

// 粒子背景效果
function initParticles() {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
    
    animateParticles();
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(0, 245, 255, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 ${size * 2}px rgba(0, 245, 255, 0.8);
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // 存储粒子运动参数
    particle.dataset.vx = (Math.random() - 0.5) * 0.5;
    particle.dataset.vy = (Math.random() - 0.5) * 0.5;
}

function animateParticles() {
    const particles = document.querySelectorAll('#particles div');
    
    particles.forEach(particle => {
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);
        let vx = parseFloat(particle.dataset.vx);
        let vy = parseFloat(particle.dataset.vy);
        
        x += vx;
        y += vy;
        
        // 边界检测
        if (x < 0 || x > 100) vx *= -1;
        if (y < 0 || y > 100) vy *= -1;
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        
        particle.dataset.vx = vx;
        particle.dataset.vy = vy;
    });
    
    requestAnimationFrame(animateParticles);
}

// 购票按钮点击事件
document.querySelectorAll('.ticket-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tourCard = btn.closest('.tour-card');
        const eventName = tourCard.querySelector('h3').textContent;
        console.log('🎫 购票:', eventName);
        alert(`即将跳转到 "${eventName}" 的购票页面...\n\n（演示模式：实际应用中这里会链接到票务平台）`);
    });
});

// 平台链接点击事件
document.querySelectorAll('.platform-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = btn.classList.contains('spotify') ? 'Spotify' : 'Apple Music';
        console.log('🎵 打开', platform);
        alert(`即将在 ${platform} 中打开歌曲...\n\n（演示模式：实际应用中这里会链接到音乐平台）`);
    });
});

// 社交媒体链接点击事件
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = icon.classList.contains('instagram') ? 'Instagram' :
                        icon.classList.contains('twitter') ? 'X (Twitter)' :
                        icon.classList.contains('tiktok') ? 'TikTok' : 'SoundCloud';
        console.log('🔗 打开', platform);
        alert(`即将打开 ${platform}...\n\n（演示模式：实际应用中这里会链接到社交媒体主页）`);
    });
});

// 性能优化：节流函数
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 优化后的滚动事件监听
window.addEventListener('scroll', throttle(() => {
    // 可以在这里添加其他滚动相关的逻辑
}, 100));

// 控制台欢迎信息
console.log('%c🎵 ECHO VEX Official Website', 'font-family: Orbitron; font-size: 24px; color: #00f5ff; text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);');
console.log('%c声音即未来 | 重塑电子边界', 'font-family: Rajdhani; font-size: 14px; color: #ff00ff;');
console.log('%c欢迎访问官方网站！', 'font-family: Rajdhani; font-size: 12px; color: #b8b8d0;');
