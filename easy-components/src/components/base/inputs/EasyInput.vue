<script>
import { ref } from 'vue';
import { additionalClassesProp } from '../commonProps';

export default {
    name: 'EasyInput',
    props: {
        type: {
            type: String,
            required: true,
        },
        onChange: {
            type: Function,
            required: true
        },
        defaultValue: {
            type: [String, Number],
            default: ''
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        id: {
            type: String,
        },
        ...additionalClassesProp
    },

    setup(props) {
        const data = ref(props.defaultValue);

        const handleChange = () => props.onChange(data.value);

        return {
            data,
            handleChange
        }
    }
}
</script>
<template>
    <label class="easy-input-label" :for="id ? id : ''">
        <slot name="label"></slot>
    </label>
    <input :type="type" v-model="data" :class="['easy-input', additionalClasses]" @change="handleChange"
        :readonly="readOnly" :placeholder="placeholder" :id="id ? id : ''" />
</template>
<style lang="scss" scoped>
@import './EasyInput.scss';
</style>

