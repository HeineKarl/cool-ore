<template>
  <div class="contact">
    <v-icon class="icon">mdi-close-octagon</v-icon>
    <h1>Contact View is currently closed</h1>
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
.contact {
  @include flex($dir: column);
}

.icon {
  font-size: 10rem;
}
</style>