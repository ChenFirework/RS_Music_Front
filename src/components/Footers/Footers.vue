<template>
  <div class="foot_container">
    <div class="footer">
    <div class="footer-infor">
      <div class="xd1">
        <h3>下载QQ音乐客户端</h3>
            <ul class="xd1_ul">
              <li><img class="xim" src="static/images/footer/windows.png" alt=""><p>PC版</p></li>
              <li><img class="xim" src="static/images/footer/mac.png" alt=""><p>Mac版</p></li>
              <li><img class="xim" src="static/images/footer/Android.png" alt=""><p>Android版</p></li>
              <li><img class="xim" src="static/images/footer/IPhone.png" alt=""><p>iPhone版</p></li>
            </ul>
            <div class="xdd1">
            <ul>
              <li>开发平台</li>
            </ul>
            <ul>
              <li class="xaa1">腾讯音乐人</li>
              <li>音乐号认证</li>
            </ul>
            </div>
            
      </div>
      <div class="xd2">
        <h3>特色产品</h3>
          <ul class="xuu1">
            <li><img class="xim" src="static/images/footer/1002.png" alt=""><p>全民K歌</p></li>
            <li><img class="xim" src="static/images/footer/hangye.png" alt=""><p>Super Sound</p></li>
            <li><img class="xim" src="static/images/footer/logo-ionitron.png" alt=""><p>QPlay</p></li>
          </ul>
          <ul class="xu1">
            <li>车载互联</li>
            <li>QQ演出</li>
          </ul>
          <div class="xdd2">
            TME集团官网
         </div>
         <div class="xdd3">
            腾讯音乐
         </div>
      </div>
      <div class="xd3">
        <h3>合作链接</h3>
        <ul>
          <li class="C1">CJ ENMFM</li>
          <li class="C1">腾讯视频</li>
          <li class="C1">手机QQ空间</li>
          <li class="C1">最新版QQ</li>
          <li class="C1">腾讯社交广告</li>
          <li class="C1">电脑管家</li>
          <li class="C1">QQ浏览器</li>
          <li class="C1">腾讯微云</li>
          <li class="C1">腾讯云企鹅</li>
          <li class="C1">智能电视网</li>
          <li class="C1">当贝市场</li>
          <li class="C1">开放平台</li>
        </ul>
      </div>
    </div>
    <div class="footer_end">
      <p>关于腾讯 | About Tencent | 服务条款 | 用户服务协议 | 隐私政策 | 权利声明 | 广告服务 | 腾讯招聘 | 客服中心 | 网站导航</p>
      <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
      <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>
    </div>
  </div>
  </div>
  
</template>
<script>
export default{
  data() {
    return {
      
    }
  },methods: {
    
  },
}
</script>
<style scoped>
 .footer{
  height: 580px;
  width: 100%;
  bottom: 0;
  left: 0;
  position: relative;
  color: #999;
  background-color:#333; 
  clear: both;
  font-size: 14px;
  
}
ul{
   list-style:none;
}
.footer-infor{
  height: 430px;
  width: 95%;
  margin:0 auto 100px;
  position: relative;
  overflow: hidden;
  padding-top: 0;
  box-shadow:0 1px 1px -1px rgb(68, 65, 65);
}
.xd1{
  height: 430px;
  width: 30%;
  float: left;
}
 .xd2 {
  height: 430px;
  width: 30%;
  float: left;
}
.xd3{
  height: 430px;
  width: 35%;
  float: left;
}
 .xd1_ul{
   width:350px;height:100px;
   margin-top:10px;
	 padding:10px 0;
   text-align: center;
 }
 .xuu1{
   width:350px;height:100px;
   margin-top:10px;
	 padding:10px 0;
   text-align: center;
 }
 .xd3 ul{
   width:350px;height:100px;
   margin-top:28px;
	 padding:10px 0;
   text-align: center;
   list-style:none;
 }
 .xd1 ul li{
   width:85px;height:60px;
	 float:left;
   padding-top:10px;
 }
 .xd2 ul li{
   width:85px;height:60px;
	 float:left;
   padding-top:10px;
 }
 p{
  text-align:center;
	font-size:14px;
 }
 h3{
    font-size: 15px;
    font-weight: 400;
    padding: 80px 0 46px;
    margin-left: 30px;
 }
 .xim{
   height: 32px;
   width: 32px;
 }
 .C1{
    float: left;
    min-width: 100px;
    padding-top: -20px;
    margin-bottom: 12px;
    list-style:none;
 }
 .xdd1{
  height: 100px;
  width: 400px;
  float: left;
 }
 .xdd1 ul{
   height: 20px;
   width: 400px;
   float: left;
 }
 .xaa1{
   padding-left: 7px;
   margin-left: -17px;
 }
 .xu1{
   height: 50px;
   margin-top:-22px;
   margin-left: -20px;
 }
 .xdd2{
  margin-top: -4px;
  height: 30px;
  width: 400px;
  float: left; 
  margin-left: 18px;
 }
 .xdd3{
   margin-left: 18px;
   float: left;
 }
 .footer_end{
   width: 800px;
   height: 100px;
   margin-top: -70px;
   margin: -60px auto;
 }
 .footer_end p{
   font-size: 8px;
 }
</style>