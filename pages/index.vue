<template>
  <div>
    <button v-on:click="$store.dispatch('images/fetchImages')">Load</button>
    <main class="c-grid">
      <ImageCard
        v-for="image in getImages"
        :key="`image-${image.id}`"
        :content="image"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getImages: "images/getImages",
    }),
  },
  mounted() {
    this.$store.dispatch("images/fetchImages");
  },
};
</script>

<style lang="scss">
.c-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;

  margin: 0 5vw;
}
</style>