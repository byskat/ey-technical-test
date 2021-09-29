const URI = "photos";

export const state = () => ({
  items: [],
  itemStart: 0,
  itemLimit: 10,
  busy: false,
})

export const mutations = {
  setImages(state, images) {
    state.items.push(...images);
  },
  updatePagination(state, batchSize) {
    state.itemStart = state.itemStart + batchSize;
  },
  deleteImage(state, id) {
    console.log(id);
    try {
      const imageId = state.items.findIndex(i => i.id == id);

      if (imageId != -1) {
        return state.items.splice(imageId, 1);
      } else {
        throw `Image not found (${id})!`;
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export const actions = {
  async fetchImages({ commit, state }) {
    await this.$axios.$get(
      `${URI}?_start=${state.itemStart}&_limit=${state.itemLimit}`
    ).then(images => {
      commit("setImages", images);
      commit("updatePagination", images.length);
    });
  },
}

export const getters = {
  getImages(state) {
    return state.items;
  },
}