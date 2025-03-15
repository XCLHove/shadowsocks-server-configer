<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="header">shadowsocks-server-config</h1>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="less">
@headerHeight: 50px;
@bodyHeight: calc(100vh - @headerHeight);

.header {
  height: @headerHeight;
  border-bottom: var(--boder);
  display: flex;
  justify-content: center;
}
.body {
  height: @bodyHeight;
  width: 100%;
}
</style>
