<template>
    <div id="app">
        <div class="align">
            <div class="wrapper">
                <slotMachine class="slotMachine" msg="Welcome to Your Vue.js App"/>
            </div>
        </div>
        <div class="background"></div>
    </div>
</template>

<script>
    import slotMachine from './components/slotMachine.vue'

    export default {
        name: 'app',
        components: {
            slotMachine
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/main';
</style>