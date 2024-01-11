<script setup lang="ts"></script>
<template>
  <HeaderVue></HeaderVue>
  <main>
    <section>
      <div class="bgMovie">
        <video
          width="100%"
          src="../../../public/videos/MonaWallpaperFHD.mp4"
          muted
          autoplay
          loop
        ></video>
      </div>
    </section>
    <section class="content max-w-screen-xl my-8 mx-auto flex justify-between">
      <aside class="w-3/12 mr-4 overflow-hidden">
        <div class="mb-4 h-96 bg-slate-400">这是侧边栏板块1</div>
        <div class="mb-4 pb-4 h-48 bg-slate-400">这是侧边栏板块2</div>
        <div class="mb-4 h-96 bg-slate-400">这是侧边栏板块3</div>
      </aside>
      <div class="w-9/12">
        <div class="w-9/12 mb-4 h-80 bg-slate-500">这是内容板块1</div>
        <div class="w-9/12 mb-4 h-80 bg-slate-500">这是内容板块2</div>
        <div class="w-9/12 mb-4 h-80 bg-slate-500">这是内容板块3</div>
      </div>
    </section>
  </main>
</template>

<style lang="less" scoped>
main {
  width: 100%;
  .bgMovie {
    video {
    }
  }
}
</style>
