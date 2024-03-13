<!--
 * @Author: Arui 3236948368@qq.com
 * @Date: 2023-12-03 09:38:10
 * @LastEditors: Arui 3236948368@qq.com
 * @LastEditTime: 2023-12-09 18:23:04
 * @FilePath: \student\wodeshixunxiangmu\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 当active==0的时候展示首页 -->
  <Index v-if="active==0"/>
  <Community v-if="active==1"/>
  <Message v-if="active==2"/>
  <My v-if="active==3"/>
  <van-tabbar v-if="!active == 1"   v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">社区</van-tabbar-item>
    <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
{{ active }}
<!-- <van-button @click="toPage(1)"/> -->
<script setup>
import { ref } from 'vue';
// @ = src
import Index from "@/views/IndexView.vue"
import Community from "@/views/CommunityView.vue"
import My from "@/views/MyView.vue"
import Message from "@/views/MessageView.vue"
const active = ref(0);
// const toPage =(num) => {
//   console.log("🚀 ~ file: App.vue:33 ~ toPage ~ num:", num);
//   active.value=num-1
// }

</script>

<style lang="less">
</style>
<style>
:root{
  /* --van-tabbar-height:10px; */
}
</style>