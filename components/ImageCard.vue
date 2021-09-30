<template>
  <figure
    :class="['c-imageCard', { 'c-imageCard--reveal': loaded }]"
    v-on:click="deleteImage(content.id)"
    v-on:keyup.delete="deleteImage(content.id)"
    tabindex="0"
  >
    <ImageWrapper
      :src="content.url"
      :thumb="content.thumbnailUrl"
      :alt="content.title"
      @loaded="imgLoaded"
    />

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
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    ...mapMutations({
      deleteImage: "images/deleteImage",
    }),
    imgLoaded() {
      this.loaded = true;
    },
  },
};
</script>

<style lang="scss">
.c-imageCard {
  overflow: hidden;

  transform: translate(-10px, -10px);
  opacity: 0;
  transition: all 0.3s ease;

  &--reveal {
    transform: translate(0, 0);
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid red;
  }

  img {
    aspect-ratio: 1 / 1;
  }
}
</style>