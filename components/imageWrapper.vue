<template>
  <picture>
    <img
      :alt="alt"
      :src="thumb"
      :data-src="src"
      v-on:load="imgLoaded"
      class="lazyload blur-up"
    />
  </picture>
</template>

<script>
export default {
  name: "ImageWrapper",
  props: {
    thumb: {
      type: String,
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    imgLoaded() {
      this.$emit("loaded");
    },
  },
};
</script>

<style lang="scss" scoped>
picture {
  overflow: hidden;

  .blur-up {
    -webkit-filter: blur(2px);
    filter: blur(2px);
    transition: filter 400ms;

    &.lazyloaded {
      -webkit-filter: blur(0);
      filter: blur(0);
    }
  }
}
</style>