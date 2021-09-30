import { shallowMount } from '@vue/test-utils'
import ImageCard from '@/components/ImageCard.vue'

const f = () => {
  return shallowMount(ImageCard, {});
};

describe("ImageCard", () => {
  test('is a Vue instance', () => {
    const wrapper = f();
    expect(wrapper.vm).toBeTruthy();
  });

  test('triggers deletion once clicked', async () => {
    const wrapper = f();

    const card = wrapper.find('figure');

    expect(wrapper.vm.destroy).toBe(false);

    await card.trigger('click');

    expect(wrapper.vm.destroy).toBe(true);
  });
});
