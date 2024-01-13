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
      <aside class="w-3/12 mr-4">
        <div class="userInfo mb-4 shadow-sm hover:shadow-md px-6 py-5">
          <!-- 头像 -->
          <div
            class="avatar w-28 h-28 rounded-full overflow-hidden bg-avatar bg-auto mx-auto"
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
            class="followMe leading-loose mt-3 text-center bg-[#49B1F5] hover:bg-[#FF7242]"
          >
            <a href="#" class="inline-block w-full h-full">
              <i class="iconfont icon-github-fill-white !text-sm"></i>
              <span class="text-sm text-regal-white pl-[.625rem]"
                >Follow Me</span
              >
            </a>
          </div>
          <!-- outher -->
          <div
            class="card-info-icons flex justify-center gap-x-[.625rem] mt-2 leading-loose"
          >
            <div class="card-info-icons-item">
              <a href="#" class="w-full h-full">
                <i class="iconfont icon-github-fill !text-[1.375rem]"></i>
              </a>
            </div>
            <div class="card-info-icons-item">
              <a href="#" class="w-full h-full">
                <i class="iconfont icon-weixin !text-[1.375rem]"></i>
              </a>
            </div>
            <div class="card-info-icons-item">
              <a href="#" class="w-full h-full">
                <i class="iconfont icon-QQ !text-[1.375rem]"></i>
              </a>
            </div>
            <div class="card-info-icons-item">
              <a href="#" class="w-full h-full">
                <i class="iconfont icon-bilibili !text-[1.375rem]"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="mb-4 pb-4 h-48 bg-slate-400">这是侧边栏板块2</div>
        <div class="mb-4 h-96 bg-slate-400">这是侧边栏板块3</div>
      </aside>
      <div class="w-9/12">
        <div class="mb-4 h-80 bg-slate-500">这是内容板块1</div>
        <div class="mb-4 h-80 bg-slate-500">这是内容板块2</div>
        <div class="mb-4 h-80 bg-slate-500">这是内容板块3</div>
      </div>
    </section>
  </main>
  <FooterVue></FooterVue>
</template>

<style lang="less" scoped>
main {
  width: 100%;
}
</style>
