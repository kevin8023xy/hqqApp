<template>
    <view class="navi-more w100">
        <index-navi-item v-for="item in naviTitleList" :item="item" :key="item.name"></index-navi-item>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import oneMapIcon from '../../common/images/oneMap.png';

const naviTitleList = ref([
    {
        name: '一张图',
        picurl: oneMapIcon
    },
    {
        name: '水位观测',
        picurl: oneMapIcon
    },
    {
        name: '用水申请',
        picurl: oneMapIcon
    },
    {
        name: '工程巡检',
        picurl: oneMapIcon
    },
    {
        name: '引水观测',
        picurl: oneMapIcon
    },
    {
        name: '引水结算',
        picurl: oneMapIcon
    },
    {
        name: '用水结算',
        picurl: oneMapIcon
    },
    {
        name: '维养申请',
        picurl: oneMapIcon
    },
    {
        name: '维养记录',
        picurl: oneMapIcon
    },
    {
        name: '立体监测',
        picurl: oneMapIcon
    },
    {
        name: '视频监控',
        picurl: oneMapIcon
    },
    {
        name: '通知发布',
        picurl: oneMapIcon
    }
]);
</script>

<style lang="scss" scoped>
@import url('@/common/style/common-style.scss');

.navi-more {
    // height:
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10rpx;
    padding: 30rpx 0;
    .item {
        height: 100%;
        width: 25%;
    }
}
</style>

<style>
	page {
		height: 100% !important;
	    background: #03406f;
	
	}
</style>
