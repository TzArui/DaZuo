<template>
  <div class="myBack">
      <br>
      <van-icon size="20" class="icon" name="arrow-left" @click="onClickLeft"/>
      <div class="message">消息</div>
      <div class="myCard">
          <van-row>
              <van-col span="6">
                  <van-image width="36" height="36" src="https://images4.c-ctrip.com/target/0zc07120008q3qqng006D.png"/>
                  <br>订单出行
              </van-col>
              <van-col span="6">
                  <van-image width="36" height="36" src="https://images4.c-ctrip.com/target/0zc5u120008q3qijiFF72.png"/>
                  <br>互动消息
              </van-col>
              <van-col span="6">
                  <van-image width="36" height="36" src="	https://images4.c-ctrip.com/target/0zc3l120008q3q9pf4719.png"/>
                  <br>账户通知
              </van-col>
              <van-col span="6">
                  <van-image width="36" height="36" src="https://dimg04.c-ctrip.com/images/0AS5y120009dnp0ewAB3D.png"/>
                  <br>会员服务
              </van-col>
          </van-row>
          <br>
          <div class="under">
              <van-row>
                  <van-col span="2">
                      <van-image style="top: 10px; left: 2px; " size="21" src="https://dimg04.c-ctrip.com/images/0AS6n120009dp1an46E6B.png"/>
                  </van-col>
                  <van-col span="22">
                      <div class="zzz">&nbsp;&nbsp;qq账号绑定成功通知</div>
                      <br>
                      <van-text-ellipsis style="font-size: 12px;left: 12px;  margin: 6px 2px 2px 2px;   color: #888;" content=" &nbsp; 您的携程账号已成功绑定qq账号，现在起可使用qq账号授权登录携程或享受相关权益和服务，如有疑问，请致电携程客服。" />
                  </van-col>
              </van-row>
          </div>
      </div>
      <br>
  </div>

  <van-swipe-cell>
      <van-row>
          <van-col span="2">
              <van-image style="left: 5px;  right: 4px; bottom: 4px; top: 5px; margin: 2px 2px 2px 2px;" width="36" height="36" src="https://images4.c-ctrip.com/target/0zc20120008yu8aioED4D_C_140_140_Q70.png?proc=autoorient"/>
          </van-col>
          <van-col span="22">
              <div class="ccc">消息号动态</div>
          </van-col>
      </van-row>
      <template #right>
          <van-button square type="danger" text="取消置顶" />
          <van-button square type="primary" text="删除" />
      </template>
  </van-swipe-cell>

  <div class="back">
      <br>
      没有更多内容了
  </div>

  <van-sticky :offset-bottom="50" position="bottom" class="sticky">
    <van-icon style="width: 40px;height: 40px;  background-color: #fff; border-radius: 50%; text-align: center;padding: 3px;"><van-icon name="manager-o" /><br><div class="ooo">客服</div></van-icon>
  </van-sticky>
</template>

<script setup>
const onClickLeft= () => {
  // history.back();
  window.location.reload();
};
</script>

<style lang="less" scoped>
.myBack{
  background-image: url(https://bd-s.tripcdn.cn/NFES/servicechatv3/1701842757522/_next/serverStatic/img/icon-msg-list-bg.png);
  background-size: 100%;
}
.icon{
  color: #333;
  size: 24px;
  display: inline-block;
  position: absolute;
  left: 15px;
}
.message{
  top: 0;
  font-size: 16px;
  text-align: center;
}
.myCard{
  background-color: #fff;
  border-radius: 8px; 
  padding: 8px;
  margin: 8px;
  margin-top: 20px;
  text-align: center;
}
.under{
  background-color: #F5F7FA;
  border-radius: 8px;
}
.zzz{
  left: 50px;
  color: #111;
  position: absolute;
  margin: 4px 2px 4px 2px;
}
.ccc{
  top: 2px;
  left: 55px;
  color: #111;
  position: absolute;
  font-size: 15px;
  font-weight:bold;
  margin: 1px 8px 2px 2px;

}

.back{
  background-color: #F8F8F8;
  height: 500px;
  text-align: center;
  color: grey;
}
.ooo{
  margin: 2px 2px 2px 2px;
  padding: 2px;
  font-size: 11px;
}
.sticky{
  border-color: #333;
  position: fixed;
  right: 0;
  bottom: 50px;
}
</style>