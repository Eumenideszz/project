<template>
  <div class="app-container">
    <el-table
      :data="list"       
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="武器序号" width="95">
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
      <!-- <el-table-column label="cretetime">
        <template slot-scope="scope">
          {{ formatterTime(scope.row.createtime) }}
        </template>
      </el-table-column>  -->
       <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="editwpn(scope.row)">
            编辑
          </el-button>
          <el-button  size="mini" type="danger" @click="deletewpn(scope.row)" >
            删除
          </el-button>
        </template>
      </el-table-column>     
       </el-table>  
  </div>
</template>

<script>
import { getList } from '@/api/weapon'


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
    editwpn(row){
      this.$router.push({ path: '/weapon/editweapon/index', query: { id: row.id }})
    },
    deletewpn(row){
      var vm=this;
     this.$axios.delete('https://localhost:44338/weapons?id='+row.id)
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
