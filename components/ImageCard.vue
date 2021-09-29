<template>
  <figure class="c-imageCard" v-on:click="deleteImage(content.id)">
    <picture>
      <source media="(min-width: 150px)" :srcset="`${content.url} 1x`" />
      <img :src="content.thumbnailUrl" :alt="content.title" loading="lazy" />
    </picture>
    <figcaption>{{ content.title }}</figcaption>
  </figure>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ImageCard",
  props: {
    content: {
      type: Object,
      default: () => ({
        title: "Dummy Placeholder",
        url: "https://via.placeholder.com/600?text=Placeholder",
        thumbnailUrl: "https://via.placeholder.com/150?text=Placeholder",
      }),
    },
  },
  methods: {
    ...mapMutations({
      deleteImage: "images/deleteImage",
    }),
  },
};
</script>

<style lang="scss">
.c-imageCard {
  aspect-ratio: 1 / 1;
}
</style>