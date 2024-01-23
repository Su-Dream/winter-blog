<script setup lang="ts">
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  // 打字机
  const typed = new Typed("#PrintText", {
    strings: ["归档"],
    typeSpeed: 200,
    backSpeed: 150,
    loop: false,
  });
});
</script>

<template>
  <div
    class="page-header h-80 bg-header bg-no-repeat bg-auto object-cover bg-position-y-80 relative"
  >
    <div
      class="size-info absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-white"
    >
      <div
        id="PrintText"
        class="site-title font-bold text-[2.5rem] inline-block"
      ></div>
    </div>
  </div>
  <section class="content max-w-screen-xl my-8 mx-auto flex justify-between">
    <!-- 侧边栏 -->
    <CardAside></CardAside>
    <!-- 中间正文 -->
    <div class="card-content-list w-9/12 text-regal-textColor"></div>
  </section>
</template>

<style lang="less" scoped>
:deep(.typed-cursor) {
  font-size: 2.5rem;
}
</style>
