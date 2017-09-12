<template>
    <div id="user">
        <h1></h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-col :span="11">
                    <el-input v-model="form.username"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-col :span="3">
                    <el-button type="primary" @click.native="onSubmit">查询</el-button>
                    <el-button @click.native="handleAdd">新增</el-button>
                    <!--<el-button @click.native="handleAddDialog">新增2</el-button>-->
                </el-col>

            </el-form-item>
        </el-form>

        <div class="block"></div>
        <el-table
                :data="userData"
                border
                style="width: 100%">
            <el-table-column
                    property="id"
                    label="ID"
                    align="center"
                    width="80">
            </el-table-column>
            <el-table-column
                    property="username"
                    label="用户名"
                    width="180"
                    align="center">
            </el-table-column>
            <el-table-column
                    property="realname"
                    label="真实姓名"
                    width="180"
                    align="center">
            </el-table-column>

            <el-table-column
                    property="idcard"
                    label="身份证号"
                    align="center">
            </el-table-column>

            <el-table-column
                    property="email"
                    label="邮箱"
                    align="center">
            </el-table-column>

            <el-table-column
                    property="address"
                    label="家庭住址"
                    align="center">
            </el-table-column>

            <el-table-column
                    label="操作"
                    align="center"
                    width="180">
                <template scope="scope">
                    <el-button type="text" @click.native="updateUser(scope.row.id)">编辑</el-button>
                    <el-button type="text" @click.native="deleteUser(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <h1></h1>
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    :page-sizes="[10, 20, 30]"
                    :page-size="10"
                    layout="total,  prev, pager, next, jumper"
                    :total="totalCount">
            </el-pagination>
        </div>

        <!--弹出框-->
        <user-add-dialog v-bind:dialog-form-visible="dialogFormVisible"></user-add-dialog>
    </div>
</template>
<script>
    import {getUserList} from '../../api/user.service';
    import moment from 'moment';
    import {mapGetters} from 'vuex';
    import {mapState} from 'vuex';
    import UserAddDialog from './user.add.dialog.vue';

    export default {
        data() {
            return {
                form: {
                    username: '',
                    pageNo: 1
                },
                userType: {
                    code: 1
                },
                word: '123.4673',
                dialogFormVisible: false
            }
        },
        computed: {
            ...mapGetters({
                'userData': 'getUserData',
                'totalCount': 'getTotalCount'
            })

        },
        methods: {
            onSubmit() {
                this.$store.dispatch("queryUserData", this.form);
            },
            handleAdd(){
                this.$router.push({name: 'user.add'});
            },
            updateUser(id){
                this.$router.push({name: 'user.update', params: {id: id}});
            },
            handleAddDialog(){
                this.dialogFormVisible = true;
            },
            deleteUser(id){
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch("deleteOneUserById", id).then((resp) => {
                        this.$notify({
                            title: '操作成功!',
                            message: '',
                            type: 'success'
                        });
                    }, (error) => {
                        this.$notify.error({
                            title: '操作失败!',
                            message: ''
                        });
                    });
                });
            },
            handleCurrentChange(val) {
                this.form.pageNo = val;
                this.onSubmit();
            }
        },
        components: {
            UserAddDialog
        },
        mounted(){
            console.log('this is user list')
            this.onSubmit();
        },
        created(){
            console.log('11')
        }
    }

</script>
<style>
    #user {
        padding-top: 70px;
    }

</style>
