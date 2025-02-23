import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { vi } from "vitest";
import EasyButton from "./EasyButton.vue";

describe('EasyButton', () => {
    it('Should call function at "onClick" property', () => {
        const spy = vi.fn();
        const wrapper = mount(EasyButton, {
            props: {
                onClick: spy
            },
            slots: {
                default: 'Click me'
            }
        });

        wrapper.trigger('click');
        expect(spy).toHaveBeenCalled();
        expect(wrapper.text()).toBe('Click me');
    });

    it('Should add variatin on button', async () => {
        const wrapper = mount(EasyButton, {
            props: {
                variation: 'success',
                onClick: () => console.log('Clicked')
            },
            slots: {
                default: 'Click me'
            }
        });

        expect(wrapper.classes()).toContain('easy-button-success');

        await wrapper.setProps({ variation: 'danger' });

        expect(wrapper.classes()).toContain('easy-button-danger');
    });


    it('Should add  additional class on button', () => {
        const wrapper = mount(EasyButton, {
            props: {
                additionalClasses: ['my-class', 'another-class'],
                variation: 'warning',
                onClick: () => console.log('Clicked')
            },
            slots: {
                default: 'Click me'
            }
        });

        expect(wrapper.classes().length).toBe(3);
        expect(wrapper.classes()).toContain('another-class');
        expect(wrapper.classes()).toContain('my-class');
        expect(wrapper.classes()).toContain('easy-button-warning');
    });

    it('Should respect disabled state', () => {
        const wrapper = mount(EasyButton, {
            props: {
                disabled: true,
                onClick: () => console.log('Clicked')
            },
            slots: {
                default: 'Click me'
            }
        });
        expect(wrapper.attributes()).toHaveProperty('disabled');
    });

});


