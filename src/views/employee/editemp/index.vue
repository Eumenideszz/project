
<template>
  <div class="app-container">  
      <el-form ref="form" :data="list" label-width="120px">
        <el-form-item label="成员ID">
        <el-input v-model="this.uid" />
      </el-form-item> 
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
        <el-button type="primary" @click="editemp2(uid)">编辑</el-button>  
      </el-form-item>
    </el-form> 
  </div>
</template>

<script>

export default {
  data() {
    return {
     uid:'',    
     list:[],
     listLoading: true,          
    }
  },
  created() {
    this.uid = this.$route.query.id ;//接收参数
    this.fatchDataById1();
  
},
  methods: {
    editemp2(uid){
     
      this.$axios.put('https://localhost:44338/employees?id='+this.uid+'&name='+this.list.name+'&job='+this.list.job+'&lines='+this.list.lines+'&createtime='+this.list.createTime)
      .then(res=>{
         console.log(this.uid)
      this.$router.push({ path: '/employee/index'})
      })
    },
   fatchDataById1(){
    this.$axios.get(`https://localhost:44338/employees?id=${this.uid}`).then(res => {
    this.list = res.data.data
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