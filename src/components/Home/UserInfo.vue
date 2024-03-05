<template>
  <!-- 用户信息板块 -->
  <div
    class="card-user-info mb-4 shadow-sm transform ease-in-out duration-300 hover:shadow-md px-6 py-5 rounded-lg xl:text-2xl"
  >
    <!-- 头像 -->
    <div
      class="avatar w-28 h-28 rounded-full overflow-hidden bg-avatar bg-auto mx-auto transform duration-500 hover:rotate-[360deg]"
    ></div>
    <!-- 用户名 -->
    <div class="authorInfoName leading-loose text-center text-[1.375rem]">
      星星与梦
    </div>
    <!-- 个性签名 -->
    <div class="authorInfoDescription text-center text-[.875rem]">
      我期待的不是雪
    </div>
    <!-- 卡片区域 -->
    <div class="card-info-data flex justify-evenly mt-3 mb-1">
      <div class="card-info-data-item">
        <a href="#">
          <div class="headline text-center text-sm">文章</div>
          <div class="length-num text-center text-xl">16</div>
        </a>
      </div>
      <div class="card-info-data-item">
        <a href="#">
          <div class="headline text-center text-sm">标签</div>
          <div class="length-num text-center text-xl">16</div>
        </a>
      </div>
      <div class="card-info-data-item">
        <a href="#">
          <div class="headline text-center text-sm">分类</div>
          <div class="length-num text-center text-xl">16</div>
        </a>
      </div>
    </div>
    <!-- follow me -->
    <div
      class="followMe leading-loose mt-3 text-center bg-[#49B1F5] transform ease-in-out duration-500 hover:bg-[#FF7242]"
    >
      <a href="#" class="inline-block w-full h-full">
        <i class="iconfont icon-github-fill-white !text-sm"></i>
        <span class="text-sm text-regal-white pl-[.625rem]">Follow Me</span>
      </a>
    </div>
    <!-- outher -->
    <div
      class="card-info-icons flex justify-center gap-x-[.625rem] mt-2 leading-loose"
    >
      <div
        class="card-info-icons-item transform ease-in-out duration-300 hover:rotate-180"
      >
        <a href="#" class="w-full h-full">
          <i class="iconfont icon-github-fill !text-[1.375rem]"></i>
        </a>
      </div>
      <div
        class="card-info-icons-item transform ease-in-out duration-300 hover:rotate-180"
      >
        <a href="#" class="w-full h-full">
          <i class="iconfont icon-weixin !text-[1.375rem]"></i>
        </a>
      </div>
      <div
        class="card-info-icons-item transform ease-in-out duration-300 hover:rotate-180"
      >
        <a href="#" class="w-full h-full">
          <i class="iconfont icon-QQ !text-[1.375rem]"></i>
        </a>
      </div>
      <div
        class="card-info-icons-item transform ease-in-out duration-300 hover:rotate-180"
      >
        <a href="#" class="w-full h-full">
          <i class="iconfont icon-bilibili !text-[1.375rem]"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped></style>
