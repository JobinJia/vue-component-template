import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../Button.vue'

describe('button.vue', () => {
  it('mount component', () => {
    const wrapper = mount(Button)
    expect(wrapper.html()).toContain('button')
  })
})
