<!--
 * @Author: Arui 3236948368@qq.com
 * @Date: 2023-12-03 09:38:10
 * @LastEditors: Arui 3236948368@qq.com
 * @LastEditTime: 2023-12-10 10:23:49
 * @FilePath: \student\wodeshixunxiangmu\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 顶部 -->
    <!-- 返回上一页按钮 -->
    <van-nav-bar  left-arrow @click-left="onClickLeft">
      <template #left>
      <van-icon name="arrow-left" color="#656565" size="24"/>
      <span style="color:#222 font-size:14px font-weight:bold" @click="toMyPage">全球</span>&nbsp;<van-icon name="arrow-down" size="16" color="#656565" @click="toMyPage"/>
      <van-search
      v-model="value"
      shape="round"
      background="#ffffff"
      placeholder="目的地/景点/话题"
      />
      </template>
      <template #right>
        <van-image
        round
        width="23"
        height="23"
        src="https://pages.c-ctrip.com/you/lvpai-home-defaultavat.jpg" size="18" />
      </template>
    </van-nav-bar>
    <!-- 当前定位选择城市的一个跳转按钮 -->
    <!-- 搜索框 -->
    <!-- 头像  -->
    <!-- 分类 -->
    <!-- tab标签页 -->
    <van-tabs v-model:active="active" color="#2fcfbb" title-active-color="#222222" title-inactive-color="#222222">
      <van-tab v-for="item in tabDate" :key="item.id" :title="item.title">
      </van-tab>
    </van-tabs>
    <!-- 内容区 -->
    <div v-if="active==0" class="body">
      <div class="col" ref="col1">
        <div class="a">
          <div class="myCard" v-for="item in myCardDate" :key="item.id">
            <div class="geshi">
              <van-image    
              :src="item.img"/>
              <!-- 位置的信息 -->
              <div class="weizhiGeshi">
                <van-row>
                  <van-col span="4" style="padding-top: 3px; padding-left: 3px;">
                    <van-icon name="location"/>
                  </van-col>
                  <van-col span="20">
                    <van-text-ellipsis :content="item.address" rows="1" />
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="geshi1">
              <div class="title">   
                <van-text-ellipsis rows="2" :content="item.title" />
              </div>
              <van-row>
                <van-col span="16">
                  <van-row>
                    <van-col span="4">
                      <van-image
                        round
                        width="24"
                        :src="item.userPhote"
                      />
                    </van-col>
                    <van-col span="20">
                      <van-text-ellipsis rows="1" class="userNameClass"  :content="item.userName" />
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="8">
                  <van-row>
                    <van-col span="8">
                      <van-icon name="good-job-o" />
                    </van-col>  
                    <van-col class="numClass" span="16">
                      {{ item.num }}
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
      <div class="col" ref="col2">
          <div class="myCard" v-for="item in myCardDate2" :key="item.id">
            <div class="geshi">
              <van-image    
              :src="item.img"/>
              <!-- 位置的信息 -->
              <div class="weizhiGeshi">
                <van-row>
                  <van-col span="4" style="padding-top: 3px; padding-left: 3px;">
                    <van-icon name="location"/>
                  </van-col>
                  <van-col span="20">
                    <van-text-ellipsis :content="item.address" rows="1" />
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="geshi1">
              <div class="title">   
                <van-text-ellipsis rows="2" :content="item.title" />
              </div>
              <van-row>
                <van-col span="16">
                  <van-row>
                    <van-col span="4">
                      <van-image
                        round
                        width="24"
                        :src="item.userPhote"
                      />
                    </van-col>
                    <van-col span="20">
                      <van-text-ellipsis rows="1" class="userNameClass"  :content="item.userName" />
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="8">
                  <van-row>
                    <van-col span="8">
                      <van-icon name="good-job-o" />
                    </van-col>
                    <van-col class="numClass" span="16">
                      {{ item.num }}
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
      </div>
      </div>
    </div>

    <div v-if="active==1" class="body">
          <div class="myCard1" v-for="item in myCardDate3" :key="item.id">
            <div class="geshi">
              <van-image    
              :src="item.img"/>
              <!-- 位置的信息 -->
              <div class="weizhiGeshi">
                <van-row>
                  <van-col span="4" style="padding-top: 3px; padding-left: 3px;">
                    <van-icon name="location"/>
                  </van-col>
                  <van-col span="20">
                    <van-text-ellipsis :content="item.address" rows="1" />
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="geshi1">
              <div class="title">   
                <van-text-ellipsis rows="2" :content="item.title" />
              </div>
              <van-row>
                <van-col span="16">
                  <van-row>
                    <van-col span="4">
                      <van-image
                        round
                        width="24"
                        :src="item.userPhote"
                      />
                    </van-col>
                    <van-col span="20">
                      <van-text-ellipsis rows="1" class="userNameClass"  :content="item.userName" />
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="8">
                  <van-row>
                    <van-col span="8">
                      <van-icon name="good-job-o" />
                    </van-col>
                    <van-col class="numClass" span="16">
                      {{ item.num }}
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </div>
    </div>

    <div v-if="active==2" class="body">
          <div class="myCard1" v-for="item in myCardDate4" :key="item.id">
            <div class="geshi">
              <van-image    
              :src="item.img"/>
              <!-- 位置的信息 -->
              <div class="weizhiGeshi">
                <van-row>
                  <van-col span="4" style="padding-top: 3px; padding-left: 3px;">
                    <van-icon name="location"/>
                  </van-col>
                  <van-col span="20">
                    <van-text-ellipsis :content="item.address" rows="1" />
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="geshi1">
              <div class="title">   
                <van-text-ellipsis rows="2" :content="item.title" />
              </div>
              <van-row>
                <van-col span="16">
                  <van-row>
                    <van-col span="4">
                      <van-image
                        round
                        width="24"
                        :src="item.userPhote"
                      />
                    </van-col>
                    <van-col span="20">
                      <van-text-ellipsis rows="1" class="userNameClass"  :content="item.userName" />
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="8">
                  <van-row>
                    <van-col span="8">
                      <van-icon name="good-job-o" />
                    </van-col>
                    <van-col class="numClass" span="16">
                      {{ item.num }}
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </div>
    </div>
  
    <div v-if="active==3" class="body">
          <div class="myCard1" v-for="item in myCardDate5" :key="item.id">
            <div class="geshi">
              <van-image    
              :src="item.img"/>
              <!-- 位置的信息 -->
              <div class="weizhiGeshi">
                <van-row>
                  <van-col span="4" style="padding-top: 3px; padding-left: 3px;">
                    <van-icon name="location"/>
                  </van-col>
                  <van-col span="20">
                    <van-text-ellipsis :content="item.address" rows="1" />
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="geshi1">
              <div class="title">   
                <van-text-ellipsis rows="2" :content="item.title" />
              </div>
              <van-row>
                <van-col span="16">
                  <van-row>
                    <van-col span="4">
                      <van-image
                        round
                        width="24"
                        :src="item.userPhote"
                      />
                    </van-col>
                    <van-col span="20">
                      <van-text-ellipsis rows="1" class="userNameClass"  :content="item.userName" />
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="8">
                  <van-row>
                    <van-col span="8">
                      <van-icon name="good-job-o" />
                    </van-col>
                    <van-col class="numClass" span="16">
                      {{ item.num }}
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </div>
          </div>
    </div>
    
    <!-- 卡片：图片+定位+描述+发布者头像和昵称 点赞 点赞数 -->
    <!-- 发布送积分按钮 -->
    
    </div>
    <van-sticky :offset-bottom="50" position="bottom" class="sticky">
      <van-icon size="85" name="	https://pages.c-ctrip.com/you/livestream/lvpai_publish_new_btn.png" />
    </van-sticky>
