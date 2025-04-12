/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2025-04-11 04:23:52
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2025-04-12 11:36:11
 */
// 创建粒子背景
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // 随机尺寸
        const size = Math.random() * 100 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // 随机位置
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 200}vh`;

        // 随机背景 - 使用指定的蓝色色调
        const opacity = Math.random() * 0.15 + 0.05;
        particle.style.background = `radial-gradient(circle, rgba(90, 156, 248, ${opacity}) 0%, rgba(90, 156, 248, 0) 70%)`;

        // 随机动画延迟
        particle.style.animationDelay = `${Math.random() * 10}s`;

        particles.appendChild(particle);
    }
}

// 平滑滚动
document.getElementById('scrollDown').addEventListener('click', () => {
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
});

// 页面加载时创建粒子
window.addEventListener('load', createParticles);

// 添加鼠标跟随效果
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    document.querySelectorAll('.particle').forEach((particle) => {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;

        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// 添加滚动动画效果
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const scrollPosition = window.scrollY + window.innerHeight * 0.85;

    cards.forEach((card) => {
        const cardPosition = card.offsetTop;

        if (scrollPosition > cardPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// 初始化卡片样式，准备滚动动画
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
});
