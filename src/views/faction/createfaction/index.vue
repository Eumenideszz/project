<template>
  <div class="app-container">  
      <el-form ref="form" :data="list" label-width="120px">
      <el-form-item label="阵营名称">
        <el-input v-model="list.name" />
      </el-form-item> 
      <el-form-item label="阵营简介">
        <el-input v-model="list.demo" />
      </el-form-item>     
     <el-form-item>
        <el-button type="primary" @click="createfaction()">保存</el-button>
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
    createfaction(){
      this.$axios.post('https://localhost:44338/factions?'+'name='+this.list.name+'&demo='+this.list.demo)
      .then(res=>{
      this.list=res.data.data
      console.log(this.list)
      this.$router.push({ path: '/faction/index'})
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

