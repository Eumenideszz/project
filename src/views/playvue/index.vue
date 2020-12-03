<template>
  <div class="app-container">
<el-upload
          :action="api.base+api.uploadotherpic"
          list-type="picture-card"
          :file-list="fileList"
          with-credentials
          :before-upload="beforeUpload"
          :on-remove="afterRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
</div>
</template>



<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
     beforeUpload(file) {
      var code = store.state.shop_code;
      let fd = new FormData();//通过form数据格式来传
      fd.append("picFile", file); //传文件
      fd.append("shop_code", code); //传其他参数
      var url = api.uploadotherpic;
      this.$http
        .post(url, fd)
        .then(res => {
          console.log(res.data);
          let data = res.data;
          if (data.code == 200) {
            this.$message({
              message: "上传成功",
              type: "success"
            });
 
            //再次请求数据，实现本地与服务器内容一致，解决图片删除失败的bug
            var code = store.state.shop_code;
            this.getImgs(code);//封装好的请求后台图片的axios请求
          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(error => {
          // console.log(error);
        });
    },
    }
  }
</script>