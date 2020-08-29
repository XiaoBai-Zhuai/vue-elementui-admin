<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    provide() {
        reload: this.reload
    },
    data() {
        return {
            isShow: true,
        }
    },
    methods: {
        reload() {
            this.isShow = false
            this.$nextTick(() => {
                this.isShow = true
            })
        },
    },
}
</script>

<style>
#app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
