function login() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      if (username === "LusX" && password === "admin123") {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "manage.html";
      } else {
        errorMsg.textContent = "用户名或密码错误，请重新输入。";
      }
    }

    function index() {
      window.location.href = "index.html";
    }