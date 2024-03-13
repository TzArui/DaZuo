<!--
 * @Author: Arui 3236948368@qq.com
 * @Date: 2023-12-03 09:38:10
 * @LastEditors: Arui 3236948368@qq.com
 * @LastEditTime: 2023-12-09 21:33:03
 * @FilePath: \student\wodeshixunxiangmu\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
<div style="position:absolute;width:404px;height: 532.9px; background-image:-webkit-gradient(linear,left bottom,left top,from(#28aaaa00),to(rgb(224,236,248)));" >
    <!-- 顶部 -->
    <div>
    <!-- 返回上一页的按钮 -->
    <van-icon @click="onClickLeft" style="position: relative;top: 10px;left: 10px;" name="arrow-left" size="24" color="#656565"/>
    <!-- 头像 -->
    <van-icon style="position: absolute;top: 10px;right: 10px;" name="manager-o" color="black" size="20"/>
    </div>
    
    <!-- 我的介绍卡片 -->
    <div class="myCard">
    <van-row>
        <!-- 头像 -->
        <van-col span="5">
        <van-image
            round
            width="58.67"
            height="58.67"
            src="https://dimg04.c-ctrip.com/images/0AS1k120009l60yh36D69_C_100_100.jpg"
            style="padding-left: 20px;"
        />
        </van-col>
        <!-- 昵称、会员、社区等级 -->
        <van-col span="19">
        <!-- 会员昵称、图标、称号 -->
        <div style="padding-top:10px;">
            <span style="font-size: 24px;">尊敬的会员</span>
            <!-- 图标称号 -->
            <van-tag style="border-radius: 6px;background-color: rgb(224, 245, 255);" type="primary">
            <van-image
                round
                width="14"
                height="14"
                src="https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_grade_normal.png"
            />
            <span style="font-size: 12px;color:rgb(38, 156, 255);">普通会员</span>
            </van-tag>
        </div>
        <!-- 社区等级 -->
        <div>
            <van-tag style="border-radius: 6px 0 6px 0;background-color: rgb(232, 249, 220); color: rgb(62, 163, 50);">社区lv.1</van-tag>
        </div>
        </van-col>
    </van-row>
    <!-- 粉丝/关注/点赞 -->
    <div style="padding: 10px 0 10px 20px;font-size: 14px;color: #555;">
        粉丝0&nbsp;关注0&nbsp;获赞--
    </div>
    </div>
    <!-- 功能卡片1 -->
    <div class="myCard">
    <van-grid :column-num="4" :border="false">
        <div class="gridDiv" v-for="item in gridData1" :key="item.id">
        <!-- 图标 -->
        <van-icon size="36" :name="item.img" />
        <br>
        <!-- 文字 -->
        {{ item.name }}
        </div>
    </van-grid>
    </div>
    <!-- 功能卡片2 -->
    <div class="myCard">
    <van-grid :column-num="4" :border="false" style="padding: 15px 0 15px 0;" >
        <div class="gridDiv" style="height: 40px; font-size: 14px;" v-for="item in gridData2" :key="item.id">
        <!-- 数字 -->
        {{item.n}}
        <br>
        <!-- 文字 -->
        {{ item.name }}
        </div>
    </van-grid>
    </div>
    <!-- 功能卡片3 -->
    <div class="myCard" style="position: relative;">
    <!--上面-->
    <div style="position: absolute;left: 10px;top: 5px;width: 95%;">
        <span style="font-size: 14px;">我的钱包</span>&nbsp;
        <span style="font-size: 12px;">礼品卡·现金</span>
        <van-icon name="arrow" size="12" color="#656565" />
        <van-tag style="position: absolute; right: 0; border-radius: 6px;
        background-color: rgb(222, 230, 234);color: #555;" type="primary">去实名
        </van-tag>
    </div>
    <!-- 我的钱包宫格 -->
    <van-grid :column-num="4" :border="false" style="padding: 15px 0 15px 0;">
        <div class="gridDiv" style="height: 40px; font-size: 14px;" v-for="item in gridData3" :key="item.id">
        <!-- 数字 -->
        {{item.n}}
        <br>
        <!-- 文字 -->
        {{ item.name }}
        </div>
    </van-grid>
    </div>
    <!-- 功能卡片4 -->
    <div class="myCard" style="position: relative;">
    <div style="font-size: 14px;position: absolute;left: 10px;top: 5px;">我的工具</div>
    <van-grid :column-num="4" :border="false" style="padding: 15px 0 15px 0;">
        <div class="gridDiv" v-for="item in gridData4" :key="item.id">
        <!-- 图标 -->
        <van-icon size="36" :name="item.img" />
        <br>
        <!-- 文字 -->
        {{ item.name }}
        </div>
    </van-grid>
    </div>
</div>



</template>

<script setup>
const onClickLeft = () => {
    // history.back();
    window.location.reload();
};

const gridData1 = [
    {
    id:"11",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_order_all.png",
    name:"全部订单",
    
    },
    {
    id:"12",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_order_topay.png",
    name:"待付款",
    },
    {
    id:"13",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_order_unused.png",
    name:"未出行",
    },
    {
    id:"14",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_order_comment.png",
    name:"待点评",
    },
];

const gridData2 = [
{
    id:"11",
    name:"我的收藏",
    n:"0",
},
{
    id:"12",
    name:"浏览历史",
    n:"0",
},
{
    id:"13",
    name:"积分",
    n:"0",
},
{
    id:"14",
    name:"积分券",
    n:"0",
},
];

const gridData3 = [
{
    id:"11",
    name:"5.0%+",
    n:"财富赚钱",
},
{
    id:"12",
    name:"1026券",
    n:"拿去花",
},
{
    id:"13",
    name:"20万",
    n:"借钱",
},
{
    id:"14",
    name:"20万",
    n:"联名卡",
},
];

const gridData4 = [
    {
    id:"11",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_tool_information.png",
    name:"常用信息",
    
    },
    {
    id:"12",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_tool_travel.png",
    name:"旅行足迹",
    },
    {
    id:"13",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_tool_assistant.png",
    name:"航班助手",
    },
    {
    id:"14",
    img:"https://pic.c-ctrip.com/pic/platform/h5/myhome/v2/icon_tool_gifts.png",
    name:"我的奖品",
    },
];
</script>

<style lang="less" scoped>
.myCard{
border-radius: 8px;
margin:15px;
//border: 1px solid white;
background-color:#ffffff;
overflow: hidden;
}

.gridDiv{
width: calc(100% / 4);
font-size: 13px;
height: 66px;
/* 文字颜色 */
color: #333333;
/* 居中 */
text-align: center;
margin-top: 20px;
}

</style>

<style scoped>
</style>