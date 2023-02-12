<template>
  <div class="article">
    <v-icon class="icon">mdi-close-octagon</v-icon>
    <h1>Article View is currently closed</h1>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.article {
  @include flex($dir: column);
}

.icon {
  font-size: 10rem;
}
</style>