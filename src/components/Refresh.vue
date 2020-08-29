<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: 'Refresh',
        beforeCreate() {
            this.$router.push(this.$route.query.path)
        }
    }
</script>

<style scoped>

</style>