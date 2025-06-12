// 模拟博客数据
const blogs = [
  { title: "如何写出更优雅的JavaScript", excerpt: "掌握这5个技巧，让你的代码更清晰。", date: "2025-06-01", link: "blog.html#post1" },
  { title: "深度解析CSS Flex布局", excerpt: "理解flex-grow、flex-shrink和flex-basis的秘密", date: "2025-05-20", link: "blog.html#post2" },
  { title: "用React做一个Todo应用", excerpt: "一步步教你用React打造实用的Todo列表", date: "2025-05-10", link: "blog.html#post3" },
  { title: "Vue3新特性全面介绍", excerpt: "让你快速上手Vue3的新功能", date: "2025-04-25", link: "blog.html#post4" },
  { title: "写给初学者的Git入门指南", excerpt: "从零开始学会版本控制的基础", date: "2025-04-10", link: "blog.html#post5" },
  { title: "JavaScript异步编程详解", excerpt: "全面掌握JavaScript异步处理技巧", date: "2025-03-28", link: "blog.html#post6" },
  { title: "前端性能优化策略", excerpt: "减少渲染阻塞，加速页面加载", date: "2025-03-10", link: "blog.html#post7" }
];

// 模拟推荐数据
const recommends = [
  { title: "电影《盗梦空间》观后感", excerpt: "诺兰导演的科幻力作，层层梦境引人深思。", date: "2025-05-25", link: "recommend.html#rec1" },
  { title: "夏季时尚搭配推荐", excerpt: "轻松打造清新夏日风格，必备单品介绍。", date: "2025-05-15", link: "recommend.html#rec2" },
  { title: "2025年即将发售的游戏展望", excerpt: "海外大作和本土精品并举，涵盖多个平台和类型", date: "2025-05-05", link: "recommend.html#rec3" },
  { title: "2025个人上半年最佳专辑TOP5", excerpt: "包含个人2025年上半年最喜欢的五张专辑", date: "2025-04-20", link: "recommend.html#rec4" },
  { title: "2024个人年度最佳专辑TOP10", excerpt: "包含个人2024年年度最喜欢的十张专辑", date: "2025-04-20", link: "recommend.html#rec5" },
  { title: "经典科幻电影推荐", excerpt: "值得一看的科幻电影佳作集锦", date: "2025-04-20", link: "recommend.html#rec6" },
  { title: "设计模式在前端的应用", excerpt: "借助设计模式提升代码复用和可维护性。", date: "2025-04-10", link: "recommend.html#rec7" }
];

function renderCards(containerId, items, maxCount = 6) {
  const container = document.getElementById(containerId);
  if (!container) return; // 防止容器不存在时报错
  container.innerHTML = ""; // 先清空
  // 按时间倒序排序（最近的在前）
  items.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestItems = items.slice(0, maxCount);

  latestItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.onclick = () => {
      window.location.href = item.link;
    };
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <div class="date">${item.date}</div>
    `;
    container.appendChild(card);
  });
}

renderCards("latest-blogs", blogs, 6);
renderCards("latest-recommend", recommends, 6);