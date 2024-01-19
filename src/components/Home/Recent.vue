<template>
  <!-- 最新文章板块 -->
  <div
    class="card-new-content mb-4 shadow-sm transform ease-in-out duration-300 hover:shadow-md px-6 py-5 rounded-lg"
  >
    <div class="title mb-2">
      <i class="iconfont icon-history !text-xl align-middle"></i>
      <span class="ml-[.625rem] align-middle font-bold">最新文章</span>
    </div>
    <div class="aside-list">
      <div v-for="o in 5" :key="o" class="aside-list-item flex mb-2">
        <a href="#" class="inline-block size-[3.75rem]">
          <img
            class="object-cover size-[3.75rem]"
            src="https://s2.loli.net/2022/04/26/JILkS5gp9cr24yv.jpg"
            alt=""
          />
        </a>
        <div class="content w-9/12 pl-2">
          <div
            class="title w-full transform ease-in-out duration-300 hover:text-regal-hover"
          >
            <a
              href="#"
              class="inline-block size-full mb-[-0.2rem] text-sm whitespace-nowrap overflow-hidden text-ellipsis"
              >Endnotes20 破解版安装及使用简单教程Endnotes20
              破解版安装及使用简单教程Endnotes20 破解版安装及使用简单教程</a
            >
          </div>
          <a class="text-[.75rem] origin-left">2022-04-26</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped></style>