</template>

<script setup>
import { ref } from 'vue';


const active = ref(0);

const tabDate = ref([
  { id:1,
    title:"发现",
  },
  { id:2,
    title:"徒步",
  },
  { id:3,
    title:"看海",
  },
  { id:4,
    title:"玩乐",
  },
  { id:5,
    title:"酒店",
  },
  { id:6,
    title:"美食",
  },
]);

const onClickLeft= () => {
  // history.back();
  window.location.reload();
};  
// const toMyPage = () => {
//   // 跳转到我的页面
//   // 通过改active的值来实现跳转
//   // 通过浏览器存储 session local 
//   // vuex 状态管理机
//   // vue-router
// }
const myCardDate = ref([
  {
    id:1,
    img:"https://dimg04.c-ctrip.com/images/1me0w12000cnyuoov7316_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"成都宽窄人民公园地铁站亚朵S酒店",
    title:"如果来成都，只有1天的时间，试试这条路线",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z82y12000a4z7jc259DE_C_180_180.jpg",
    userName:"孑然的风景",
    num:"81",
  },
  {
    id:2,
    img:"https://dimg04.c-ctrip.com/images/1me3v12000co9f68fE037_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"拱宸桥",
    title:"替大家看过了，这次银杏真的全黄了",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85212000cnf8ommCB1C_C_180_180.jpg",
    userName:"旅行走失的莹子",
    num:"379",
  },
  {
    id:3,
    img:"https://dimg04.c-ctrip.com/images/1me3n12000co76mt04CF7_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"三亚",
    title:"中国最适合过冬的城市",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85w12000c40udko5352_C_180_180.jpg",
    userName:"国内自驾旅游",
    num:"83",
  },
  {
    id:4,
    img:"https://dimg04.c-ctrip.com/images/1me1612000co1t3s9CB16_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"上海锦江饭店",
    title:"问一个私密问题🙋🏼‍♀️反正大家都不认识",
    userPhote:"https://dimg04.c-ctrip.com/images/1h653120008m4wksn78AB_C_180_180.jpg",
    userName:"橘色大丽花",
    num:"169",
  },
  {
    id:5,
    img:"https://dimg04.c-ctrip.com/images/1me0h12000co77hye5C9B_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"丽江古城",
    title:"云南旅行7天，总结的心得体会！！",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z84d120008qxgrss7298_C_180_180.jpg",
    userName:"方小芮",
    num:"500",
  },
]);

