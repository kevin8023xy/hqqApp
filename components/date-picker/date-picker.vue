<template>
    <view class="date-picker-box-item">
        <scroll-view scroll-x="true">
            <view
                class="box"
                v-for="item in randomList"
                :key="item._id"
                @click="goPreview(item)"
                :style="
                    item.active
                        ? { background: 'linear-gradient(to right, transparent 0%, #fff 400rpx), linear-gradient(to top, #00bbef 20%, #00d7ea)' }
                        : { background: 'transparent' }
                "
            >
                <view class="date-box wh100 flex align-center">
                    <text>{{ item.week }}</text>
                    <text>{{ item.date }}</text>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
const randomList = ref([
    {
        _id: 1,
        week: '周五',
        date: '11/15',
        active: true
    },
    {
        _id: 2,
        week: '周五',
        date: '11/15',
        active: false
    },
    {
        _id: 3,
        week: '周五',
        date: '11/15',
        active: false
    },
    {
        _id: 4,
        week: '周五',
        date: '11/15',
        active: false
    },
    {
        _id: 5,
        week: '周五',
        date: '11/15',
        active: false
    },
    {
        _id: 6,
        week: '周五',
        date: '11/15',
        active: false
    },
    {
        _id: 7,
        week: '周五',
        date: '11/15',
        active: false
    }
]);

const goPreview = (item) => {
	 randomList.value.forEach(randomItem=>{
		 randomItem.active = false
		 if(randomItem._id === item._id) {
			 randomItem.active = true
		 }
	 })
};
</script>

<style lang="scss" scoped>
@import url('@/common/style/common-style.scss');
.date-picker-box-item {
    width: 100%;
    height: 100%;
    scroll-view {
        white-space: nowrap;
        height: 100%;
        .box {
            width: 100rpx;
            height: 100%;
            display: inline-block;
            margin-right: 15rpx;
            background-color: #ffff7f;
            border-radius: 15rpx;
            image {
                width: 100%;
                height: 100%;
                border-radius: 12rpx;
            }
            .date-box {
                flex-direction: column;
                justify-content: space-around;
            }
			text {
				color: $text-font-color-5;
			}
        }
        .box:last-child {
            margin-right: 30rpx;
        }
    }
}
</style>
