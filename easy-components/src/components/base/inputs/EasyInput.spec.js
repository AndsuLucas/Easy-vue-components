import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { vi } from "vitest";
import EasyInput from "./EasyInput.vue";

describe("EasyInput", () => {
    it('Should create an input with specified type', () => {
        const wrapper = mount(EasyInput, {
            props: {
                type: 'password',
                onChange: (v) => console.log(v)
            }
        });
        expect(wrapper.find('input').attributes('type')).toBe('password');
    });

    it('Should mount input with default value specified', () => {
        const wrapper = mount(EasyInput, {
            props: {
                type: 'text',
                defaultValue: 'Hello',
                onChange: (v) => console.log(v)
            }
        });

        expect(wrapper.find('input').element.value).toBe('Hello');
    });

    it ('Should add additional classes', () => {
        const wrapper = mount(EasyInput, {
            props: {
                type: 'text',
                additionalClasses: ['class1', 'class2'],
                onChange: (v) => console.log(v)
            }
        });

        expect(wrapper.find('.easy-input').classes()).toContain('class1');
        expect(wrapper.find('.easy-input').classes()).toContain('class2');
    });

    it('Should execute on change', async () => {
        let target = '';
        const onChange = vi.fn((value) => {
            target = value;
        });

        const wrapper = mount(EasyInput, {
            props: {
                type: 'text',
                onChange

            }
        });

        await wrapper.find('.easy-input').setValue('Hello');
        wrapper.vm.$nextTick();
        expect(onChange).toHaveBeenCalled();
        expect(target).toBe('Hello');
    });

    it('Should add readonly property to input', () => {
        const wrapper = mount(EasyInput, {
            props: {
                type: 'text',
                readOnly: true,
                onChange: (v) => console.log(v)
            }
        });
        expect(wrapper.find('input').attributes()).toHaveProperty('readonly');
    });

    it('Should add placeholder to input', () => {
        const wrapper = mount(EasyInput, {
            props: {
                type: 'text',
                placeholder: 'Enter your name',
                onChange: (v) => console.log(v)
            }
        });
        expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your name');
    });
});