const myCardDate2 = ref([
  {
    id:6,
    img:"https://dimg04.c-ctrip.com/images/1me5j12000cotwccm3026_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"洱海",
    title:"云南这9个地方一生只带一人去，你会带谁？！！",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85812000coan7g4E480_C_180_180.jpg",
    userName:"咪岚小姐",
    num:"23",
  },
  {
    id:"7",
    img:"https://dimg04.c-ctrip.com/images/1me6t12000corbbpr5131_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"青云市",
    title:"贵阳果然是大城市。。。😭😭😭",
    userPhote:"https://dimg04.c-ctrip.com/images/Z80m1c000001dfm9hCECC_C_180_180.jpg",
    userName:"生菜小姐姐",
    num:"70",
  },
{
  id:"8",
  img:"https://dimg04.c-ctrip.com/images/1mm0c12000cp117275897_R_640_10000_Q90.jpg?proc=source/tripcommunity",
  address:"西安鼓楼",
  title:"这个冬天一起去西安吧！",
  userPhote:"https://dimg04.c-ctrip.com/images/1n70a12000cofspx38FD1_C_180_180.jpg",
  userName:"陕西天下行",
  num:"867",
},
{
  id:"9",
  img:"https://dimg04.c-ctrip.com/images/1me1e12000comdbyw97A9_R_640_10000_Q90.jpg?proc=source/tripcommunity",
  address:"丽姐火锅",
  title:"贵阳街边偶遇青团冰豆花！1r一碗好清爽！！",
  userPhote:"https://dimg04.c-ctrip.com/images/0Z864120008auhzmuC17D_C_180_180.jpg",
  userName:"麻薯叔叔",
  num:"122",
},
{
  id:"10",
  img:"https://dimg04.c-ctrip.com/images/1me2j12000cownicrDBA8_R_640_10000_Q90.jpg?proc=source/tripcommunity",
  address:"西安城墙",
  title:"贵阳街边偶遇青团冰豆花！1r一碗好清爽！！",
  userPhote:"https://dimg04.c-ctrip.com/images/0Z85212000ate9tdg5DE7_C_180_180.jpg",
  userName:"峰哥带你看美景",
  num:"16",
},
])

