<template>
	<div class='banner'>
		<div class='swiper-container' :class='swiperid'>
			<div class='swiper-wrapper'>
				<slot name='swiper-con'></slot>
			</div>
			<div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
			   
		</div>
	</div>
</template>

<script>
	import '../assets/libs/swiper/js/swiper.js'
	export default {
		props: {
			swiperid: {
				type: String,
				default: ''
			},
			paginationshow: {//是否显示分页
				type: Boolean,
				default: true
			},
			paginationdesition: {//分页器的对齐方式
				type: String,
				default: 'center'
			},
			paginationType: {//分页器的样式
				type: String,
				default: 'bullets'
			},
			autoplay: {//切换时间
				type: Number,
				default: 2000
			},
			loop: {//自动循环播放
				type: Boolean,
				default: true
			},
			direction: {//切换方向
				type: String,
				default: 'horizontal'
			},
			effect: {//切换效果
				type: String,
				default: 'slide'
			}
		},
		mounted: function(){
			var That = this;
			new Swiper('.'+That.swiperid, {
				direction: That.direction,
				loop: That.loop,
				pagination: '.swiper-pagination',
				paginationType: That.paginationType,
				autoplay: That.autoplay,
                effect:That.effect,
				paginationdesition:That.paginationdesition
			})
		}
	}
</script>

<style>
@import '../assets/libs/swiper/css/swiper.css';

.banner {width: 100%; height: 150px; overflow: hidden;}
.banner .swiper-container .swiper-slide img {width: 100%;height: 125px;}
.swiper-pagination-bullet-active {background: white;}

</style>