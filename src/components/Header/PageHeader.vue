<script setup lang="ts">
import { onMounted } from "vue";
import Typed from "typed.js";
import { useRoute } from "vue-router";
const route = useRoute();

// 将路径转换为小写，以保证路径的统一性
const currentPath = route.path.toLowerCase();
// 配置路径映射
const pathToStringsMap: Record<string, string[]> = {
  "/default": ["首页"],
  "/archives": ["归档"],
  "/tags": ["全部标签"],
  "/categories": ["分类"],
  "/test1": ["测试1"],
  "/test2": ["测试2"],
  "/about": ["关于"],
};

// 获取当前路径对应的字符串数组，如果找不到对应路径，则使用默认值
const stringsArray =
  pathToStringsMap[currentPath] || pathToStringsMap["/default"];

onMounted(() => {
  // 打字机
  const typed = new Typed("#PrintText", {
    strings: stringsArray,
    typeSpeed: 200,
    backSpeed: 150,
    loop: false,
  });
});
</script>

<template>
  <div
    class="page-header h-80 bg-header bg-no-repeat bg-auto object-cover bg-position-y-80 relative"
  >
    <div
      class="size-info absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-white"
    >
      <div
        id="PrintText"
        class="site-title font-bold text-[2.5rem] inline-block"
      ></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.typed-cursor) {
  font-size: 2.5rem;
}
</style>
