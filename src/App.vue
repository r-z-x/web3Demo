<template>
  <div id="app">
    <div class="header-wrapper">
      <headerLayout />
    </div>
    <div class="main-wrapper">
      <router-view />
    </div>
    <div class="footer-wrapper">
      <footerLayout />
    </div>
  </div>
</template>

<script>
import headerLayout from "./views/header.vue";
import footerLayout from "./views/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    headerLayout,
    footerLayout,
  },
};
</script>

<style lang="less" scoped>
.main-wrapper{
  height: calc(100vh - 80px);
  background: #F6F7F8;
}
</style>
