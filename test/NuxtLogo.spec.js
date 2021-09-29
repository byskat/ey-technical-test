import { mount } from '@vue/test-utils'
import ImageCard from '@/components/ImageCard.vue'

describe('ImageCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImageCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
