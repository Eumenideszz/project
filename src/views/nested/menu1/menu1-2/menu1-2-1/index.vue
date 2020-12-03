<template>
  <div class="head-img">
     <input type="file"  id="upload" style="display:none;" accept="image/gif,image/jpeg,image/png,image/jpg" @change="freshImg"/>
     <div class="border"  @click="uploadIMg">{{headTip}}<img :src="imgsrc" class="imgDiv"></div>
      
</template>

<script>
export default {
  name: 'uploadImg',
  data () {
    return {
      imgsrc:require('../../../../../assets/biaoqingbao_images/dog.jpg'),         //用户没有上传图片的默认头像
       headTip: "点击上传头像", 
    }
  },
 
  
  methods: {

    　uploadIMg:function(){
      document.getElementById('upload').click();
  　},        
　　freshImg:function(e){
      let _this = this;
      _this.imgObj = e.target.files['0'];               //得到上传的第一个文件
      let fr = new FileReader();                        //异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
      fr.onload=function(){                             //在读取操作完成时触发
        _this.imgsrc = fr.result;                       // 图片文件赋值给图片标签路径
      }
      fr.readAsDataURL(_this.imgObj);                   //将读取到的文件编码成Data URL
      _this.headTip='';                                 // 清空我的提示
    }
   
  }
}

</script>
<style>
.head-img {
    text-align: center;
    margin-bottom: 0.2rem;
}
    .border {
      display: inline-block;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 1px solid #c3c3c3;
      overflow: hidden;
      line-height: 5rem;
      text-align: center;
        position: relative;
    }
      .imgDiv {
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        border-radius:50%;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        z-index: -1;
      }
    
  
</style>