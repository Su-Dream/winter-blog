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
      <aside class="w-3/12 mr-4 text-regal-textColor">
        <!-- 用户信息板块 -->
        <div
          class="card-user-info mb-4 shadow-sm transform ease-in-out duration-300 hover:shadow-md px-6 py-5"
        >
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
            class="followMe leading-loose mt-3 text-center bg-[#49B1F5] transform ease-in-out duration-500 hover:bg-[#FF7242]"
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
        <!-- 公告板块 -->
        <div
          class="card-acc pb-4 mb-4 shadow-sm transform ease-in-out duration-300 hover:shadow-md px-6 py-5"
        >
          <div class="title mb-2">
            <i class="iconfont icon-gonggao !text-xl align-middle"></i>
            <span class="ml-[.625rem] align-middle font-bold">公告</span>
          </div>
          <div class="acc-info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            doloremque deleniti possimus laborum ex nostrum et beatae cupiditate
            fuga, nobis dignissimos, numquam labore minima omnis eius totam
            similique molestias repellendus.
          </div>
        </div>
        <!-- 最新文章 -->
        <div
          class="card-new-content mb-4 shadow-sm transform ease-in-out duration-300 hover:shadow-md px-6 py-5"
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
                    破解版安装及使用简单教程Endnotes20
                    破解版安装及使用简单教程</a
                  >
                </div>
                <a class="text-[.75rem] origin-left">2022-04-26</a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <!-- 中间正文 -->
      <div class="card-content-list w-9/12 text-regal-textColor">
        <div class="loop-item" v-for="o in 3" :key="o">
          <div
            class="card-content-item flex justify-between h-72 mb-4 shadow-sm transform ease-out duration-500 hover:shadow-md"
          >
            <div class="pictrue w-5/12 overflow-hidden">
              <a
                href="#"
                class="inline-block transform duration-500 ease-in size-full hover:scale-125"
              >
                <img
                  class="object-cover size-full"
                  src="https://i.loli.net/2021/07/04/KFaL4kI83nvyQer.png"
                  alt="docter"
                />
              </a>
            </div>
            <div class="content w-7/12 px-10 self-center leading-loose">
              <div class="title text-2xl">
                Endnotes20 破解版安装及使用简单教程
              </div>
              <div class="subtitle text-[0.75rem] my-2">
                <i class="iconfont !text-sm icon-calendar-v2"></i>
                发表于{{ "2022-04-26" }} |
                <i class="iconfont !text-sm icon-inbox align-text-top"></i>
                {{ "学习" }} > {{ "Endonotes" }}
              </div>
              <div class="info line-clamp-3 text-sm leading-loose">
                链接：https://pan.baidu.com/s/1z2JRLarbxrHGQHaWNViAtg
                提取码：luud 软件介绍endnotes20主要功能
                参考文献管理：概览，标题、作者、摘要、期刊等重要信息一目了然
                参考文献的插入，同office的word联动良好
                提供了文献的搜索和在线预览pdf 参考文献的去重 安装过程
                压缩包解压后有两个文件夹：crack和EN20inst安装文件
                点击安装文件正常安装到指定目录
                复制crack目录内endnotes文件到文件目录下，选择覆盖文件
                打开endnotes进行激活后可以破解版使用 软件使用插入参考文献
                新创建一个group，用来储存我们的导入文件。
                前往谷歌学术下载对应的endnotes的引用文件，以enw作为文件结尾，知网可以下载txt文件，选择endnotes格式
                谷歌学术下载的enw文件将enw文件拖动到对应位置即可完成导入，如下图所示位置，可支持多个导入
                在endnotes中选中对应我们要插入的文献，到word内，把光标固定到我们要插入的位置，按住Alt+2就可以完成插入，参考文献会被加到文件的末尾。
                选择对应 ...
              </div>
            </div>
          </div>
          <div
            class="card-content-item flex justify-between h-72 mb-4 shadow-sm transform ease-out duration-500 hover:shadow-md"
          >
            <div class="content w-7/12 px-10 self-center">
              <div class="title text-2xl">
                Endnotes20 破解版安装及使用简单教程
              </div>
              <div class="subtitle text-[0.75rem] my-2">
                <i class="iconfont !text-sm icon-calendar-v2"></i>
                发表于{{ "2022-04-26" }} |
                <i class="iconfont !text-sm icon-inbox align-text-top"></i>
                {{ "学习" }} > {{ "Endonotes" }}
              </div>
              <div class="info line-clamp-3 text-sm leading-loose">
                链接：https://pan.baidu.com/s/1z2JRLarbxrHGQHaWNViAtg
                提取码：luud 软件介绍endnotes20主要功能
                参考文献管理：概览，标题、作者、摘要、期刊等重要信息一目了然
                参考文献的插入，同office的word联动良好
                提供了文献的搜索和在线预览pdf 参考文献的去重 安装过程
                压缩包解压后有两个文件夹：crack和EN20inst安装文件
                点击安装文件正常安装到指定目录
                复制crack目录内endnotes文件到文件目录下，选择覆盖文件
                打开endnotes进行激活后可以破解版使用 软件使用插入参考文献
                新创建一个group，用来储存我们的导入文件。
                前往谷歌学术下载对应的endnotes的引用文件，以enw作为文件结尾，知网可以下载txt文件，选择endnotes格式
                谷歌学术下载的enw文件将enw文件拖动到对应位置即可完成导入，如下图所示位置，可支持多个导入
                在endnotes中选中对应我们要插入的文献，到word内，把光标固定到我们要插入的位置，按住Alt+2就可以完成插入，参考文献会被加到文件的末尾。
                选择对应 ...
              </div>
            </div>
            <div class="pictrue w-5/12 overflow-hidden">
              <a
                href="#"
                class="inline-block transform duration-500 ease-in size-full hover:scale-125"
              >
                <img
                  class="object-cover size-full"
                  src="https://i.loli.net/2021/07/04/KFaL4kI83nvyQer.png"
                  alt="docter"
                />
              </a>
            </div>
          </div>
        </div>
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
</style>
