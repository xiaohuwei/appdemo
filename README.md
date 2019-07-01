# 基于Vue的AppDemo

![](<https://img.shields.io/badge/author-xiaohuwei-red.svg?style=for-the-badge&logo=appveyor>)

[![AppVeyor](https://img.shields.io/appveyor/ci/doyoe/css-handbook.svg)](https://ci.appveyor.com/project/doyoe/css-handbook) [![AppVeyor](https://img.shields.io/static/v1.svg?label=lisense&message=Apache-2.0&color=success&?style=flat&logo=appveyor)](https://xiaohuwei.cn)  [![AppVeyor](https://img.shields.io/static/v1.svg?label=link&message=996.icu&color=orange)](https://996.icu/#/zh_CN)

> 一个基于VUE的app项目

## 运行

``` bash
npm i
npm i  axios --sava
npm i vant -S
npm run dev
```

## 首页

![](https://i.loli.net/2019/06/26/5d12ce9f812fd66247.png)

## 文章详情页

![](https://i.loli.net/2019/06/26/5d12cedb0ce5e14897.png)

## 电影

![](https://i.loli.net/2019/07/01/5d1971664e59b62963.png)

## 个人中心

![](https://i.loli.net/2019/06/26/5d12cf040599273197.png)

## 购票demo

![](https://i.loli.net/2019/06/26/5d12cf280956c72343.png)

##  功能

- 使用vant框架进行下拉刷新  每次刷新随机获取今日头条新闻  首页实现无限懒加载
- 电影栏目增加动态真实评分
- Tabbar 是用手写的 利用了父子组件的互相传值到达高亮效果
- 文章详情使用Vant框架的选项卡功能
- 首页到文章详情页使用了二级路由传参
- 大麦网数据下的三个分类是三个子路由
- 测试地址：https://xiaohuwei.github.io/appdemo/dist/

