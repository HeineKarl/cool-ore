<template>
  <div>Here is the change password</div>
</template>
  
<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const { state, commit, dispatch } = useStore();
    const router = useRoute();
    dispatch("generateToken", { routename: router.name });

    return {
      state,
    };
  },
});
</script>
  
  <style lang="scss" scoped>
</style>