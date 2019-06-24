<template>
    <div id="app">
        <div class="align">
            <div class="wrapper">
                <slotMachine class="slotMachine" msg="Welcome to Your Vue.js App"/>
            </div>
        </div>
        <div></div>
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
    var siteWidth = 1280;
    var scale = screen.width / siteWidth;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
</script>

<style lang="scss">
    @import './assets/scss/main';
</style>