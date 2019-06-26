import axios from 'axios';
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.prototype.toutiao = params => { //首页数据 //挂载到全局 就不用单个模板引用了 通过this.gethome()调用 可查看home组件
    return axios.get(`https://api.xiaohuwei.cn/toutiao/index.php?type=news_entertainment`, params) 
        .then(res => res.data.data) 
    };
Vue.prototype.heheda = can => { //首页数据 //挂载到全局 就不用单个模板引用了 通过this.gethome()调用 可查看home组件
        return axios.get(`https://api.xiaohuwei.cn/toutiao/detail/index.php`, {params:can}) 
            .then(res => res.data.data) 
        };
 Vue.prototype.gethome = params => { //首页数据 //挂载到全局 就不用单个模板引用了 通过this.gethome()调用 可查看home组件
    return axios.get(`http://api.xiaohuwei.cn/news.php?type=toutiao`, params) 
        .then(res => res.data) 
    };
Vue.prototype.news = can =>{
    return axios.get(`http://api.xiaohuwei.cn/memeda.php`, {params:can}) 
    .then(res => res.data) 
};
export const getdamai = url => { //大麦数据  单个页面通过import引用 可查看music组件
        return axios.get(url) 
            .then(res => res.data) 
        };    
export const today = () => { //历史上的今天
                return axios.get('https://api.xiaohuwei.cn/ls.php') 
                .then(res => res.data.resultBody.list) 
            };   
export const douban = (url,shu) => { //豆瓣数据
                return Vue.jsonp(url,{count:shu}).then(res=>
                res.subjects)
            };   
export const gonggao = () => { //公告
                return axios.get('https://api.xiaohuwei.cn/gg.php').then(res=>
                res.data[0])
            };  

            