<template>
    <view class="publish-report-box">
        <!-- 一键发布 -->
        <view class="oneclick-publish">
            <uni-card title="一键发布" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="noticeText" />
                </view>
                <view class="publish-form">
                    <uni-forms ref="baseForm" :modelValue="formData">
                        <uni-forms-item label="通知类别">
                            <uni-data-select v-model="formData.noticeType" :localdata="noticeTypeRange" @change="noticeTypeChange"></uni-data-select>
                        </uni-forms-item>
                        <uni-forms-item label="通知人群">
                            <uni-data-select v-model="formData.people" :localdata="noticePeopleRange" @change="noticePeopleChange"></uni-data-select>
                        </uni-forms-item>
                        <uni-forms-item label="发布时段">
                            <uni-datetime-picker v-model="formData.timeRange" type="daterange" @maskClick="maskClick" />
                        </uni-forms-item>
                        <uni-forms-item label="发布内容">
                            <uni-easyinput type="textarea" v-model="formData.content" placeholder="请输入自我介绍" />
                        </uni-forms-item>
                        <uni-forms-item label="重要备注">
                            <uni-easyinput type="textarea" v-model="formData.remark" placeholder="请输入自我介绍" />
                        </uni-forms-item>
                        <uni-forms-item>
                            <view class="button-box flex">
                                <button class="search-button flex justify-center align-center">提交</button>
                                <button class="search-button flex justify-center align-center">保存</button>
                                <button class="search-button flex justify-center align-center">清除</button>
                            </view>
                        </uni-forms-item>
                    </uni-forms>
                </view>
            </uni-card>
        </view>
        <!-- 待审批记录 -->
        <view class="remain-records">
            <uni-card title="待审批" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="remainApproalText" />
                </view>
                <view class="table-box">
                    <uni-table ref="table" :loading="tableLoading" border stripe emptyText="暂无更多数据" style="width: 100%; height: 100%; overflow: auto">
                        <uni-tr>
                            <uni-th width="150" align="center">监测站点</uni-th>
                            <uni-th width="150" align="center">流量(m³/s)</uni-th>
                            <uni-th align="center">监测时间</uni-th>
                        </uni-tr>
                        <uni-tr v-for="(item, index) in recordsData.tableData" :key="index">
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

        <!-- 审批记录 -->
        <view class="approval-records">
            <uni-card title="审批/发布记录" :is-shadow="false">
                <view class="search-box">
                    <uni-forms ref="baseForm" :modelValue="recordsData.param">
                        <uni-forms-item label="发布时间">
                            <view class="w100 flex align-center">
                                <view style="width: 75%">
                                    <uni-datetime-picker v-model="recordsData.param.publishTime" type="daterange" @maskClick="maskClick" />
                                </view>
                                <view style="width: 25%" class="flex justify-center">
                                    <button class="search-button flex justify-center align-center">查询</button>
                                </view>
                            </view>
                        </uni-forms-item>
                    </uni-forms>

                    <view class="table-box">
                        <uni-table ref="table" :loading="tableLoading" border stripe emptyText="暂无更多数据" style="width: 100%; height: 100%; overflow: auto">
                            <uni-tr>
                                <uni-th width="150" align="center">监测站点</uni-th>
                                <uni-th width="150" align="center">流量(m³/s)</uni-th>
                                <uni-th align="center">监测时间</uni-th>
                            </uni-tr>
                            <uni-tr v-for="(item, index) in recordsData.tableData" :key="index">
                                <uni-td>{{ item.point }}</uni-td>
                                <uni-td>
                                    <view class="name">{{ item.waterFlow }}</view>
                                </uni-td>
                                <uni-td align="center">{{ item.time }}</uni-td>
                            </uni-tr>
                        </uni-table>
                    </view>
                </view>
            </uni-card>
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue';
const noticeText = computed(() => {
    const num = 1;
    return '今日已提交' + num + '条通知，最新状态为待审核';
});

const remainApproalText = computed(() => {
    const total = 3;
    const remainNum = 0;
    return '待审批' + total + '条通知，其中灾情' + remainNum + '条';
});

const formData = ref({
    noticeType: '',
    people: '',
    timeRange: [],
    content: '',
    remark: ''
});

const noticeTypeRange = ref([
    { value: 0, text: '灾情' },
    { value: 1, text: '设备' },
    { value: 2, text: '会议' },
    { value: 3, text: '其他' }
]);

const noticePeopleRange = ref([
    { value: 0, text: '所在管理段' },
    { value: 1, text: '所在管理所' }
]);

// 发布记录
const recordsData = ref({
    param: {
        publishTime: []
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

const noticeTypeChange = (e) => {
    console.log('noticeChange', e);
};

const noticePeopleChange = (e) => {
    console.log('noticePeopleChange', e);
};

const maskClick = (e) => {
    console.log('maskClick', e);
};
</script>

<style lang="scss" scoped>
@import url('../../common/style/common-style.scss');
.publish-report-box {
    .oneclick-publish {
        .notice-box {
            height: 80rpx;
        }

        .publish-form {
            .button-box {
            }
        }
    }
    .search-button {
        height: 68rpx;
        background: $button-color-1;
        width: 30%;
        color: #fff;
        font-size: 28rpx;
        :deep() {
            uni-button {
                height: 60rpx;
            }
        }
    }
    .remain-records {
        margin: 15rpx 0 0 0;
        button {
            width: 30% !important;
        }
    }

    .approval-records {
        margin: 15rpx 0 0 0;
        button {
            width: 80% !important;
        }
    }
}

:deep() {
    .uni-card {
        padding: 0 !important ;
        margin: 0 0 !important;
        background: transparent !important;
    }
    .uni-card__header-content .uni-card__header-content-title {
        color: $text-font-color-5 !important;
    }
    .uni-card__content {
        padding: 10rpx 5rpx !important;
    }
    .uni-forms-item__label {
        color: #fff;
    }
    .uni-select__input-text {
        color: #fff;
    }
    uni-page-body {
        height: 100%;
    }
}
</style>
