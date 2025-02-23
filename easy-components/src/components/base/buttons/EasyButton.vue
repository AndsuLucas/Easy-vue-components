<script>
import { ref, computed } from 'vue';
import {additionalClassesProp} from '../commonProps';

export default {
    name: 'EasyButton',
    props: {
        onClick: {
            type: Function,
            required: true
        },
        variation: {
            type: String,
            default: 'success'
        },
        disabled: {
            type: Boolean,
            default: false
       },
       ...additionalClassesProp
    },

    setup(props) { 
        const defaultClass = computed(() => {
            return `easy-button-${props.variation}`;
        }) 
        return {
           defaultClass 
        }
    }
}
</script>
<template>
    <button  type="button" @click="onClick" :class="[defaultClass, additionalClasses]" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<style lang="scss" scoped>@import './EasyButton.scss';</style>