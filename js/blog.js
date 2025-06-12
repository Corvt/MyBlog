const blogPosts = [
    {id:1, title:"如何写出更优雅的JavaScript", content:"掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。掌握这5个技巧，让你的代码更清晰。详细内容包括变量作用域、闭包使用、箭头函数、模块化和代码风格规范。", date:"2025-06-01"},
    {id:2, title:"深度解析CSS Flex布局", content:"理解flex-grow、flex-shrink和flex-basis的秘密。本文从基础语法到实战案例全方位讲解。", date:"2025-05-28"},
    {id:3, title:"用React做一个Todo应用", content:"一步步教你用React打造实用的Todo列表，涵盖组件设计、状态管理和事件处理。", date:"2025-05-20"},
    {id:4, title:"Vue3新特性全面介绍", content:"Composition API、Teleport和更多内容，让你快速上手Vue3的新功能。", date:"2025-05-15"},
    {id:5, title:"写给初学者的Git入门指南", content:"从零开始学会版本控制的基础，包含Git安装、命令行操作及常见工作流。", date:"2025-05-10"},
    {id:6, title:"JavaScript异步编程详解", content:"从回调到Promise再到async/await，全面掌握JavaScript异步处理技巧。", date:"2025-05-05"},
    {id:7, title:"前端性能优化策略", content:"减少渲染阻塞，加速页面加载，从代码结构和资源加载两方面入手。", date:"2025-05-01"},
    {id:8, title:"CSS动画入门指南", content:"利用关键帧制作流畅动画效果，让你的页面更加生动。", date:"2025-04-25"},
    {id:9, title:"Node.js服务器搭建教程", content:"搭建一个简单高效的后台服务，涉及Express框架和路由设计。", date:"2025-04-20"},
    {id:10, title:"如何写好可维护代码", content:"结构清晰，易读易改，讲述代码重构和设计原则。", date:"2025-04-15"},
  ];

  const accordion = document.getElementById("accordion");

  blogPosts.forEach(post => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    item.innerHTML = `
      <div class="accordion-header">${post.title}</div>
      <div class="accordion-content">
        <p>${post.content}</p>
        <div class="post-date">发布日期：${post.date}</div>
      </div>
    `;
    accordion.appendChild(item);
  });

  // 折叠面板点击事件
  accordion.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const currentlyActive = accordion.querySelector(".accordion-header.active");
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.remove("active");
      currentlyActive.nextElementSibling.classList.remove("open");
    }

    header.classList.toggle("active");
    const content = header.nextElementSibling;
    content.classList.toggle("open");
  });
});