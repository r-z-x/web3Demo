<template>
  <div class="footerLayout">
    <div class="container flex justify-between items-center">
      <div class="menu-wrapper flex items-center">
        <img src="../common/img/logo-npm.svg" alt="logo">
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.footerLayout {
  width: 100%;
  height: 80px;
  background: #12161c;
  .container {
    width: 1200px;
    margin: auto;
    .menu-wrapper {
      img {
        max-width: 80px;
        margin-right: 40px;
      }
    }
  }
}
</style>
