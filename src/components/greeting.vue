<template>
    <div class="msg">
        <p>{{message}}</p>
        <span v-bind:title="dream">学好vue不是梦</span>
        <p v-if="isNotKeyou">不会开车的老师不是好老师</p>
        <!--<p @click="name='路人'">有一天，{{name}}想去上网</p>-->
        <p @click="changeName">有一天，{{name}}想去上网</p>
        <p v-if="age>=60">您回家歇着吧</p>
        <p v-else-if="age>=18">尽情的上网吧</p>
        <p v-else>未成年</p>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        data() {
            return {
                message: "欢迎测试开发大佬们",
                dream: "小目标",
                isNotKeyou: true,
                name: "小明",
                age: 59
            }
        },
        methods:{
            changeName:function(){
                this.name = "一个没有整容需求的人"
            },
            created(){
                console.log("实例创建之后，能获取到this ")
                console.log("username为：",this.username)
            },
            mounted(){
                console.log("vue实例挂载到DOM树")
            }
        }
    }
</script>

<style scoped>
    .msg p {
        color: brown;
    }
</style>