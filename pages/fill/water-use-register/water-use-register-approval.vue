<template>
    <view class="water-use-register-approval wh100">
        <view class="register-form">
            <uni-forms ref="baseForm" :modelValue="registerData.param">
                <view class="wh100 flex" style="padding-top: 30rpx;">
                    <view style="width: 70%; padding: 0 5rpx">
                        <uni-forms-item label="登记日期">
                            <uni-datetime-picker v-model="registerData.param.dateRange" type="daterange" @maskClick="maskClick" />
                        </uni-forms-item>
                    </view>
                    <view style="width: 30%; padding: 0 5rpx">
                        <button class="search-button flex justify-center align-center">查询</button>
                    </view>
                </view>
            </uni-forms>
        </view>
        <uni-table ref="table" :loading="tableLoading" border stripe emptyText="暂无更多数据" style="width: 100%; height: 100%; overflow: auto">
            <uni-tr>
                <uni-th width="150" align="center">监测站点</uni-th>
                <uni-th width="150" align="center">流量(m³/s)</uni-th>
                <uni-th align="center">监测时间</uni-th>
            </uni-tr>
            <uni-tr v-for="(item, index) in registerData.tableData" :key="index">
                <uni-td>{{ item.point }}</uni-td>
                <uni-td>
                    <view class="name">{{ item.waterFlow }}</view>
                </uni-td>
                <uni-td align="center">{{ item.time }}</uni-td>
            </uni-tr>
        </uni-table>
    </view>
</template>

<script setup>
import { ref } from 'vue';
const tableLoading = false;
const registerData = ref({
    param: {
        dateRange: []
    },
    tableData: [
        {
            point: '监测点1',
            waterFlow: 0.52,
            time: '2024-11-19 15:00'
        },
        {
            point: '监测点2',
            waterFlow: 0.52,
            time: '2024-11-19 15:00'
        },
        {
            point: '监测点3',
            waterFlow: 0.52,
            time: '2024-11-19 15:00'
        },
        {
            point: '监测点4',
            waterFlow: 0.52,
            time: '2024-11-19 15:00'
        },
        {
            point: '监测点5',
            waterFlow: 0.52,
            time: '2024-11-19 15:00'
        }
    ]
});
</script>

<style lang="scss" scoped>
@import url('../../../common/style/common-style.scss');

.water-use-register-approval {
    width: 100%;
	
	.search-button {
	    height: 70rpx;
	    background: $button-color-1;
	    width: 80%;
	    color: #fff;
	    font-size: 28rpx;
	    :deep() {
	        uni-button {
	            height: 60rpx;
	        }
	    }
	}
}
</style>
