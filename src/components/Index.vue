<template>
    <div>
        <el-container class="el-container">
            <Aside></Aside>
            <el-container direction="vertical">
                <Header></Header>

                <el-container direction="vertical">
                    <Main></Main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from './basic/Aside'
import Header from './basic/Header'
import Main from './basic/Main';

export default {
    name: 'Index',
    components: { Aside, Header, Main },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
</style>