const myCardDate3 = ref([
{
    id:"11",
    img:"https://dimg04.c-ctrip.com/images/1me5q12000cofw83rEE86_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"丽姐火锅",
    title:"别问了！在贵阳！真的很好吃……",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85812000980a6c12C76_C_180_180.jpg",
    userName:"爱吃的小娜娜",
    num:"177",
  },

 {
    id:"12",
    img:"https://dimg04.c-ctrip.com/images/1me5c12000cnh28ckABCB_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"普陀山风景区",
    title:"人均880💰祈福普陀山|见山见海见自己✨在无法预料的未来里",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z81z12000co4d1n35F16_C_180_180.jpg",
    userName:"睡不醒的小姨",
    num:"125",
  },

 {
    id:"13",
    img:"https://dimg04.c-ctrip.com/images/1me6p12000coyqhv9C737_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"丽姐火锅",
    title:"成都 | 两天一夜狂炫版美食攻略‼️",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z81012000biexxfp3587_C_180_180.jpg",
    userName:"潜悠",
    num:"52",
  },

 {
    id:"14",
    img:"https://dimg04.c-ctrip.com/images/1me4j12000cmus3yr7249_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"大雁塔",
    title:"和男友住酒店之西安篇!!值哭了!!!",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z83f12000bzjlqy3BE83_C_180_180.jpg",
    userName:"是小栁新旅行者",
    num:"79",
  },

 {
    id:"15",
    img:"https://dimg04.c-ctrip.com/images/1me0y12000cir030zAD6C_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"南园宾馆一品包",
    title:"苏州十大传统小吃，别错过！",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z80z12000c19l0mp880E_C_180_180.jpg",
    userName:"宝藏小氷",
    num:"62",
  },
])

const myCardDate4 = ref([
{
    id:"16",
    img:"https://dimg04.c-ctrip.com/images/1me0k12000cnmjxygAE03_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"春丽冒烤鸭",
    title:"本地人真幸福！在成都…6天吃了4次😭真的便宜又好吃|||",
    userPhote:"https://dimg04.c-ctrip.com/images/1h63t12000cl18t98C2C9_C_180_180.jpg",
    userName:"椰子-爱分享",
    num:"58",
  },
  {
    id:"17",
    img:"https://dimg04.c-ctrip.com/images/01A4u12000agesrve9F92_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"厦门onlyone海岛民宿·ONLYONE望海咖啡",
    title:"在山顶咖啡店看海🌊厦门也太会搞浪漫了吧💙",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z83f1200091b4tvgCC27_C_180_180.jpg",
    userName:"大白和小黑",
    num:"145",
  },
  {
    id:"18",
    img:"https://dimg04.c-ctrip.com/images/01A1p12000agiqypz3B8B_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"黎竹·海南私房手艺菜(海棠68环球美食街店)",
    title:"本地人都推荐的餐厅|海南菜中的天花板🌹  来海南一定不能错过的餐厅❕ 正宗特色海南菜 错过🉑️就亏啦",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z82s120008ezlqx70D52_C_180_180.jpg",
    userName:"小山楂在海口",
    num:"234",
  },
  {
    id:"19",
    img:"https://dimg04.c-ctrip.com/images/1me2412000ap5dpu988E2_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"栈桥",
    title:"青岛海鸥告别季，时日不多的‘海鸥自由’",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z80f120009abeeu8FC44_C_180_180.jpg",
    userName:"啊biu和二甲",
    num:"223",
  },
  {
    id:"20",
    img:"https://dimg04.c-ctrip.com/images/1me2612000aqiuaxzB312_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"雷神竞界电竞酒店",
    title:"太棒了！！",
    userPhote:"https://dimg04.c-ctrip.com/images/1h66i12000aqcogr5608F_C_180_180.jpg",
    userName:"奔跑的大小孩",
    num:"253",
  },
])
  
