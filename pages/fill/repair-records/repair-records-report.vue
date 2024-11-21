<template>
    <view class="repair-records-report wh100">
        <!-- 今日申请 -->
        <view class="today-fill-box">
            <uni-card title="今日申请" :is-shadow="false">
                <view class="notice-box">
                    <uni-notice-bar show-icon :text="noticeText" />
                </view>
                <view class="today-fill-form">
                    <uni-forms ref="baseForm" :modelValue="todayApply.param">
                        <uni-forms-item label="申请编号">
                            <uni-data-select v-model="todayApply.param.bh" :localdata="bhRange" @change="changebh"></uni-data-select>
                        </uni-forms-item>
                        <uni-forms-item label="维养日期">
                            <uni-datetime-picker type="datetime" v-model="todayApply.param.date" @change="changeLog" />
                        </uni-forms-item>
						
						<uni-forms-item label="维养人">
						     <uni-data-select v-model="todayApply.param.people" :localdata="peopleRange" @change="peopleChange"></uni-data-select>
						</uni-forms-item>
						
						<uni-forms-item label="验收状态">
						       <uni-data-select v-model="todayApply.param.status" :localdata="statusRange" @change="changeStatus"></uni-data-select>
						</uni-forms-item>

                        <uni-forms-item label="实际维修金额(元)">
                            <uni-easyinput errorMessage v-model="todayApply.param.amount" focus placeholder="请输入内容" @input="input"></uni-easyinput>
                        </uni-forms-item>

                        <uni-forms-item label="维修后记录">
                            <!-- <uni-file-picker
                                v-model="todayApply.param.imageRecords"
                                fileMediatype="image"
                                mode="grid"
                                @select="select"
                                @progress="progress"
                                @success="success"
                                @fail="fail"
                            /> -->
                            <view class="upload-image-box">
                                <button class="search-box" type="primary" @click="getImg">请选择图片</button>
                                <uni-list>
                                    <uni-list-item v-for="(item, index) in todayApply.param.imageRecords" :key="index">
                                        <image :src="item" :mode="scaleToFill"></image>
                                    </uni-list-item>
                                </uni-list>
                            </view>
                        </uni-forms-item>
                        <uni-forms-item>
                            <view class="button-box flex">
                                <button class="search-button">提交</button>
                                <button class="search-button">保存</button>
                                <button class="search-button">清除</button>
                            </view>
                        </uni-forms-item>
                    </uni-forms>
                </view>
            </uni-card>
        </view>

        <!-- 历史申请 -->
        <view class="history-fill-box">
            <uni-card title="历史申请" :is-shadow="false">
                <view class="history-fill-form">
                    <uni-forms ref="baseForm" :modelValue="historyFill.param">
                        <view class="wh100 flex">
                            <view style="width: 75%; padding: 0 5rpx">
                                <uni-forms-item label="巡检日期">
                                    <uni-datetime-picker v-model="historyFill.param.dateRange" type="daterange" @maskClick="maskClick" />
                                </uni-forms-item>
                            </view>
                            <view style="width: 25%; padding: 0 5rpx">
                                <button class="search-button">查询</button>
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

const todayApply = ref({
    param: {
        bh: '',
        date: '',
        people: '',
        status: '', // 巡检地段
        amount: '', // 巡检类型
        records: []
    }
});

const bhRange = ref([]);

const peopleRange = ref([])

const statusRange = ref([
	{
		text: '通过',
		value: 'approval'
	},
	{
		text: '在途',
		value: 'onRoad'
	},
	{
		text: '退回',
		value: 'back'
	}
])

const repairTypeRange = ref({
    repair: [
        {
            text: '渠道破损',
            value: 0
        },
        {
            text: '设备故障',
            value: 1
        },
        {
            text: '设备损坏',
            value: 2
        },
        {
            text: '其他',
            value: 3
        }
    ],
    maintenance: [
        {
            text: '渠道养护',
            value: 0
        },
        {
            text: '灌排泵站养护',
            value: 1
        },
        {
            text: '涵闸养护',
            value: 2
        },
        {
            text: '农桥养护',
            value: 3
        },
        {
            text: '其他',
            value: 4
        }
    ]
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

const jietongzhirenRange = ref([
    {
        value: '1',
        text: '通知人1'
    },
    {
        value: 2,
        text: '通知人2'
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

const peopleChange = (e) => {
	console.log(e);
}


/**
 * 上传文件
 */
const select = (e) => {
    console.log('选择文件：', e);
};
// 获取上传进度
const progress = (e) => {
    console.log('上传进度：', e);
};

// 上传成功
const success = (e) => {
    console.log('上传成功');
};

// 上传失败
const fail = (e) => {
    console.log('上传失败：', e);
};

// 拍照或从文件上传
const getImg = () => {
    uni.chooseImage({
        count: 6, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
        success: function (res) {
            console.log(JSON.stringify(res.tempFilePaths));
            todayApply.value.param.imageRecords = res.tempFilePaths;
        }
    });
};
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');

.repair-records-report {
    height: 100%;
    .notice-box {
        height: 80rpx;
    }
    .today-fill-box {
        .today-fill-form {
            .button-box {
                button {
                    width: 32%;
                }
            }
        }
    }

    .upload-image-box {
        width: 100%;
        height: 300rpx;
    }
}

.search-button {
    display: flex;
    align-items: center;
    justify-content: center;
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
