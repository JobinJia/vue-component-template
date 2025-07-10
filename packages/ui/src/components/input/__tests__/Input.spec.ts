import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Input from '../Input.vue'

describe('input.vue', () => {
  it('mount component', () => {
    const wrapper = mount(Input)
    expect(wrapper.exists()).toBe(true)
  })
})
