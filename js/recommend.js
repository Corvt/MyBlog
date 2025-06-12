const recommends = [
  {
    title: "2025个人上半年最佳专辑TOP5",
    excerpt: "本年度最受欢迎的音乐专辑排行榜。",
    detail: "包含个人2025年上半年最喜欢的五张专辑",
    date: "2025-04-20",
    category: "音乐",
    link: "https://example.com/best-albums"
  },
  {
    title: "2024个人年度最佳专辑TOP10",
    excerpt: "本年度最受欢迎的音乐专辑排行榜。",
    detail:
      "包含流行、电子、R&B等多种风格的专辑，结合销量和口碑评选而出，适合喜欢多样音乐的听众探索。",
    date: "2025-04-20",
    category: "音乐",
    link: "https://example.com/best-albums"
  },
  {
    title: "电影《盗梦空间》观后感",
    excerpt: "诺兰导演的科幻力作，层层梦境引人深思。",
    detail:
      " 这部电影通过复杂的梦境结构探讨现实与梦境的边界，剧情紧凑，视觉效果震撼，是近年来不可错过的经典之作。",
    date: "2025-05-25",
    category: "电影",
    link: "https://example.com/inception"
  },
  {
    title: "夏季时尚搭配推荐",
    excerpt: "轻松打造清新夏日风格，必备单品介绍。",
    detail:
      "推荐几款透气性好的亚麻衬衫、简约的白色T恤以及百搭的牛仔短裤，适合各种日常和户外场合，穿出自信和舒适感。",
    date: "2025-05-15",
    category: "服装",
    link: "https://example.com/summer-fashion"
  },
  {
    title: "2025年即将发售的游戏展望",
    excerpt:
      "2025年被誉为“新世纪2004”，将迎来一波3A大作狂潮 — 海外大作和本土精品并举，涵盖多个平台和类型",
    detail:
      "Doom、GTA VI、Ghost of Yōtei、Monster Hunter、Metroid Prime 4 都蓄势待发。Switch 2、PS5掌机、Xbox手持均有动作，硬件战线铺展。主机御三家皆有布局，PC同样丰富。独立游戏与3A大作相比，这类充满实验精神的作品依旧值得关注。",
    date: "2025-05-05",
    category: "游戏",
    link: "https://example.com/genshin"
  },
  {
    title: "经典科幻电影推荐",
    excerpt: "值得一看的科幻电影佳作集锦。",
    detail: "包括《银翼杀手》、《星际穿越》、《异形》等，涵盖未来科技与人性探讨，画面和剧情同样精彩。",
    date: "2025-04-10",
    category: "电影",
    link: "https://example.com/sci-fi-movies"
  },
  {
    title: "设计模式在前端的应用",
    excerpt: "借助设计模式提升代码复用和可维护性。",
    detail:
      "介绍常用的设计模式如单例、观察者、工厂等，并结合实际案例展示如何在前端项目中应用这些模式。",
    date: "2025-04-05",
    category: "编程",
    link: "https://example.com/design-patterns"
  },
  {
    title: "前端性能优化策略",
    excerpt: "减少渲染阻塞，加速页面加载。",
    detail: "从代码结构、资源加载、图片优化等多方面入手，提升用户体验和页面响应速度。",
    date: "2025-03-28",
    category: "编程",
    link: "https://example.com/performance-optimization"
  },
  {
    title: "CSS动画入门指南",
    excerpt: "利用关键帧制作流畅动画效果，让你的页面更加生动。",
    detail: "介绍CSS动画的基本语法和常用技巧，帮助你轻松实现各种动画效果。",
    date: "2025-03-20",
    category: "编程",
    link: "https://example.com/css-animations"
  },
  {
    title: "CSS动画入门指南",
    excerpt: "利用关键帧制作流畅动画效果，让你的页面更加生动。",
    detail: "介绍CSS动画的基本语法和常用技巧，帮助你轻松实现各种动画效果。",
    date: "2025-03-20",
    category: "其他",
    link: "https://example.com/css-animations"
  }
];

const listContainer = document.getElementById("recommend-list");
const categoryButtons = document.querySelectorAll(".category-bar button");

