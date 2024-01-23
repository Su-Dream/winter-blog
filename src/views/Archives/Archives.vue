<template>
  <PageHeader></PageHeader>
  <section class="content max-w-screen-xl my-8 mx-auto flex justify-between">
    <!-- 侧边栏 -->
    <CardAside></CardAside>
    <!-- 中间正文 -->
    <div
      class="px-[2.5rem] py-[3.125rem] card-content-list w-9/12 text-regal-textColor shadow-sm transform ease-out duration-500 hover:shadow-md rounded-lg"
    >
      <div class="timeLine">
        <el-timeline>
          <el-timeline-item type="primary" size="large" hollow="hollow">
            <h2 class="font-bold text-2xl h-14">文章总览</h2>
          </el-timeline-item>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :type="activity.type"
            :size="activity.size"
            hollow="hollow"
            :timestamp="activity.timestamp"
          >
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed {{ activity.timestamp }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const activities = [
  {
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
  },
  {
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
  },
  {
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
  },
  {
    content: "Custom icon",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
  },
  {
    content: "Custom icon",
    timestamp: "2018-04-12 20:46",
    size: "large",
    type: "primary",
  },
];
</script>

<style lang="less" scoped></style>
