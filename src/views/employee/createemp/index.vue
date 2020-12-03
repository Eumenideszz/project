<template>
  <div class="app-container">  
      <el-form ref="form" :data="list" label-width="120px">
       <el-form-item label="成员名字">
        <el-input v-model="list.name" />
      </el-form-item> 
       <el-form-item label="成员职业">
        <el-input v-model="list.job" />
      </el-form-item> 
      <el-form-item label="成员简介">
        <el-input v-model="list.lines" />
      </el-form-item> 
       <el-form-item label="加入时间">
        <el-input v-model="list.createTime" />
      </el-form-item>      
     <el-form-item>
        <el-button type="primary" @click="createemp()">保存</el-button>
      </el-form-item>
    </el-form> 
  </div>
</template>

<script>
export default {
  data() {
    return {    
     list:[],
     listLoading: true
    }
  },
  created() {
  
  
},
  methods: {
    createemp(){
      this.$axios.post('https://localhost:44338/employees?name='+this.list.name+'&job='+this.list.job+'&createtime='+this.list.createTime+'&lines='+this.list.lines)
      .then(res=>{
      this.list=res.data.data
      this.$router.push({ path: '/employee/index'})
      })
    },
   
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