function renderList(category = "all") {
  listContainer.innerHTML = "";
  let filtered = recommends;
  if (category !== "all") {
    filtered = recommends.filter((item) => item.category === category);
  }
  if (filtered.length === 0) {
    listContainer.innerHTML = `<p style="text-align:center; color:#777; user-select:none;">暂无该分类推荐内容。</p>`;
    return;
  }

  // 按日期倒序排序
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "recommend-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-expanded", "false");
    card.setAttribute("aria-label", `${item.title}，点击展开详情`);

    let detailContent = item.detail;

    // 如果是 Apple Music 推荐，就追加 iframe 播放器
    if (item.title.includes("最佳专辑TOP5") && item.date === "2025-04-20") {
      detailContent += `
        <div style="margin-top:1rem;">
          <div>MAYHEM - Lady Gaga</div>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/tr/album/mayhem/1792666546"></iframe>
          <div>Absolution - Muse</div>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/tr/album/absolution/1716096819"></iframe>
          <div>Something Beautiful - Miley Cyrus</div>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/tr/album/something-beautiful/1804974240"></iframe>
          <div>EUSEXUA - FKA twigs</div>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/tr/album/eusexua/1767658574"></iframe>
          <div>Hurry Up Tomorrow - The Weeknd</div>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/tr/album/hurry-up-tomorrow/1793654348"></iframe>
          </div>
      `;
    }
    if (
      item.title.includes("电影《盗梦空间》观后感") &&
      item.date === "2025-05-25"
    ) {
      detailContent += `
      <div style="margin-top:1rem;">
          <iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=641898216&bvid=BV1VY4y1L7T7&cid=731790946&p=1&autoplay=0"
            scrolling="no"
            frameborder="no"
            allowfullscreen="true"
            style="width:100%; height:500px; border-radius:10px;">
          </iframe>
        </div>
        <br></br>
        <pre>
          近期重温了诺兰导演的经典科幻电影《盗梦空间》（Inception），这部影片不仅在视觉效果上震撼人心，更在剧情设计和哲学思考上给我留下了深刻的印象。
          首先，影片的故事构架极为巧妙。梦境层层叠加，现实与虚幻的界限变得模糊，带领观众进入一个极具张力的心理迷宫。导演通过“植入梦境”的设定，探讨了潜意识的力量和记忆的真实性，让人不禁思考我们自身对现实的认知到底有多可靠。
          其次，影片中的人物塑造也十分出色。主角多姆·柯布（Dom Cobb）深陷于对妻子逝去的内疚和对现实的迷茫中，他的心理挣扎让整部电影充满了人性化的温度。每一位角色都有鲜明的性格和独特的故事背景，他们的互动推动剧情发展，同时让主题更加丰富。
          视觉效果方面，《盗梦空间》堪称一场视觉盛宴。无论是城市折叠、重力逆转的走廊战斗，还是梦境中奇幻的空间设计，都极大地提升了影片的观赏性和代入感。配合汉斯·季默的配乐，更加烘托出紧张悬疑的氛围。
          最后，电影留下了一个开放式的结局——旋转的陀螺究竟会不会停？这不仅引发了无数观众的讨论，也体现了导演对现实与梦境模糊边界的深刻探讨。或许，这也正是《盗梦空间》最耐人寻味之处：现实和梦境，本就没有绝对的界限。
          总的来说，《盗梦空间》是一部集视觉、剧情、哲学于一体的佳作，值得反复观看和思考。它让我意识到，梦想和现实之间的界线，有时比我们想象的更加复杂，也更加美丽。</pre>

      `;
    }
    if (
      item.title.includes("2025年即将发售的游戏展望") &&
      item.date === "2025-05-05"
    ) {
      detailContent += `
      <pre>
    重点期待作品一览

    <img src='img/DOOM.gif'>
    《毁灭战士：黑暗时代》（Doom: The Dark Ages）
    发行时间：2025年5月15日
    类型：Doom系列中世纪背景前传
    平台：PS5 / Xbox / PC（首发加入Game Pass）
    看点：全新史诗级战斗系统、中世纪世界观探索

    <img src='img/Ghost of Yōtei.avif'>
    《羊蹄山之魂》（Ghost of Yōtei）
    发行时间：2025年10月2日（PS5独占）
    延续：《对马岛之魂》的世界观，主角变更为 Atsu，时空背景设定在1603年日本
    特点：扩展探索与战斗系统，将再塑武士类开放世界代表作

    <img src='img/Monster Hunter Wilds.webp'>
    《怪物猎人：荒野》（Monster Hunter Wilds）
    平台：PS5 / Xbox / PC
    发售时间：2025年2月28日
    特点：传承系列狩猎精髓，配合全新野外生态和大型怪物战斗

    <img src='img/Grand Theft Auto 6.jpg'>
    《GTA VI》（Grand Theft Auto 6）
    尽管原定2025发售，Rockstar尚未最终敲定发售日期，有望登陆PS5/Xbox Series X/S/PC
    预期：双主角、多城市设定、AI革新，可能引领下一代开放世界游戏

    <img src='img/Metroid Prime 4 Beyond.avif'>
    《密特罗德究极4 穿越未知》（Metroid Prime 4: Beyond）
    平台：Switch
    重返经典第一人称冒险，画面和关卡设计重要升级。


    其他热门续作 & 新作：
    《Death Stranding 2: On The Beach》（PS5，夏季发售）
    《Elden Ring: Nightreign》（FromSoftware的合作主打）
    《Borderlands 4》、《Slay the Spire 2》、《Persona 4 Revival》、《Silent Hill f》等也在阵容中。
        </pre>

      `;
    }

    card.innerHTML = `
      <div class="recommend-header">
        <div class="recommend-title">${item.title}</div>
        <div class="recommend-date">${item.date}</div>
      </div>
      <div class="recommend-excerpt">${item.excerpt}</div>
      <div class="recommend-detail">${detailContent}</div>
    `;

    // 点击或按回车展开/收起详情
    function toggleExpand() {
      const expanded = card.classList.toggle("expanded");
      card.setAttribute("aria-expanded", expanded);
    }

    card.addEventListener("click", () => {
      toggleExpand();
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExpand();
      }
    });

    listContainer.appendChild(card);
  });
}

// 分类按钮点击事件
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderList(btn.dataset.category);
  });
});

// 初始化，默认显示全部
renderList("all");