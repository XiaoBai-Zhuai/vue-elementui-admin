<template>
    <div>
        <el-header class="el-header" height="45px">
            <el-row class="el-row">
                <el-col :span="12">
                    <el-col :span="2">
                        <el-button type="text" @click="refresh" icon="el-icon-refresh-right"></el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-input
                            style="margin-top: 5px;"
                            size="small"
                            placeholder="请输入内容"
                            v-model="search"
                        >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </el-col>
                </el-col>
                <el-col :span="1" :push="11">
                    <el-popover trigger="hover" placement="bottom" :width="300">
                        <div>
                            <div>
                                <el-row>
                                    <el-col :span="4">
                                        <el-avatar shape="square" :size="70" :src="squareUrl"></el-avatar>
                                    </el-col>
                                    <el-col :span="16" :offset="4" style="margin-top: 20px;" v-text="username"></el-col>
                                </el-row>
                            </div>
                            <el-divider content-position="left">操作</el-divider>
                            <div>
                                <el-row>
                                    <el-link :underline="false" icon="el-icon-user">个人中心</el-link>
                                </el-row>
                                <el-row>
                                    <el-link :underline="false" icon="el-icon-switch-button">退出账户</el-link>
                                </el-row>
                            </div>
                        </div>

                        <el-avatar
                            slot="reference"
                            style="margin-top: 3px;"
                            shape="square"
                            size="medium"
                            :src="squareUrl"
                        ></el-avatar>
                    </el-popover>
                </el-col>
            </el-row>
        </el-header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    // inject: ['reload'],
    data() {
        return {
            username: 'username',
            search: '',
            icon: 'el-icon-s-fold',
            squareUrl:
                'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        }
    },
    methods: {
        refresh() {
            this.$router.push({
                path: '/refresh',
                query: { path: this.$route.fullPath },
            })
            // this.reload()
        },
    },
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    margin-left: 20px;
}

.el-header {
    background-color: rgb(57, 61, 73);
    width: 100%;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>