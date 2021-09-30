<template>
  <div>
    <main class="c-grid">
      <ImageCard
        v-for="image in getImages"
        :key="`image-${image.id}`"
        :content="image"
      />
    </main>
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getImages: "images/getImages",
      getFlag: "images/getFlag",
    }),
  },
  methods: {
    intersected() {
      this.$store.dispatch("images/fetchImages");
    },
  },
  watch: {
    getFlag: (flag) => {
      switch (flag) {
        case "loading":
          $nuxt.$loading.start();
          break;
        case "inactive":
          $nuxt.$loading.finish();
          break;
        case "error":
          $nuxt.$loading.error();
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.c-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1.5em;

  /*
  This 2 rules combined with the IntersectionObserver makes the 
  page load more smoothly.
  */
  min-height: 100vh;
  margin: 5vw 5vw -100vh;
}
</style>