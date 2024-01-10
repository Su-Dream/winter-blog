<template>
  <header
    class="flex justify-between h-16 p-8 items-center fixed w-full z-10 text-[#EEEEEE]"
  >
    <div class="logo">
      <a href="#1" class="font-bold">Star or Dream</a>
    </div>
    <nav v-if="isVisable">
      <ul class="flex leading-10">
        <li class="w-20 items-center text-center hover:">
          <i class="iconfont icon-shouye"></i>
          <a href="#">首页 </a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-shijianzhou"></i>
          <a href="#">时间轴</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-biaoqian"></i>
          <a href="#">标签</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-wenjian"></i>
          <a href="#">分类</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-fenlei"></i>
          <a href="#">清单</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-lianjie"></i>
          <a href="#">友链</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-aixin"></i>
          <a href="#">关于</a>
        </li>
      </ul>
    </nav>
    <div class="menu" v-else="isVisable">
      <ul class="flex flex-col">
        <li class="w-20 items-center text-center hover:">
          <i class="iconfont icon-shouye"></i>
          <a href="#">首页 </a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-shijianzhou"></i>
          <a href="#">时间轴</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-biaoqian"></i>
          <a href="#">标签</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-wenjian"></i>
          <a href="#">分类</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-fenlei"></i>
          <a href="#">清单</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-lianjie"></i>
          <a href="#">友链</a>
        </li>
        <li class="w-20 items-center text-center">
          <i class="iconfont icon-aixin"></i>
          <a href="#">关于</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
let isVisable = ref(true);
</script>

<style lang="less" scoped></style>
