<script setup lang="ts">
import { ref } from "vue";
const componentKey = ref(0);
</script>

<template>
  <HeaderVue></HeaderVue>
  <RouterView :key="componentKey"></RouterView>
  <FooterVue></FooterVue>
</template>

<style scoped></style>
