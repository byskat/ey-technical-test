const URI = 'photos';
const FLAGS = ['inactive', 'loading', 'error'];

export const state = () => ({
  items: [],
  itemStart: 0,
  flag: FLAGS[0],
})

export const mutations = {
  setImages(state, images) {
    state.items.push(...images);
  },
  updatePagination(state, batchSize) {
    state.itemStart = state.itemStart + batchSize;
  },
  updateFlag(state, flag) {
    try {
      if (FLAGS.indexOf(flag) != -1) {
        state.flag = flag;
      } else {
        throw `That state is unknown (${id})!`;
      }
    } catch (e) {
      console.error(e);
    }
  },
  deleteImage(state, id) {
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
  async fetchImages({ commit, state }, itemLimit = 50) {
    commit("updateFlag", "loading");

    await this.$axios.$get(
      `${URI}?_start=${state.itemStart}&_limit=${itemLimit}`
    ).then(images => {
      commit("setImages", images);
      commit("updatePagination", images.length);
    }).catch((e) => {
      commit("updateFlag", "error");
      console.error(e);
    }).finally(() => {
      commit("updateFlag", "inactive");
    });
  },
}

export const getters = {
  getImages(state) {
    return state.items;
  },
  getFlag(state) {
    return state.flag;
  },
}