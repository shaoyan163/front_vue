<template>
    <el-table
            :data="tableData"
            class="project_list"
            border
            style="width: 35%">
        <el-table-column
                prop="project"
                label="项目名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="appName"
                label="应用名称"
                width="180">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ProjectsList",
        data() {
            return {
                tableData: [{
                    project: '小蜜蜂车贷',
                    name: '王小虎',
                    appName: 'loanApp'
                }, {
                    project: '小蜜蜂车贷',
                    name: '王小虎',
                    appName: 'loanApp'
                }, {
                    project: '小蜜蜂车贷',
                    name: '王小虎',
                    appName: 'loanApp'
                }, {
                    project: '小蜜蜂车贷',
                    name: '王小虎',
                    appName: 'loanApp'
                }]
            }
        }
    }
</script>

<style scoped>
    .project_list {
        margin: 50px 500px;
        border-collapse: collapse;
        width: 40%;
    }

</style>