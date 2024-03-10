<template>
  <PageHeader></PageHeader>
  <section
    class="xl:content max-w-screen-xl my-8 mx-auto flex-col-reverse items-center xl:items-start xl:flex-row flex justify-between"
  >
    <!-- 侧边栏 -->
    <CardAside></CardAside>
    <!-- 中间正文 -->
    <div
      class="px-[0.75rem] py-[2.25rem] card-content-list w-11/12 xl:w-9/12 h-[100rem] text-regal-textColor shadow-sm transform ease-out duration-500 hover:shadow-md rounded-lg"
    >
      <div class="tag-cloud-title text-center text-2xl">标签 - {{ 24 }}</div>
      <div class="tag-cloud-list text-center">
        <a
          class="transform scale-75 px-2"
          :style="{ color: generateFontColor(), fontSize: generateFontSize() }"
          v-for="(o, index) in TAGLIST.length"
          :key="index"
          href="#"
        >
          {{ TAGLIST[o - 1] }}
        </a>
      </div>
      <hr
        class="my-10 relative mx-auto border-2 border-dashed border-[#a4d8fa] box-content overflow-visible"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const TAGLIST = [
  "华为",
  "面经",
  "做饭",
  "玩耍",
  "美食",
  "游戏",
  "考研",
  "经验",
  "ccf",
  "算法",
  "编程",
  "c++",
  "学习",
  "STL",
  "操作系统",
  "软件",
  "docker",
  "博客搭建",
  "休闲",
  "可视化",
  "Ubuntu",
  "病毒",
  "挖矿",
  "服务器",
];

// 生成一个随机整数
const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// 计算属性，生成随机字体大小
const generateFontSize = (): string => {
  const minSize: number = 20; // 最小字体大小（px）
  const maxSize: number = 35; // 最大字体大小（px）
  const baseFontSize: number = 16; // 设计稿基准字体大小（px）
  const randomSize: number = randomInt(minSize, maxSize); // 生成随机字体大小（px）
  const remSize: number = randomSize / baseFontSize; // 将随机字体大小转换为 rem 单位
  return `${remSize}rem`; // 返回值示例："1rem" - "1.5rem"
};

// 计算属性，生成较暗的随机颜色
const generateFontColor = (): string => {
  const minChannelValue = 10; // 最小颜色通道值（较暗）
  const maxChannelValue = 200; // 最大颜色通道值（较亮）

  const r: number = randomInt(minChannelValue, maxChannelValue); // 控制红色通道在较暗范围内
  const g: number = randomInt(minChannelValue, maxChannelValue); // 控制绿色通道在较暗范围内
  const b: number = randomInt(minChannelValue, maxChannelValue); // 控制蓝色通道在较暗范围内

  return `rgba(${r}, ${g}, ${b}, 1)`; // 返回较暗的颜色
};
</script>
<style lang="less" scoped>
hr {
  &::before {
    position: absolute;
    top: -12px;
    left: 5%;
    z-index: 1;
    color: var(--hr-before-color);
    font-family: "iconfont";
    content: "\e6c1";
    font-size: 1.5rem;
    line-height: 1;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    -ms-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }
  &:hover {
    &::before {
      left: calc(95% - 24px);
    }
  }
}
</style>
