import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'
import { describe,expect,it } from 'vitest'


describe('HelloWorld', () => {

    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = mount(HelloWorld, {
        props: { msg }
        })
        expect(wrapper.text()).toContain(msg)
    })

})
