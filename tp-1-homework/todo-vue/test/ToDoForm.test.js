import { mount } from '@vue/test-utils'
import ToDoForm from '@/components/ToDoForm.vue'
import { describe, expect, it } from 'vitest'

describe('ToDoForm', () => {
  it('does not emit "todo-added" event if input is empty', async () => {
    const wrapper = mount(ToDoForm)
    const form = wrapper.find('form')

    await form.trigger('submit.prevent')

    expect(wrapper.emitted('todo-added')).toBeUndefined()
  })

  it('emits "todo-added" event with label when form is submitted with input', async () => {
    const wrapper = mount(ToDoForm)
    const form = wrapper.find('form')
    const input = wrapper.find('input[type="text"]')

    await input.setValue('New Task')
    await form.trigger('submit.prevent')

    expect(wrapper.emitted('todo-added')).toBeTruthy()
    expect(wrapper.emitted('todo-added')[0]).toEqual(['New Task'])
  })
})
