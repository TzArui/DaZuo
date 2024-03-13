/*
 * @Author: Arui 3236948368@qq.com
 * @Date: 2023-12-03 09:38:10
 * @LastEditors: Arui 3236948368@qq.com
 * @LastEditTime: 2023-12-04 18:56:58
 * @FilePath: \wodeshixunxiangmu\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//import './assets/main.css'

import { createApp } from 'vue'
import { Lazyload } from 'vant';
import App from './App.vue'
import router from './router'

// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// Dialog
import { showDialog } from 'vant';
import 'vant/es/dialog/style';

// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

// ImagePreview
import { showImagePreview } from 'vant';
import 'vant/es/image-preview/style';


const app = createApp(App)

app.use(Lazyload);
app.use(router)

app.mount('#app') 
