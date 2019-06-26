<template>
    <div class='listWrap'>
        <div class='left'>
<h4><slot name='title'></slot></h4>
<p><slot name='desc'></slot> </p>
<div class="sep"></div>

        </div>
    <img :src='url'>
    </div>
</template>
<script>
export default {
props:['url']
}
</script>
<style>
    .listWrap{
        padding: 20px;
        text-align: left;
        height: 80px;
        border-bottom: 1px #ccc solid;
        display: flex;
       align-content: center;
    }
    .listWrap img {
        width: 120px;
    }
    .listWrap .left{
        width: 100%;
        float: left;
    }
    .author{
        color:#ccc;
        font-size:12px;
    }
    .listWrap p{
        margin:5px 0;
        color:#999;
        font-size:14px;
    }
    .sep{
        background:#eee;
        width: 20px;
        height: 1px;
    }
</style>