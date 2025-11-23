<script>
export default {
  name: "HeaderBar",
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <nav class="nav-left">
        <router-link to="/">Main</router-link>
        <span class="nav-separator">|</span>
        <router-link to="/signup">Signup</router-link>
      </nav>
      <div class="nav-right">
        <a href="login.html"><img src="res/images/default_avatar.jpg" alt="Avatar" class="avatar-img"></a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background: #e0e0e0;
  border-radius: 18px;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 24px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left a {
  color: inherit;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s;
}

.nav-left a:hover {
  background: #d0d0d0;
}

.nav-separator {
  font-size: 1.3em;
  user-select: none;
  padding: 0 6px;
}

.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>