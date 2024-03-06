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
          <RouterLink to="/categories">分类</RouterLink>
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
    <!-- 手机导航栏 -->
    <nav class="menu" v-else="isVisable">
      <!-- 手机导航栏控件 -->
      <div
        class="menu-control cursor-pointer relative z-10"
        @click="(isMenu = !isMenu), (isMask = !isMask)"
      >
        <i v-if="isMenu" class="iconfont icon-daohanglan"></i>
      </div>
      <!-- 手机导航栏菜单 -->
      <div
        class="menu-mask flex flex-row-reverse overflow-hidden h-dvh absolute top-0 left-0 right-0 bg-black bg-opacity-80"
        v-if="isMask"
        @click="(isMenu = !isMenu), (isMask = !isMask)"
      >
        <div
          class="menu-list bg-zinc-50 w-1/2 h-full flex flex-col"
          @click.stop
        >
          <UserInfo :night="true"></UserInfo>
          <ul
            class="flex flex-col justify-start gap-y-4 text-xl text-black px-12"
          >
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-shouye-copy w mr-5"></i>
              <RouterLink to="/">首页</RouterLink>
            </li>
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-shijianzhou-copy w mr-5"></i>
              <RouterLink to="/Archives">时间轴</RouterLink>
            </li>
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-biaoqian-copy w mr-5"></i>
              <RouterLink to="/Tags">标签</RouterLink>
            </li>
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-wenjian-copy w mr-5"></i>
              <RouterLink to="/categories">分类</RouterLink>
            </li>
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-fenlei-copy w mr-5"></i>
              <RouterLink to="/">清单</RouterLink>
            </li>
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-lianjie-copy w mr-5"></i>
              <RouterLink to="/">友链</RouterLink>
            </li>
            <li class="border-b-2 items-center text-center">
              <i class="iconfont icon-aixin-copy w mr-5"></i>
              <RouterLink to="/About">关于</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import UserInfo from "../Home/UserInfo.vue";
// 导航条显示隐藏
let isVisable = ref<boolean>(true);
let isMenu = ref<boolean>(true);
let isMask = ref<boolean>(false);
// 监听视口
const handleResize = () => {
  isVisable.value = window.innerWidth >= 768;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

//
</script>

<style lang="less" scoped></style>
