<template>
    <view class="naviItem">
        <view class="box" v-if="!isMore">
            <view class="pic-outer flex justify-center align-center">
                <image class="pic" :src="item.picurl" mode="aspectFill"></image>
            </view>
            <view class="mask">{{ item.name }}</view>
        </view>

        <view  class="box more" v-else @click="gotoNaviMore">
            <!-- <image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image> -->
            <view class="mask">
                <!-- <uni-icons type="more-filled" size="34" color="#fff"></uni-icons> -->
				<image src="../../common/images/more.png" mode="aspectFill" ></image>
            </view>
        </view>
    </view>
</template>

<script setup>
import { compareTimestamp } from '../../utils/common';
const props = defineProps({
    isMore: {
        type: Boolean,
        default: false
    },
    item: {
        type: Object,
        default() {
            return {
                name: '默认名称',
                picurl: '../../common/images/classify1.jpg',
                updateTime: Date.now() - 1000 * 60 * 60 * 5
            };
        }
    }
});
console.log('item----', props.item);

const gotoNaviMore = () => {
	uni.navigateTo({
	  url: '/pages/index/naviMore'
	});
}
</script>

<style lang="scss" scoped>
@import url('@/common/style/common-style.scss');

.naviItem {
    .box {
        height: 180rpx;
        border-radius: 10rpx;
        overflow: hidden; // 让子元素不溢出，这样父元素加圆角，子元素也是圆角
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .pic-outer {
            height: 100rpx;
            width: 100rpx;
            border-radius: 50%;
            background: #9e99fc;
            .pic {
                width: 50%;
                height: 50%;
            }
        }

        .mask {
            width: 100%;
            height: calc(100% - 100rpx);
            position: absolute;
            bottom: 0;
            left: 0;
            // background: rgba(0, 0, 0, 0.2);
            color: $text-font-color-5;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(20rpx);
            font-size: 26rpx;
			image {
				width: 82rpx;
				height: 82rpx;
			}
        }
        .tab {
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(250, 129, 90, 0.7);
            backdrop-filter: blur(20rpx);
            color: #fff;
            font-size: 22rpx;
            padding: 6rpx 14rpx;
            border-radius: 0 0 20rpx 0;
            transform: scale(0.8);
            transform-origin: left top;
        }
    }
    .box.more {
        .mask {
            width: 100%;
            height: 100%;
            flex-direction: column;
        }
        .text {
            font-size: 28rpx;
        }
    }
}
</style>
