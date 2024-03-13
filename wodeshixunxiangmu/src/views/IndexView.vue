<!--
 * @Author: Arui 3236948368@qq.com
 * @Date: 2023-12-03 09:38:10
 * @LastEditors: Arui 3236948368@qq.com
 * @LastEditTime: 2023-12-09 14:57:09
 * @FilePath: \student\wodeshixunxiangmu\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
// import { imagePreviewProps } from "vant";
import { ref } from "vue";
// 声明一个响应式变量 value 初始值是""
const value = ref("");
//声明一个变量 用来存放grid的数据
const gridDate = [  {
    id:"1.1",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/hotel.fc17d0f7726132bf2459621923704f0f.png",
    name:"酒店",
    color:"-webkit-gradient(linear,left top,left bottom,from(#fa5956),to(#fb8650))",
    url:"https://m.ctrip.com/webapp/hotel/?secondwakeup=true&dpclickjump=true&allianceid=5376&sid=353699&sourceid=55551829&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"1.2",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/flight.2af1e1835a10709db9ad91702e30de35.png",
    name:"机票",
    color:"-webkit-gradient(linear,left top,left bottom,from(#3c8cfa),to(#50b2fa))",
    url:"https://m.ctrip.com/html5/flight/swift/index?secondwakeup=true&dpclickjump=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"1.3",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/train_ticket.62fc76e6f4ffac3d2e4610c807f535bb.png",
    name:"火车票",
    color:"-webkit-gradient(linear,left top,left bottom,from(#4778F6),to(#4398F8))",
    url:"https://m.ctrip.com/webapp/train/?from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"1.4",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/vacation.50ea6db60ea69086791ea507b62364bb.png",
    name:"旅游",
    color:"-webkit-gradient(linear,left top,left bottom,from(#00BBB0),to(#00D0AF))",
    url:"https://m.ctrip.com/tangram/vacations?ctm_ref=vactang_page_3049&isHideNavBar=YES&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"1.5",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/gs.24c525633ba91ad0a2c41ff96773262b.png",
    name:"攻略",
    color:"-webkit-gradient(linear,left top,left bottom,from(#FF8639),to(#FFA047))",
    url:"https://m.ctrip.com/webapp/you/gsdestination/place/2.html?seo=0&ishideheader=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  // 第二排
  {
    id:"2.1",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/hotel_inn.cbccfdc8449dea7bf83171dfa7ea6f81.png",
    name:"民宿",
    color:"#FFF4EF",
    url:"https://accounts.ctrip.com/H5Login/Index?from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Finn-v2%2Fhome%3Fsecondwakeup%3Dtrue%26dpclickjump%3Dtrue%26from%3Dhttps%253A%252F%252Fm.ctrip.com%252Fhtml5%252F&backurl=https%3A%2F%2Fm.ctrip.com%2F"
  },
  {
    id:"2.2",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/flight_package.7485a98b650ea13917e3cdd36f3eda67.png",
    name:"机+酒",
    color:"#EAF8FF",
    url:"https://m.ctrip.com/webapp/cw/flight/flight-bundles/HomePage.html?from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"2.3",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/bus_ticket.19d2e8eb864288544912b3c1005c9a8e.png",
    name:"汽车",
    color:"#EFF3FE",
    url:""
  },
  {
    id:"2.4",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/ticket.e872065047ec929016de33d36e578e49.png",
    name:"门票",
    color:"#E5FBF8",
    url:"https://m.ctrip.com/tangram/ticket?ctm_ref=vactang_page_8349&isHideNavBar=YES&coords=1&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"2.5",
    img:"https://bd-s.tripcdn.cn/modules/basebiz/h5home/food.bd1b63c6ba0a16ebc583b4e45b9ac41a.png",
    name:"美食",
    color:"#FFF8F1",
    url:"https://m.ctrip.com/webapp/gourmet/food/homeList/address.html?new=1&isHideNavBar=YES&ishideheader=true&seo=0&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"3.1",
    img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/hotel_sale.b786856e3d02deb5b860b06ac07bee42.png",
    name:"特价/爆款",
    color:"#FFF4EF",
    url:"https://m.ctrip.com/webapp/cw/gs/onsale/boomHome.html?sct=h5-ggrk&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"3.2",
    img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/airport_transfer.fb8d923aefb7393a3485ebcde0888932.png",
    name:"接送机/包车",
    color:"#EAF8FF",
    url:"https://m.ctrip.com/webapp/zhuanche/airport-transfers/index?s=car_back&channelid=90189&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"3.3",
    img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/car.d343444e248183e0c2ce61894012a327.png",
    name:"租车",
    color:"#EFF3FE",
    url:"https://m.ctrip.com/webapp/cw/car/isd/Home.html?apptype=ISD_C_CW_MAIN&channelid=235812"
  },
  {
    id:"3.4",
    img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/weekend.b327d041f73dd403971831a874eb25e9.png",
    name:"旅游周边游",
    color:"#E5FBF8",
    url:"https://m.ctrip.com/tangram/travel-around?ctm_ref=vactang_page_6089&isHideNavBar=YES&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
  {
    id:"3.5",
    img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/shop.dba5be1f7b683690ea1d53bdd9ecef8f.png",
    name:"购物/免税",
    color:"#FFF8F1",
    url:"https://m.ctrip.com/webapp/gshop/home/index?ishidenavbar=yes&bid=2&cid=3&pid=1&ctm_ref=M_ps_2home_gg_gwhome&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F"
  },
];
const grid2Date = [
{
id:"1.1",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/hpgs_guide.c4c7aa66032ef995136fb5d92a1cc9da.png",
name:"向导/包车",
color:"white",
url:"https://m.ctrip.com/tangram/localguide?ctm_ref=vactang_page_6093&isHideNavBar=YES&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"1.2",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/insurance.ec149a1dec5e6803f2b88290c99fa56c.png",
name:"保险",
color:"white",
url:"https://m.ctrip.com/webapp/vacations/insurance/index?from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"1.3",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/vtm.4b7ff6bddd0b21f3e92d1fa1ec41a0dc.png",
name:"微领队",
color:"white",
url:"https://accounts.ctrip.com/h5Login/login_dynamicpwd?sibling=T",
},
{
id:"1.4",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/oneday.4fac0806c732ddc0e37d56969f92d2f3.png",
name:"一日游",
color:"white",
url:"https://m.ctrip.com/tangram/daytour?ctm_ref=vactang_page_8350&isHideNavBar=YES&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"1.5",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/custom.56a6b6db26e37f09ebc593c1ac6d13c1.png",
name:"定制游",
color:"white",
url:"https://m.ctrip.com/webapp/vacations/dingzhi/index?ctm_ref=C_vac_custom&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"2.1",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/cruise.e66cd5e4d0759b090142a5f84c9d7896.png",
name:"游轮",
color:"white",
url:"https://m.ctrip.com/tangram/NjQwMw==?ctm_ref=vactang_page_6403&isHideNavBar=YES&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"2.2",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/exchange.17e163edbb0d53ee73743092dac0bba9.png",
name:"外币兑换",
color:"white",
url:"https://accounts.ctrip.com/H5Login/Index?from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Ffsh5%2Findex%3F1%3D1%26bid%3D1%26isHideNavBar%3DYES%26secondwakeup%3Dtrue&backurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Ffsh5%2Findex%3F1%3D1%26bid%3D1%26isHideNavBar%3DYES%26secondwakeup%3Dtrue",
},
{
id:"2.3",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/visa.5f08517e1f62034f2abd06ca47d70559.png",
name:"签证",
color:"white",
url:"https://m.ctrip.com/tangram/visa?ctm_ref=vactang_page_4980&isHideNavBar=YES&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"2.4",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/wifi.ac1863182c3866811836d375eb4d20e5.png",
name:"wifi电话卡",
color:"white",
url:"https://m.ctrip.com/webapp/tnt/list?pagetype=city&id=2&name=%E4%B8%8A%E6%B5%B7&pshowcode=Communicationequipment&citytype=dt&keyword=wifi&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"2.5",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/bag.db4b65ec074dc6f0982f713bf5666e9f.png",
name:"行李寄送",
color:"white",
url:"https://m.ctrip.com/webapp/cloudbag?isHideNavBar=YES&channel=117&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&ouid=ctag.hash.a031913270a6&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"3.1",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/lvpai.09b76db1c3e096b532ba90325c9dd0b9.png",
name:"旅游·跟拍",
color:"white",
url:"https://m.ctrip.com/tangram/ODMzMg==?ctm_ref=vactang_page_8332&isHideNavBar=YES&popup=1&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"3.2",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/flight_schedule.cef3ed6d45a8723efb4a95ec7d5312aa.png",
name:"航班助手",
color:"white",
url:"https://m.ctrip.com/webapp/flight/schedule/detail.html?origin=302&isHideNavBar=YES&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"3.3",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/cost.1373427f7b26bd92ef1d413dbacdc096.png",
name:"拿去花",
color:"white",
url:"https://jr.ctrip.com/m/nano/page/ctrip/index?cfpos=8&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F&isExist=yes&isHideNavBar=YES&mktype=home_more&navBarStyle=white&secondwakeup=true",
},
{
id:"3.4",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/gift_card.8c7a17e90acc08bfa2bc5be10f9d4b5b.png",
name:"礼品卡",
color:"white",
url:"https://m.ctrip.com/webapp/lipin/money?secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&ouid=ctag.hash.a031913270a6&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"3.5",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/credit_card.eea3d6c0fb749362a6418cdbd24888f7.png",
name:"信用卡",
color:"white",
url:"https://accounts.ctrip.com/H5Login/Index?from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fccard%2Flist%3Fbid%3D8%26cid%3D1%26pid%3D3%26popup%3Dclose%26secondwakeup%3Dtrue%26from%3Dhttps%253A%252F%252Fm.ctrip.com%252Fhtml5%252F&backurl=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fccard%2Flist%3Fbid%3D8%26cid%3D1%26pid%3D3%26popup%3Dclose%26secondwakeup%3Dtrue%26from%3Dhttps%253A%252F%252Fm.ctrip.com%252Fhtml5%252F",
},
{
id:"4.1",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/member.c5624f964f3892da2c01d996e5233007.png",
name:"会员/签到",
color:"white",
url:"https://accounts.ctrip.com/H5Login/Index?from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Fvipwelfare%2FRightsInterest%2FIndex%3Frightpage%3D30%26secondwakeup%3Dtrue%26from%3Dhttps%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"4.2",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/supermember.fb6d01eb5298141f0bc572cd94154df1.png",
name:"超值旅行家",
color:"white",
url:"https://contents.ctrip.com/buildingblocksweb/special/membershipcard/index.html?sceneid=1&productid=14912&ishidenavbar=yes&pushcode=act_svip_hm28&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"4.3",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/rewards.c1302d78d8094c78a9768aa6b578dddb.png",
name:"会员商城",
color:"white",
url:"https://m.ctrip.com/webapp/cshop?bid=2&cid=3&pid=23&ctm=M_ps_2home_gg_oshome&secondwakeup=true&dpclickjump=true&allianceid=66672&sid=1693366&ouid=ctag.hash.a031913270a6&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"4.4",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/xiaoshiji.1c6588a11feef97907e952edcc4e5480.png",
name:"携程小诗机",
color:"white",
url:"https://pages.c-ctrip.com/ailee/poetry/index.html?time=20180614&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F#/home",
},
{
id:"4.5",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/sos.20c13da52f8ff660f5b6807a799b03b3.png",
name:"紧急支援",
color:"white",
url:"https://m.ctrip.com/webapp/vacations/vtmportal/sos?secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"5.1",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/cooperation.1f11ba99b09bfc288449ac23e253671a.png",
name:"加盟合作",
color:"white",
url:"https://m.ctrip.com/webapp/cooperation/?secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"5.2",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/mice.87b43913b744f893b4f9493986046f8f.png",
name:"会展旅游",
color:"white",
url:"https://mice.ctrip.com/purposeh5?back=t&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"5.3",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/corpctrip.02c3555f8f7609e02373ac87ce71e016.png",
name:"企业差旅",
color:"white",
url:"https://ct.ctrip.com/webapp/corp-campaign/campaign/movements/ctripBusiness.html?ctm_ref=ctripBusiness&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
{
id:"5.4",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/trip.4fc7db341a13af5153b3a5ebaa965b72.png",
name:"trip.com",
color:"white",
url:"https://pages.trip.com/app/en-us.html",
},
{
id:"5.5",
img:"https://ws-s.tripcdn.cn/modules/basebiz/h5home/aria.9829d112261a461b876f0de6c348cb57.png",
name:"关怀版",
color:"white",
url:"https://aria.ctrip.com/html5/aging.html?autoawaken=close&popup=close&secondwakeup=true&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F",
},
]
const swipeData = [
{
text:"上海外滩璞硯酒店1晚",
image:"https://images4.c-ctrip.com/target/0205h120008m1dfqmD3EB_D_280_280_R5.jpg",
id:"1",
// tag:"酒店套餐",
price:"999"
},

{
id:"2",
image:"https://images4.c-ctrip.com/target/1mc0e12000ah67cjo01FF_D_280_280_R5.jpg",
text:"上海海昌奥特曼主题酒店1晚",
// tag:"酒店套餐",
price:"1499"
},

{
id:"3",
image:"https://images4.c-ctrip.com/target/02041120008x10qu3D551_D_280_280_R5.jpg",
text:"某某著名酒店1晚",
// tag:"酒店套餐",
price:"1299"
},

];
const grid3Date = [
  {
  id:"1",
  image1:"https://dimg04.c-ctrip.com/images/0106x120008ghpc63B032_R_238_268.jpg",
  text1:"正宗本帮菜",
  url:"https://m.ctrip.com/webapp/you/cranking/crankingCity/100900000562.html?ishideheader=true&isHideNavBar=YES&seo=0&skipAb=true&source_from_tag=uvsource_uccrank_100900000562_home_2nd",
  },
]
const grid4Date = [
  {
  id:"1",
  image2:"https://dimg04.c-ctrip.com/images/0102o12000a0gfvkdFBB5_R_238_268.jpg",
  text2:"周边奢华酒店榜",
  url:"https://m.ctrip.com/webapp/you/cranking/crankingCity/100200201308.html?ishideheader=true&isHideNavBar=YES&seo=0&skipAb=true&source_from_tag=uvsource_uccrank_100200201308_home_2nd",
  },
]
const grid5Date =[
  {
  id:"1",
  image3:"https://dimg04.c-ctrip.com/images/0zg5l12000c7cspfwFB92.jpg",
  url:"https://ct.ctrip.com/webapp/corp-campaign/campaign/movements/jpbj.html?ctm_ref=ctripbanner",
  },
]
// const grid6Date =[
//   {
//     id:"1",
//     image3:"",
//     text:"电话预定",
//     url:"",
//   },
// ]
// const grid7Date =[
//   {
//     id:"1",
//     image4:"",
//     text:"下载携程",
//     url:"",
//   },
// ]
const gridClick = (url) => {
console.log("🚀 ~ file: App.vue:131 ~ gridClick ~ url:", url);
  // 函数体
  // 控制台输出 event
window.location.href=url;

  // 还可以路由跳转
  // router
}
  // console.log('',gridClick);
  // 定义一个变量 控制轮播的高度
const height = ref(198);
const swipeChange =(index) => {
console.log("🚀 ~ file: App.vue:159 ~ swipeChange ~ index:", index);
if (index == 1){
  // 当index = = 1 轮播为第二页的时候 响应式变量赋值value
    for(let i =0;i < 186;i ++){
    setTimeout(()=>{
    height.value++},
    1*i)
    }
    }else{
    for(let i =0;i < 186;i ++){
        setTimeout(()=>{
        height.value--
        },1*i);
    }
    // 让轮播翻页的时候调整高度
    // 轮播第一页的高度是198px
    // 轮播第二页的高度是384px
}
}
</script>

<template>
  <div class="beiJin">
    <van-search
    v-model="value"
    shape="round"
    background="#ffffff"
    placeholder="搜索：目的地/酒店/景点/航班号"
    />
    <!-- {{ value }} -->
    <!-- 宫格 -->
    <!-- 宫格的轮播 -->
    <van-swipe  class="my-swipe"  indicator-color="#0086f6" @change="swipeChange">
      <van-swipe-item>
      <div class="gridMainDiv">
        <van-grid  :column-num="5" :border="false"> 
          <div class="gridDiv" @click="gridClick(item.url)" v-for="item in gridDate" 
            :key="item.id"
            :style="{backgroundColor:item.color,backgroundImage:item.color,}">
              <van-icon size="28" :name="item.img"/>
                <br>
              {{ item.name }}
          </div>
        </van-grid>
      </div>
      </van-swipe-item>
      <van-swipe-item :style="{height: height+'px'}">
      <van-grid  :column-num="5" :border="false"> 
      <div class="grid2Div" @click="gridClick(item.url)" v-for="item in grid2Date" 
        :key="item.id"
        :style="{backgroundColor:item.color,backgroundImage:item.color,}">
          <van-icon size="28" :name="item.img"/>
            <br>
            {{ item.name }}
      </div>
      </van-grid>
      </van-swipe-item>
    </van-swipe>
    <!-- <div class="main">  -->
    <div class="myCardMain">
    <van-row>
    <van-col span="12">
      <div class="myCard">
          <van-row>
            <van-col span="10">
              <van-image width="73" height="20" src="https://images4.c-ctrip.com/target/0zc71120008g0ha4z93C6.png"/>
            </van-col>
            <van-col span="14" style="text-align: right;">
              <van-tag color="#ffebe3" text-color="#ff4607">特价好货...</van-tag>
            </van-col>
          </van-row>
            <van-swipe class="my-swipe"  height="106" :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="item in swipeData">
              <!-- <img :src="item.image" alt=""/>  -->
                <div class="swipeItem">
                  <van-tag class="tag" round color="#333333CC">酒店套餐</van-tag>
                    <div class="product">{{ item.text }}</div>
                      <van-image
                      class="image"
                      lazy-load
                      :src="item.image"
                      fit="cover"
                      width="184"
                      height="84"
                      />
                </div>
                <div style="color: #ff6600;font-size: 12px;">
                    ￥<span  style="font-size: 16px; font-weight:bold;">{{ item.price }}</span>
                </div>
              </van-swipe-item>
            <!-- total是总数 active(0-2) -->
                <template #indicator="{ active, total }">
                  <div class="customIndicator">
                  <!-- {{ active }} -->
                  <div class="point" :class="{activeClass:active+1 == item}" v-for="item in total"></div>
                  <!-- <div class="point 0" :class="{activeClass:active == 0}"></div>
                  <div class="point 1" :class="{activeClass:active == 1}"></div>
                  <div class="point 2" :class="{activeClass:active == 2}"></div> -->
                  <!-- {{ active + 1 }}/{{ total }}  -->
                  </div>
                </template>
            </van-swipe>
      </div>
    </van-col>
    <van-col span="12">
    <!-- 右边 -->
    <div class="myCard">
    <van-row>
          <van-col span="10">
            <van-image width="73" height="20"
            src="https://images4.c-ctrip.com/target/0zc6g120008g0hcb587E5.png" />
          </van-col>
          <van-col span="14" style="text-align: right;">
            <van-tag color="#fdefd2" text-color="#ae6e15">权威排行榜</van-tag>
          </van-col>
    </van-row>
      <!-- 两个小卡片 -->
    <van-row>
    <van-col span="12">
    <div class="swipeItem2">
      <div class="grid3Div"  v-for="item in grid3Date" 
          :key="item.id">
            <van-tag class="tag1" text-color="#663c00">上海</van-tag>
              <van-image 
              class="image1"
              @click="gridClick(item.url)"
              fit="cover"
              :src="item.image1"/> 
              <div style="color: #333333;font-size: 4px;">
                <span style="font-size: 10px;">{{ item.text1 }}</span>
              </div>
    </div>
    </div>
    </van-col>
    <van-col span="12">
              <div class="swipeItem2">
              <div class="grid4Div"  v-for="item in grid4Date" 
              :key="item.id">
                <van-tag class="tag1" text-color="#663c00">上海</van-tag>
                <van-image 
                @click="gridClick(item.url)"
                class="image2"
                fit="cover"
                :src="item.image2"/> 
                <div style="color: #333333;font-size: 4px;">
                <span style="font-size: 10px;">{{ item.text2 }}</span>
                </div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>  
    </van-col>
    </van-row>
    </div>
    <div class="grid5Div" v-for="item in grid5Date" :key="item.id" >
    <van-image
    class="image3"
    :src="item.image3"
    @click="gridClick(item.url)"
    fit="cover"
    />
    </div>
    <div>
      <van-row>
        <van-col span="12">
          <div class="geShi">
            <van-button size="small" color="#333" plain type="default" >
              <van-icon  size="15" name="phone-o" />
              电话预定
            </van-button>
          </div>  
        </van-col>
        <van-col span="12">
          <div class="geShi">
            <van-button size="small" color="#333" plain type="default" >
              <van-icon size="15" name="down"/>
              下载携程
            </van-button>
          </div>
        </van-col>
      </van-row>
      <van-row>
        <van-col class="niCai1" span="12">网站地图</van-col>

        <van-col class="niCai2" span="12">电脑版</van-col>
      </van-row>
      <div class="niCai3">
        @2023携程旅行&nbsp;&nbsp;&nbsp;沪ICP备08023580
      <!-- <div class="qianDao">
      <van-image
      fit="cover"
      position="left"
      @click="gridClick(item.url)"
      src="https://bd-s.tripcdn.cn/modules/basebiz/h5home/hotel.fc17d0f7726132bf2459621923704f0f.png"
      />
      </div> -->
      </div>
    </div>
  </div>
  <div>
  <van-image class="ziYou"
  width="76px"
  src="https://ws-s.tripcdn.cn/NFES/html5/1700723965392/_next/serverStatic/img/signin-d.png"
  />
  </div>
</template>


<style scoped>
:deep(.van-search__content){
border:1px solid #0186f6;
}
.gridMainDiv{
  margin: 12px;
  /* border:1px solid #0186f6; */
  border-radius: 10px;
  overflow: hidden;
}
.gridDiv{
  width: calc(100% / 5);
  font-size: 12px;
  height: 58px;
  color: #333;
  text-align: center;
}
.grid2Div{
  width: calc(100% / 5);
  font-size: 12px;
  height: 58px;
  color: #333;
  text-align: center;
}
.grid3Div{
  /* border: 1px solid red; */
  position: relative;
  /* width: 58px; */
  font-size: 12px;
  /* height: 58px; */
  color: #333;
  /* text-align: center; */
  overflow: hidden;
}
.grid4Div{
  /* border: 1px solid red; */
  position: relative;
  /* width: 58px; */
  font-size: 12px;
  /* height: 58px; */
  color: #333;
  text-align: center;
  overflow: hidden;
}
.grid5Div{
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  margin:20px 5px 5px 5px;
}
.gridDiv:nth-child(-n+5) 
{
  color: white;
}

</style>

<style lang="less" scoped>
// .qianDao{
//   text-align: right;
//   border: 1px solid red;
//   // margin-right: 0px;
//   // height: 40vw;
// }
.beiJin{
  background-color: #f4f4f4;
}
.ziYou{
  position: absolute;
  bottom: 40px;
  right: 0;
}
.niCai1{
  text-align: right;
  color: #666;
  font-size: 12px;
  padding-right: 30px;
  margin:10px 0 15px 0;
  // margin-right: 1px;
}
.niCai2{
  text-align: left;
  color: #666;
  font-size: 12px;
  padding-left: 30px;
  margin:10px 0 15px 0;
  // margin-left: 1px;
}
.niCai3{
  text-align: center;
  color: #666;
  font-size: 10px;
  height: 100px;
  // border: 1px solid red;
}
.geShi {
  margin:10px 2px 2px 2px;
  text-align: center;
}
.style1{
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
}
.main{
  border:1px solid hotpink;
  height: 100%;
}.left,.right{
    border: 1px solid yellowgreen;
    height: 50%;
    width: calc(50%-5%);
}.left{
    float: left;
}.right{
    float: right;
}
// .类选择题：伪类选择器 #id选择器
.gridDiv:nth-child(n+1)
:nth-child(-n+5)
{
  color:white;
}
.my-swipe .van-swipe-item {
  // color: #fff;
  // font-size: 20px;
  // line-height: 150px;
  // text-align: center;
  // background-color: #39a9ed;
}
.swipeItem2{
.tag1{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  border-radius:6px 0 6px 0;
  background-image:linear-gradient(270deg,#f8e1bd 0%,#e2c089 100%);
  //上 右 下 左
}
.product1{
  font-size: 12px;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 2em;
  z-index: 100;
}
}
.swipeItem{
.tag{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  border-radius:6px 0 6px 0;
  //上 右 下 左
}
.product{
  font-size: 12px;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 2em;
  z-index: 100;
}
}
.image {
  border-radius: 6px;
  // border: 1px solid red;
  overflow:hidden;
}
.image1 {
  margin:2px 2px 2px 2px;
  border-radius: 10px;
  // border: 1px solid red;
  overflow:hidden;
}
.image2 {
  margin:2px 2px 2px 2px;
  border-radius: 10px;
  // border: 1px solid red;
  overflow:hidden;
}
.myCard{
  max-width: 254px;
  height: 35vw;
  width: 50% 50%;
  background-color: white;
  border-radius: 8px;
  // border: 1px solid red;
  padding:8px;
  margin-right:8px;
  // margin:0px 0px 0px 8px;
}
.myCardMain{
  // border: 1px solid skyblue;
  // padding: 0 8px; // padding-left = padding-right = 8px
  padding-left:8px;
  background-color:#f4f4f4;
}
.customIndicator {
  position: absolute;
  // border:1px solid skyblue;
  right: 5px;
  top: 0px;
.point {
  // border:1px solid greenyellow;
  display: inline-block;
  width:3px;
  height: 3px;
  background-color: #ffffff50;
  border-radius: 50%;
  margin-left:2px;
  margin-right:2px;
  line-height: 0;
}
.activeClass {
  width: 10.5px;
  border-radius:6px 6px 6px 6px;
  background-color: #fff;
} 
}
.slogan-hotsale {
  // height: 16px;
  // line-height: 16px;
  // border-radius: 2px;
  // font-size: 10px;
  // background: #ffebe3;
  // color: #ff4607;
  // padding: 1px 4px;
  // white-space: nowrap;
  // text-align: right;
}
</style>

<style>
:root{
--van-grid-item-text-color:#0186f6;
}</style>
