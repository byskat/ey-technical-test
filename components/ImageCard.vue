<template>
  <figure
    :class="[
      'c-imageCard',
      { 'c-imageCard--reveal': loaded },
      { 'c-imageCard--destroy': destroy },
    ]"
    v-on:click="hideCard"
    v-on:keyup.delete="hideCard"
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
      destroy: false,
    };
  },
  methods: {
    ...mapMutations({
      deleteImage: "images/deleteImage",
    }),
    imgLoaded() {
      this.loaded = true;
    },
    hideCard() {
      this.destroy = true;
      setTimeout(() => {
        this.deleteImage(this.content.id);
      }, 300);
    },
  },
};
</script>

<style lang="scss">
.c-imageCard {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border: 1px solid rgba(black, 0.1);
  border-radius: 6px;
  outline-offset: -3px;

  transform: translate(-10px, -10px);
  opacity: 0;

  &,
  figcaption,
  picture {
    transition: all 0.3s ease;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    transform: translate(-5px, -5px);
    outline: 5px solid rgba(black, 0.3);
    outline-offset: 5px;

    figcaption {
      transform: scale(1.1) translateY(-0.5em);
    }

    picture {
      transform: scale(1.1);
    }
  }

  &--reveal {
    transform: translate(0, 0);
    opacity: 1;
  }

  &--destroy {
    opacity: 0;
  }

  figcaption {
    background-color: white;
    transition: all 0.3s ease;
    padding: 1.5rem;
  }

  img {
    aspect-ratio: 1 / 1;
  }
}
</style>