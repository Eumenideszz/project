<template>
  <div class="app-container">
    <el-table
      :data="list"       
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="英雄序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
       <el-table-column label="id">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>   
      <el-table-column label="name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>   
           
       <el-table-column label="job">
        <template slot-scope="scope">
          {{ scope.row.job }}
        </template>
      </el-table-column>   
       <el-table-column label="lines">
        <template slot-scope="scope">
          {{ scope.row.lines }}
        </template>
      </el-table-column>
       <el-table-column label="createtime">
        <template slot-scope="scope">
          {{scope.row.createTime }}
        </template>
      </el-table-column> 
       <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="editemp(scope.row)">
            编辑
          </el-button>
          <el-button  size="mini" type="danger" @click="deleteemp(scope.row)" >
            删除
          </el-button>
           <el-button  size="mini" type="info" @click="empdetail(scope.row)" >
            详情
          </el-button>
        </template>
      </el-table-column>     
       </el-table>
  </div>
</template>





<script>
import { getList } from '@/api/employee'

export default { 
  data() {
    return {
      
     
      list:[],
      listLoading: true,
      
    }
  },
  created() {
    this.fetchData()
  },
  
  methods: {
    fetchData(){
      getList().then(res=>
      {
        this.list=res.data 
        console.log(this.list)
      })   
     },
      
     editemp(row){
       this.$router.push({ path: '/employee/editemp/index', query: { id:row.id }} )
     },
     empdetail(row){
       this.$router.push({ path: '/employee/empdetail/index', query: { id:row.id }} )
     },
     deleteemp(row){
       var vm=this;
       this.$axios.delete('https://localhost:44338/employees?id='+row.id)
        .then(res=>{
         vm.$message.success('删除成功');
         vm.fetchData(); 
     }).catch(error=>{
       vm.$message.error('删除失败了哦')
     });
     }
  },
  
}
</script>

<style lang="scss" >
.hide .el-upload--picture-card {
  display: none;
}
</style>