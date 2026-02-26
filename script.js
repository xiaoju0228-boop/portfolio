// 作品数据
const works = [
    {
        title: '贪吃蛇游戏',
        description: '经典贪吃蛇小游戏',
        link: 'works/snake-game.html',
        icon: '🐍'
    },
    {
        title: '砖块破坏者',
        description: '打砖块游戏',
        link: 'works/brick-breaker.html',
        icon: '🧱'
    },
    {
        title: '卡片生成器',
        description: '在线卡片制作工具',
        link: 'works/card-generator.html',
        icon: '🃏'
    },
    {
        title: 'MBTI 测试',
        description: '人格类型测试小程序',
        link: 'works/mbti_test.html',
        icon: '✨'
    }
];

// 加载作品列表
function loadWorks() {
    const grid = document.getElementById('works-grid');
    grid.innerHTML = works.map(work => `
        <div class="work-card">
            <div class="work-preview">${work.icon}</div>
            <div class="work-info">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <a href="${work.link}" class="work-link" target="_blank">查看详情 →</a>
            </div>
        </div>
    `).join('');
}

// 留言板功能
function getGuestbook() {
    const data = localStorage.getItem('myGuestbook');
    return data ? JSON.parse(data) : [];
}

function saveGuestbook(entries) {
    localStorage.setItem('myGuestbook', JSON.stringify(entries));
}

function addGuestbookEntry() {
    const nameInput = document.getElementById('guest-name');
    const messageInput = document.getElementById('guest-message');
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert('请填写名字和留言');
        return;
    }

    const entry = {
        name,
        message,
        time: new Date().toLocaleString('zh-CN')
    };

    const guestbook = getGuestbook();
    guestbook.unshift(entry);
    saveGuestbook(guestbook);

    nameInput.value = '';
    messageInput.value = '';
    renderGuestbook();
}

function renderGuestbook() {
    const list = document.getElementById('guestbook-list');
    const guestbook = getGuestbook();

    if (guestbook.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#636e72">暂无留言，快来抢先留言吧！</p>';
        return;
    }

    list.innerHTML = guestbook.map(item => `
        <div class="guestbook-item">
            <div class="name">${escapeHtml(item.name)}</div>
            <div class="message">${escapeHtml(item.message)}</div>
            <div class="time">${item.time}</div>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 背景音乐控制
let isPlaying = false;
const bgm = document.getElementById('bgm');

function toggleMusic() {
    if (isPlaying) {
        bgm.pause();
    } else {
        bgm.play().catch(() => {
            alert('请先添加背景音乐文件：audio/bgm.mp3');
        });
    }
    isPlaying = !isPlaying;
}

// 移动端菜单
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadWorks();
    renderGuestbook();
});
