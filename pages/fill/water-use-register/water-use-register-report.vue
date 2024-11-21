<template>
    <view class="water-use-register-report wh100">
        <!-- 今日填报 -->
        <view class="water-use-register-box">
            <uni-card title="用水登记" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="noticeText" />
                </view>
                <view class="water-use-register-form">
                    <uni-forms ref="baseForm" :modelValue="todayApply.param">
                        <view class="wh100 flex">
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="申请编号" >
                                    <uni-data-select v-model="todayApply.param.shenqingbianhao" :localdata="shenqingbianhaoRange" @change="tongzhirenChange"></uni-data-select>
                                </uni-forms-item>
                            </view>
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="流量(立方/秒)" label-width="190rpx">
                                     <uni-easyinput errorMessage v-model="todayApply.param.waterFlow" focus placeholder="请输入内容" @input="input"></uni-easyinput>
                                </uni-forms-item>
                            </view>
                        </view>

                        <uni-forms-item label="起始时间">
                            <uni-datetime-picker v-model="todayApply.param.timeRange" type="datetimerange" rangeSeparator="至" />
                        </uni-forms-item>
                    </uni-forms>
                </view>
            </uni-card>
        </view>

        <!-- 历史填报 -->
        <view class="history-fill-box">
            <uni-card title="已登记" :is-shadow="false">
                <view class="history-fill-form">
                    <uni-forms ref="baseForm" :modelValue="historyFill.param">
                        <view class="wh100 flex">
                            <view style="width: 75%; padding: 0 5rpx">
                                <uni-forms-item label="登记日期">
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
    return '现有' + num + '条用水申请尚未登记'
});

const todayApply = ref({
    param: {
        shenqingbianhao: '',
        waterFlow: '', // 流量
        timeRange: ['', '']
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

const shenqingbianhaoRange = ref([
    {
        value: '1',
        text: '编号1'
    },
    {
        value: 2,
        text: '编号2'
    }
]);

const gongshuizhakouRange = ref([
    {
        value: '1',
        text: '供水闸口1'
    },
    {
        value: '2',
        text: '供水闸口2'
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

const tongzhirenChange = (e) => {
    console.log('e', e);
};
const gongshuizhakouChange = (e) => {
    console.log('e', e);
};
const maskClick = (e) => {
    console.log('e', e);
};
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');

.water-use-register-report {
    height: 100%;
    .notice-box {
        height: 80rpx;
    }
    .water-use-register-box {
        .water-use-register-form {
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
