<script setup lang="ts">
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  // 打字机
  const typed = new Typed("#PrintText", {
    strings: [
      "抬头望着天，那里有每一个人的幻想。",
      "Look up at the sky, where everyone's fantasy.",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});
</script>
<template>
  <HeaderVue></HeaderVue>
  <main class="select-none">
    <section class="window-bg relative">
      <div class="bgMovie">
        <video
          width="100%"
          height="100vh"
          src="../../../public/videos/MonaWallpaperFHD.mp4"
          muted
          autoplay
          loop
        ></video>
      </div>
      <div
        class="size-info absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-white"
      >
        <div class="site-title font-bold text-[2.5rem]">
          {{ "星星与梦" }}
        </div>
        <div id="PrintText" class="site-subtitle text-2xl inline-block">
          <!-- {{ "抬头望着天，那里有每一个人的幻想" }} -->
        </div>
      </div>
    </section>
    <section class="content max-w-screen-xl my-8 mx-auto flex justify-between">
      <aside class="w-3/12 mr-4 text-regal-textColor">
        <!-- 用户信息板块 -->
        <UserInfo></UserInfo>
        <!-- 公告板块 -->
        <Announcement></Announcement>
        <!-- 最新文章 -->
        <Recent></Recent>
      </aside>
      <!-- 中间正文 -->
      <div class="card-content-list w-9/12 text-regal-textColor">
        <Content></Content>
        <!-- 翻页功能 -->
        <div class="page w-full flex justify-center">
          <el-pagination background layout="prev, pager, next" :total="30" />
        </div>
      </div>
    </section>
  </main>
  <FooterVue></FooterVue>
</template>

<style lang="less" scoped>
main {
  width: 100%;
}
:deep(.typed-cursor) {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
