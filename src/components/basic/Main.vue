<template>
    <div>
        <el-tabs
            v-model="activeName"
            type="card"
            @tab-click="handleClick"
            @tab-remove="handleTabsRemove"
        >
            <el-tab-pane name="Home">
                <span slot="label">
                    <i class="el-icon-s-home">
                        <a href="#/home"></a>
                    </i>
                </span>
            </el-tab-pane>
            <el-tab-pane
                :closable="true"
                v-for="(tab) in tabList"
                :label="tab.title"
                :key="tab.name"
                :name="tab.component"
            ></el-tab-pane>

            <!-- :key="tab.path"
            :name="tab.name"-->
        </el-tabs>

        {{activeName}}
        <component :is="activeName" keep-alive></component>

        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Home from '../home/Home'
import Edit from '../content/Edit'
import List from '../content/List'
import { mapMutations } from 'vuex'

export default {
    name: 'Main',
    components: { Home, Edit, List },
    //浏览器刷新时保留store里的state
    created() {
        if (sessionStorage.getItem('store')) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(sessionStorage.getItem('store'))
                )
            )
        }

        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('store', JSON.stringify(this.$store.state))
        })
    },
    data() {
        return {}
    },
    methods: {
        ...mapMutations(['add_tab', 'remove_tab', 'set_active_name']),
        handleClick(tab, event) {
            console.log(tab)

            //因为最开始的home就是激活的tabName，所以如果在其他路径下点击home要再设置一下
            if (tab.name === 'Home') {
                this.set_active_name('Home')
            }

            if (this.activeName === tab.name) return

            //切换tab
            this.set_active_name(tab.name)
        },
        handleTabsRemove(tab) {
            console.log(tab);
            this.remove_tab(tab)
        },
        preLetterUpper(string) {
            return string.substring(0, 1).toUpperCase() + string.substring(1)
        },
    },
    computed: {
        menuList() {
            return this.$store.state.menuList
        },
        tabList() {
            return this.$store.state.tabList
        },
        activeName: {
            get() {
                return this.$store.state.activeName
            },
            set(val) {
                this.$store.commit('set_active_name', val)
            },
        },
    },
}
</script>

<style scoped>
</style>