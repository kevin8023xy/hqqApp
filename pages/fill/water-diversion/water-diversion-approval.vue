<template>
    <view class="water-diversion-approval wh100">
        <!-- 今日填报 -->
        <view class="today-fill-box">
            <uni-card title="今日填报" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="noticeText" />
                </view>
                <view class="today-fill-form">
                    <uni-forms ref="baseForm" :modelValue="todayFill.param">
                        <view class="wh100 flex">
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="结算日期">
                                    <uni-datetime-picker type="date" :clear-icon="false" v-model="todayFill.param.date" @maskClick="maskClick" />
                                </uni-forms-item>
                            </view>
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="上接(立方/秒)" label-width="190rpx">
									  <uni-easyinput errorMessage v-model="todayFill.param.shangjie" focus placeholder="请输入内容" @input="input"></uni-easyinput>
                                </uni-forms-item>
                            </view>
                        </view>

                        <uni-forms-item label="区间(立方/秒)" label-width="190rpx">
                            <view class="wh100 flex">
                                <view style="width: 50%">
                                    <uni-easyinput errorMessage v-model="todayFill.param.range" focus placeholder="请输入内容" @input="input"></uni-easyinput>
                                </view>
                                <view class="button-box flex" style="width: 62%">
                                    <button class="search-button flex justify-center align-center">提交</button>
                                    <button class="search-button flex justify-center align-center">保存</button>
                                </view>
                            </view>
                        </uni-forms-item>
                    </uni-forms>
                </view>
            </uni-card>
        </view>

        <!-- 历史填报 -->
        <view class="history-fill-box">
            <uni-card title="历史填报" :is-shadow="false">
                <view class="history-fill-form">
                    <uni-forms ref="baseForm" :modelValue="historyFill.param">
                        <view class="wh100 flex">
                            <view style="width: 75%; padding: 0 5rpx">
                                <uni-forms-item label="观测日期">
                                    <uni-datetime-picker v-model="historyFill.param.dateRange" type="daterange" @maskClick="maskClick" />
                                </uni-forms-item>
                            </view>
                            <view style="width: 25%; padding: 0 5rpx">
                                <button class="search-button flex justify-center align-center">查询</button>
                            </view>
                        </view>
                    </uni-forms>
                </view>
				<view class="history-fill-table">
					<uni-table ref="table" :loading="tableLoading" border stripe emptyText="暂无更多数据" style="width: 100%; height: 100%; overflow: auto">
					    <uni-tr>
					        <uni-th width="150" align="center">监测站点</uni-th>
					        <uni-th width="150" align="center">流量(m³/s)</uni-th>
					        <uni-th align="center">监测时间</uni-th>
					    </uni-tr>
					    <uni-tr v-for="(item, index) in historyFill.tableData" :key="index">
					        <uni-td>{{ item.point }}</uni-td>
					        <uni-td>
					            <view class="name">{{ item.waterFlow }}</view>
					        </uni-td>
					        <uni-td align="center">{{ item.time }}</uni-td>
					    </uni-tr>
					</uni-table>
				</view>
            </uni-card>
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue';
const noticeText = computed(() => {
    const num = 1;
    const status = '待审核';
    return '今日已提交' + num + '条记录，最新状态为' + status;
});

const todayFill = ref({
    param: {
        date: '',
        shangjie: '',
        range: ''
    }
});

const todayMonitorTimeRange = ref([
    {
        value: '8:00',
        text: '8:00'
    },
    {
        value: '14:00',
        text: '14:00'
    },
    {
        value: '16:00',
        text: '16:00'
    }
]);

const historyFill = ref({
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

<style lang="scss">
@import url('../../../common/style/common-style.scss');

.water-diversion-approval {
    height: 100%;
    .notice-box {
        height: 80rpx;
    }
    .today-fill-box {
        .today-fill-form {
            .button-box {
                button {
                    width: 42%;
                }
            }
        }
    }
}

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
</style>