const myCardDate5 = ref([
{
    id:"21",
    img:"https://dimg04.c-ctrip.com/images/1me6u12000ah0bkx3A6BA_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"平潭北港石頭会唱歌·云上海景民宿",
    title:"海边度假好去处的海景美宿",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z82k12000apflosa3E10_C_180_180.jpg",
    userName:"阿其体验酒店",
    num:"123",
  },
  {
    id:"22",
    img:"https://dimg04.c-ctrip.com/images/1me3m12000b14ptlm859F_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"龙窝子",
    title:"成都2h|🍃徒步传说中的背煤古道",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z80g12000apnnzcnE97A_C_180_180.jpg",
    userName:"路路瑶瑶",
    num:"224",
  },
  {
    id:"23",
    img:"https://dimg04.c-ctrip.com/images/1me6412000aug1td4BA17_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"深圳",
    title:"山水有些话！",
    userPhote:"https://dimg04.c-ctrip.com/images/Z80j0y000000mbee00EC5_C_180_180.jpg",
    userName:"今晚月亮很美",
    num:"22",
  },
  {
    id:"24",
    img:"https://dimg04.c-ctrip.com/images/1me3c12000avynwl8F24F_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"熊廷弼公园",
    title:"周末游武汉|熊廷弼公园+青龙山徒步！",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85n12000amu4hti5D42_C_180_180.jpg",
    userName:"小呀么小厉害呀",
    num:"24",
  },
])

</script>

<style lang="less" scoped>
// :deep(.van-tab){
//   color: red;
// }
.body{
  // border: 1px solid red;
  background-color: #f1f7fa;
  height:calc(100vh -46px -50px -50px);
  overflow:auto;
}
.body{
  // border: 1px solid red;
  display:inline-block;
  background-color: #f1f7fa;
  height:calc(100vh -46px -50px -50px);
  overflow:auto;
}
.myCard1{
  display: inline-block;
  width: ( 50% - 5px ); //占父元素宽度的一半
  // width: 50vw;     
  // 一半的另一形式 vw vh （view width)是相对单位
  // border:1px solid red ;
  // border-top-right-radius: 10px;
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
  // border-top-left-radius: 10px;
  // margin-right: 4px;
  background-color: #ffffff;
  margin-left: 10px;
  margin-top: 10px;
}




:deep(.van-tab--active){
  font-size: 21px;
  font-weight: 400;
}
.myCard{
  // display: inline-block;
  // width: ( 50% - 5px ); //占父元素宽度的一半
  // width: 50vw; 一半的另一形式 vw vh （view width)是相对单位
  // border:1px solid red ;
  // border-top-right-radius: 10px;
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
  // border-top-left-radius: 10px;
  // margin-right: 4px;
  background-color: #ffffff;
  margin-left: 10px;
  margin-top: 10px;
}
.sticky{
    position: fixed;
    left: 50%;
    margin-left: -42px;
    bottom:0;
}
.title{
  color: #222222;
  font-size: 14px;
  padding: 10px 8px 0px 0px;
  bottom: 0px;
}
.geshi1{
  padding-left: 10px;
}
.geshi{
  // width: 2px;
  // border: 1px solid skyblue;
  position:relative;
  // padding-left: 4px;
  .weizhiGeshi{
    position: absolute;
    width: 100px;
    color: white;
    font-size: 12px;
    background-color: #00000080;
    bottom: 10px;
    left: 0;
    z-index: 100;
    // padding: 0px 0px 0px 16px;
    border-radius:18px;
  }
}

