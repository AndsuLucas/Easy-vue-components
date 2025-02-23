<script setup>
import EasyButtonVue from './components/base/buttons/EasyButton.vue';
import EasyInputVue from './components/base/inputs/EasyInput.vue';

const clickHandler = () => {
  console.log('Button clicked');
}
</script>

<template>
  <div>
    <h1>Buttons </h1>
    <EasyButtonVue :on-click="clickHandler"><span>Click</span></EasyButtonVue>
    <EasyButtonVue :on-click="clickHandler" variation="danger"><span>Click</span></EasyButtonVue>
    <EasyButtonVue :on-click="clickHandler" variation="warning"><span>Click</span></EasyButtonVue>
    <EasyButtonVue :on-click="clickHandler" variation="success-outline"><span>Click</span></EasyButtonVue>
    <EasyButtonVue :on-click="clickHandler" variation="danger-outline"><span>Click</span></EasyButtonVue>
    <EasyButtonVue :on-click="clickHandler" variation="warning-outline"><span>Click</span></EasyButtonVue>
    <EasyButtonVue :on-click="clickHandler" variation="success" :disabled="true"><span>Click</span></EasyButtonVue>
  </div>
  <div>
    <h1>Inputs</h1>
    <EasyInputVue type="text" :on-change="clickHandler"></EasyInputVue>
    <EasyInputVue type="text" :on-change="clickHandler" :default-value="'Hello'" :read-only="true"></EasyInputVue>
    <div style="width: 600px; display: flex; flex-direction: column; align-items: center;margin: 0 auto; gap: 5px; align-items: center;">
      <div style="width: 100%; display: flex;  gap: 5px; margin-bottom: 5px;">
        <EasyInputVue type="text" :on-change="clickHandler" :default-value="'Hello'">
          <template #label>
            <p>Name</p>
          </template>
        </EasyInputVue>
      </div>
       <div style="width: 100%; display: flex; gap: 5px; align-items: center;">
        <EasyInputVue type="text" :on-change="clickHandler" :default-value="'Hello'">
          <template #label>
            <p>Email</p>
          </template>
        </EasyInputVue>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/normalize.scss';
@import './style/variables.scss';
</style>

