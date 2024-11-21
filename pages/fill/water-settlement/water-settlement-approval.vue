<template>
    <view class="water-settlement-approval wh100">
        <!-- 今日填报 -->
        <view class="today-fill-box">
            <uni-card title="今日填报" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="noticeText" />
                </view>
                <view class="today-fill-form">
                    <uni-forms ref="baseForm" :modelValue="todayFill.param" label-width="190rpx">
                        <view class="wh100 flex">
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="结算日期">
                                    <uni-datetime-picker type="date" :clear-icon="false" v-model="todayFill.param.date" @maskClick="maskClick" />
                                </uni-forms-item>
                            </view>
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="下交(立米)">
                                    <uni-easyinput errorMessage v-model="todayFill.param.xiajiao" focus placeholder="请输入内容" @input="input"></uni-easyinput>
                                </uni-forms-item>
                            </view>
                        </view>

                        <view class="wh100 flex">
                            <view style="width: 50%; padding: 0 5rpx">
                                <uni-forms-item label="泄水(立方/秒)">
                                    <uni-easyinput errorMessage v-model="todayFill.param.xieshui" focus placeholder="请输入内容" @input="input"></uni-easyinput>
                                </uni-forms-item>
                            </view>
                            <view style="width: 50%; padding: 0 5rpx" class="flex">
                                <button class="search-button">提交</button>
                                <button class="search-button">清除</button>
                            </view>
                        </view>
                    </uni-forms>
                </view>
            </uni-card>
        </view>

        <!-- 待审批 -->
        <view class="remain-approval-box">
            <uni-card title="待审批" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="noticeText" />
                </view>
                <view class="remain-approval-table">
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
                <view class="button-box flex">
                    <button class="search-button flex justify-center align-center">通过</button>
                    <button class="search-button flex justify-center align-center">退回</button>
                </view>
            </uni-card>
        </view>

        <!-- 已审批 -->
        <view class="approvaled-box">
            <uni-card title="已审批" :is-shadow="false">
                <view class="approvaled-form">
                    <uni-forms ref="baseForm" :modelValue="historyFill.param">
                        <view class="wh100 flex">
                            <view style="width: 75%; padding: 0 5rpx">
                                <uni-forms-item label="申请日期">
                                    <uni-datetime-picker v-model="historyFill.param.dateRange" type="daterange" @maskClick="maskClick" />
                                </uni-forms-item>
                            </view>
                            <view style="width: 25%; padding: 0 5rpx">
                                <button class="search-button flex justify-center align-center">查询</button>
                            </view>
                        </view>
                    </uni-forms>
                </view>
                <view class="approvaled-table">
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
    const remainApprovalNum = 3;
    const remainElement = '管理段1，管理段2';
    const status = '待审核';
    return '待审批' + remainApprovalNum + '条，今日' + remainElement + '申请用水';
});

const todayFill = ref({
    param: {
        date: '',
        xiajiao: '',
        xieshui: ''
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

.water-settlement-approval {
    height: 100%;
    .notice-box {
        height: 80rpx;
    }
    .today-fill-box {
        .today-fill-form {
            button {
                width: 40%;
            }
        }
    }
    .remain-approval-box {
        .remain-approval-table {
            .button-box {
                button {
                    width: 42%;
                }
            }
        }
        .button-box {
            button {
                width: 25%;
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