<template>
  <div class="app-container">  
      <el-form ref="form" :data="list" label-width="120px">
      <el-form-item label="武器名称">
        <el-input v-model="list.name" />
      </el-form-item> 
      <el-form-item label="武器简介">
        <el-input v-model="list.demo" />
      </el-form-item>    
     <el-form-item>
        <el-button type="primary" @click="editfaction2(uid)">编辑</el-button>  
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
    this.fatchDataById();  
},
  methods: {
    editfaction2(uid){  
      this.$axios.put('https://localhost:44338/factions?id='+this.uid+'&name='+this.list.name+'&demo='+this.list.demo)
      .then(res=>{
        console.log(this.list)
      this.$router.push({ path: '/faction/index'})
      })
    },
   fatchDataById(){
    this.$axios.get('https://localhost:44338/factions/'+this.uid).then(res => {
    this.list = res.data.data
    console.log(this.list)
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

