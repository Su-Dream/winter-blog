<template>
  <div
    class="loop-item animate__animated animate__fadeInRightBig"
    :class="`animate__delay-${(index * 0.5).toFixed(1)}s`"
    v-for="(o, index) in 5"
    :key="index"
  >
    <div
      class="card-content-item flex-col items-center lg:flex-row flex justify-between item xl:h-72 mb-4 shadow-sm transform ease-out duration-500 hover:shadow-md rounded-lg"
      :class="{ 'flex-row-reverse': index % 2 != 0 }"
    >
      <div class="pictrue w-full lg:w-5/12 h-60 overflow-hidden">
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
      <div
        class="content w-full lg:w-7/12 py-4 px-4 lg:px-6 xl:px-10 self-center leading-none xl:leading-loose"
      >
        <div class="title text-xl lg:text-md xl:text-2xl">
          Endnotes20 破解版安装及使用简单教程
        </div>
        <div class="subtitle text-zinc-500 text-[0.75rem] my-2">
          <i class="iconfont !text-sm icon-calendar-v2"></i>
          发表于{{ "2022-04-26" }} |
          <i class="iconfont !text-sm icon-inbox align-text-top"></i>
          {{ "学习" }} > {{ "Endonotes" }}
        </div>
        <div class="info line-clamp-4 lg:line-clamp-3 text-sm leading-loose">
          链接：https://pan.baidu.com/s/1z2JRLarbxrHGQHaWNViAtg 提取码：luud
          软件介绍endnotes20主要功能
          参考文献管理：概览，标题、作者、摘要、期刊等重要信息一目了然
          参考文献的插入，同office的word联动良好 提供了文献的搜索和在线预览pdf
          参考文献的去重 安装过程
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
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