.userNameClass,.numClass{
  font-size: 12px !important;
}
.userNameClass{
  color: #333333;
  padding: 4px 16px 0 4px;
  line-height: 18px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}
.numClass{
  color: #222222;
  padding: 4px 4px 0 4px;
}

</style>

<style scoped>
</style>

<style>
</style>

<script>
import { defineComponent, reactive, toRefs, onMounted, ref, nextTick } from "vue";
export default defineComponent({
  name: "waterfall",
  setup() {
    const col1 = ref(null);
    const col2 = ref(null);
    const state = reactive({
      mainMenuList: [
  {
    id:1,
    img:"https://dimg04.c-ctrip.com/images/1me0w12000cnyuoov7316_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"成都宽窄人民公园地铁站亚朵S酒店",
    title:"如果来成都，只有1天的时间，试试这条路线",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z82y12000a4z7jc259DE_C_180_180.jpg",
    userName:"孑然的风景",
    num:"81",
  },
  {
    id:2,
    img:"https://dimg04.c-ctrip.com/images/1me3v12000co9f68fE037_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"拱宸桥",
    title:"替大家看过了，这次银杏真的全黄了",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85212000cnf8ommCB1C_C_180_180.jpg",
    userName:"旅行走失的莹子",
    num:"379",
  },
  {
    id:3,
    img:"https://dimg04.c-ctrip.com/images/1me3n12000co76mt04CF7_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"三亚",
    title:"中国最适合过冬的城市",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85w12000c40udko5352_C_180_180.jpg",
    userName:"国内自驾旅游",
    num:"83",
  },
  {
    id:4,
    img:"https://dimg04.c-ctrip.com/images/1me1612000co1t3s9CB16_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"上海锦江饭店",
    title:"问一个私密问题🙋🏼‍♀️反正大家都不认识",
    userPhote:"https://dimg04.c-ctrip.com/images/1h653120008m4wksn78AB_C_180_180.jpg",
    userName:"橘色大丽花",
    num:"169",
  },
  {
    id:5,
    img:"https://dimg04.c-ctrip.com/images/1me0h12000co77hye5C9B_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"丽江古城",
    title:"云南旅行7天，总结的心得体会！！",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z84d120008qxgrss7298_C_180_180.jpg",
    userName:"方小芮",
    num:"500",
  },
  {
    id:6,
    img:"https://dimg04.c-ctrip.com/images/1me5j12000cotwccm3026_R_640_10000_Q90.jpg?proc=source/tripcommunity",
    address:"洱海",
    title:"云南这9个地方一生只带一人去，你会带谁？！！",
    userPhote:"https://dimg04.c-ctrip.com/images/0Z85812000coan7g4E480_C_180_180.jpg",
    userName:"咪岚小姐",
    num:"23",
  },
],
  dataList1: [],
  dataList2: []
});
  onMounted(() => {
  mountMenu();
  });
    const mountMenu = arg => {
      let temp = state.mainMenuList;
      let index = arg || 0;
      let refName = selectCol();
      if (temp.length > index) {
        state[refName].push(state.mainMenuList[index]);
        nextTick(() => {
          mountMenu(index + 1);
        });
      }
    };
    const selectCol = () => {
      let height1 = col1.value.offsetHeight;
      let height2 = col2.value.offsetHeight;
      switch (
        Math.min(height1, height2) // Math.min()方法返回参数中最小的值
      ) {
        case height1:
          return "dataList1";
        case height2:
          return "dataList2";
      }
    };
    return {
      ...toRefs(state),
      col1,
      col2
    };
  }
});

</script>
<style lang="less" scoped>
.box {
  width: 375px;
}
.col {
  float: left;
  width: 185px;
  border-radius:4px;
}
img {
  width: 100%;
  object-fit: contain;
}
.item {
  text-align: center;
  margin: 10px 0;
}
</style>

