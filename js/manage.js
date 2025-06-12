// 登录验证
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      alert("未授权访问，请先登录。");
      window.location.href = "admin.html";
    }

    // 博客管理逻辑
    let blogs = [];

    function addBlog() {
      const title = document.getElementById("blogTitle").value;
      const excerpt = document.getElementById("blogExcerpt").value;
      const content = document.getElementById("blogContent").value;

      if (title && excerpt && content) {
        blogs.push({ title, excerpt, content });
        renderBlogs();
        document.getElementById("blogTitle").value = '';
        document.getElementById("blogExcerpt").value = '';
        document.getElementById("blogContent").value = '';
      }
    }

    function deleteBlog(index) {
      blogs.splice(index, 1);
      renderBlogs();
    }

    function renderBlogs() {
      const container = document.getElementById("blogList");
      container.innerHTML = '';
      blogs.forEach((b, i) => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `<strong>${b.title}</strong><br>${b.excerpt}<br><button onclick="deleteBlog(${i})">删除</button>`;
        container.appendChild(div);
      });
    }

    // 推荐管理逻辑
    let recommends = [];

    function addRecommend() {
      const category = document.getElementById("recCategory").value;
      const title = document.getElementById("recTitle").value;
      const excerpt = document.getElementById("recExcerpt").value;
      const link = document.getElementById("recLink").value;

      if (title && excerpt && link) {
        recommends.push({ category, title, excerpt, link });
        renderRecs();
        document.getElementById("recTitle").value = '';
        document.getElementById("recExcerpt").value = '';
        document.getElementById("recLink").value = '';
      }
    }

    function deleteRecommend(index) {
      recommends.splice(index, 1);
      renderRecs();
    }

    function renderRecs() {
      const container = document.getElementById("recList");
      container.innerHTML = '';
      recommends.forEach((r, i) => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `<strong>[${r.category}] ${r.title}</strong><br>${r.excerpt}<br><a href="${r.link}" target="_blank">${r.link}</a><br><button onclick="deleteRecommend(${i})">删除</button>`;
        container.appendChild(div);
      });
    }

    // 关于我内容保存
    function saveAbout() {
      const aboutContent = document.getElementById("aboutText").value;
      alert("关于我内容已保存（仅在当前浏览器中模拟保存）");
      // 实际应用应发送至服务器
      console.log("关于我内容：", aboutContent);
    }