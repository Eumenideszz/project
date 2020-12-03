<template>
  <div class="app-container">
    <el-table
      :data="list"       
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="阵营序号" width="95">
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
       <el-table-column label="demo">
        <template slot-scope="scope">
          {{ scope.row.demo }}
        </template>
      </el-table-column> 
       <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="editfac(scope.row)">
            编辑
          </el-button>
          <el-button  size="mini" type="danger" @click="deletefac(scope.row)" >
            删除
          </el-button>
        </template>
      </el-table-column>     
       </el-table>  
  </div>
</template>

<script>
import { getList } from '@/api/faction'


export default { 
  data() {
    return {
      list:null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getList().then(res=>{
        this.list=res.data
        console.log(this.list)
      })
      
    },
    editfac(row){
      this.$router.push({ path: '/faction/editfaction/index', query: { id: row.id }})
    },
    deletefac(row){
      var vm=this;
     this.$axios.delete('https://localhost:44338/factions?id='+row.id)
     .then(res=>{
         vm.$message.success('删除成功');
         vm.fetchData(); 
     }).catch(error=>{
       vm.$message.error('删除失败了哦')
     });
    },
    // formatterTime(time){
    //   return time.replace("T","");
    // },
    
  }
}
</script>