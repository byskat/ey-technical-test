<!--
  Essentially copy-pasted (yet adapted) from here: 
  https://vueschool.io/articles/vuejs-tutorials/build-an-infinite-scroll-component-using-intersection-observer-api/
-->

<template>
  <div class="c-observer" />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    }, this.options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>