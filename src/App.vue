<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <ul>
            <li><router-link :to="{ name: 'home'}">主页</router-link></li>
            <li><router-link :to="{ name: 'greet'}">欢迎</router-link></li>
            <li><router-link :to="{ name: 'login'}">登陆</router-link></li>
            <li><router-link :to="{ name: 'projectList'}">项目列表</router-link></li>
        </ul>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
