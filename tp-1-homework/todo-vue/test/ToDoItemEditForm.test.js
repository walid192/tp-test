import { mount } from '@vue/test-utils'
import ToDoItemEditForm from '@/components/ToDoItemEditForm.vue'
import { describe, expect, it } from 'vitest'

describe('ToDoItemEditForm', () => {
    it('emits "item-edited" event with new label when form is submitted', async () => {
        const wrapper = mount(ToDoItemEditForm, {
            props: { label: 'Task 1', id: 'task-1' }
        })
        const input = wrapper.find('input')
        await input.setValue('New Task')
        await wrapper.find('form').trigger('submit.prevent')
        expect(wrapper.emitted('item-edited')).toBeTruthy()
        expect(wrapper.emitted('item-edited')[0]).toEqual(['New Task'])
    })

    it('emits "edit-cancelled" event when cancel button is clicked', async () => {
        const wrapper = mount(ToDoItemEditForm, {
            props: { label: 'Task 1', id: 'task-1' }
        })
        const cancelButton = wrapper.find('button.btn')
        await cancelButton.trigger('click')
        expect(wrapper.emitted('edit-cancelled')).toBeTruthy()
    })
})
