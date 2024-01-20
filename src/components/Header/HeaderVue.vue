<template>
  <header
    class="flex justify-between h-16 p-8 items-center fixed w-full z-10 text-regal-white"
  >
    <div class="logo">
      <RouterLink to="/" class="font-bold cursor-pointer"
        >Star or Dream</RouterLink
      >
    </div>
    <nav v-if="isVisable">
      <ul class="flex text-sm">
        <li class="w-16 items-center text-center hover:">
          <i class="iconfont icon-shouye"></i>
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-shijianzhou"></i>
          <RouterLink to="/Archives">时间轴</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-biaoqian"></i>
          <RouterLink to="/Tags">标签</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-wenjian"></i>
          <RouterLink to="/">分类</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-fenlei"></i>
          <RouterLink to="/">清单</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-lianjie"></i>
          <RouterLink to="/">友链</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-aixin"></i>
          <RouterLink to="/About">关于</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="menu" v-else="isVisable">
      <ul class="flex flex-col">
        <li class="w-16 items-center text-center hover:">
          <i class="iconfont icon-shouye"></i>
          <RouterLink to="/">首页 </RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-shijianzhou"></i>
          <RouterLink to="/Archives">时间轴</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-biaoqian"></i>
          <RouterLink to="/Tags">标签</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-wenjian"></i>
          <RouterLink to="/">分类</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-fenlei"></i>
          <RouterLink to="/">清单</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-lianjie"></i>
          <RouterLink to="/">友链</RouterLink>
        </li>
        <li class="w-16 items-center text-center">
          <i class="iconfont icon-aixin"></i>
          <RouterLink to="/About">关于</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
let isVisable = ref(true);
</script>

<style lang="less" scoped></style>
