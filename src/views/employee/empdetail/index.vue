<template>
  <div>
    <label>图片预览</label>
    <img v-if="imgBase64Value!==''" :src="imgBase64Value" />
    <br>
    <el-upload
      ref="upload"
      class="hideinput"
      list-type="picture-card"
      :auto-upload="false"
      :limit="1"
      accept="image/jpeg,image/png"
      action=""
      :on-change="uploadChange">
      <i class="el-icon-plus" />
    </el-upload>
   <el-button  size="mini" type="danger" @click="upload()" >
       删除
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'uploadImg',
  data () {
    return {
      imgBase64Value: '',
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
    uploadChange (file, fileList) {
      const imgFile = file.raw
      const reader = new FileReader()
      reader.readAsDataURL(imgFile)
      reader.onload = (res) => {
        this.imgBase64Value = res.target.result   
      }   
    },
    fatchDataById1(){
    this.$axios.get(`https://localhost:44338/employees/`+this.uid).then(res => {
    this.list = res.data.data
    console.log(this.list)
    })
   },
    upload(){
      this.$axios.put('https://localhost:44338/employees?id='+this.uid+'&name='+this.list.name+'&job='+this.list.job+'&lines='+this.list.lines+'&createtime='+this.list.createTime+'&imgBase64Value='+this.imgBase64Value)
      
       
      
      
    }
  }
}
</script>