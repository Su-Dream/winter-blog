<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Typed from "typed.js";

const printText = ref<HTMLElement | null>(null);
let typed: Typed | null = null;

onMounted(() => {
  // 创建Typed.js实例
  typed = new Typed(printText.value!, {
    strings: [
      "抬头望着天，那里有每一个人的幻想。",
      "Look up at the sky, where everyone's fantasy.",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});

onBeforeUnmount(() => {
  // 在组件销毁前销毁Typed.js实例
  if (typed) {
    typed.destroy();
  }
});
</script>
<template>
  <main class="select-none">
    <!-- 开屏动画 -->
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
        <div
          class="site-title font-bold text-xs md:text-xl lg:text-[2.5rem] mb-3"
        >
          {{ "星星与梦" }}
        </div>
        <div
          ref="printText"
          class="site-subtitle text-xs md:text-xl inline-block"
        >
          <!-- {{ "抬头望着天，那里有每一个人的幻想" }} -->
        </div>
      </div>
    </section>
    <section
      class="content my-8 mx-auto flex justify-between flex-col-reverse items-center xl:items-start xl:flex-row xl:max-w-screen-xl"
    >
      <!-- 侧边栏 -->
      <CardAside></CardAside>
      <!-- 中间正文 -->
      <div class="card-content-list w-11/12 xl:w-9/12 text-regal-textColor">
        <Content></Content>
        <!-- 翻页功能 -->
        <div class="page w-full flex justify-center">
          <el-pagination background layout="prev, pager, next" :total="30" />
        </div>
      </div>
    </section>
  </main>
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
