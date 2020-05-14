<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>开班事项</p>
        <h3>禁开车，只除草</h3>
        <h3>禁灌水，只下地</h3>
        <h3>禁打鱼，只学习</h3>
        <el-image :src="url" fit="cover">

        </el-image>

    </div>
</template>

<script>
    import {dogs} from "../api/api"

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                url: ""
            }
        },
        mounted() {
            dogs().then(response => {
                this.url = response.data.message
            })
                .catch(function (err) {
                    console.log(err)
                });
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
