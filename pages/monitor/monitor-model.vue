<template>
    <view class="monitor-model">
        <view class="notice-box">
            <uni-notice-bar show-icon text="共1处设备,当前运行异常0处" />
        </view>
        <!-- 选项框 -->
        <!-- 这里是个表单 -->
        <view class="select-box">
            <uni-forms ref="baseForm" :modelValue="formParam">
                <view class="flex" style="width: 100%">
                    <view style="width: 49%; padding-right: 20rpx">
                        <uni-forms-item label="监测站点">
                            <uni-data-select v-model="formParam.station" :localdata="range.stationRange" @change="stationChange"></uni-data-select>
                        </uni-forms-item>
                    </view>
                    <view style="width: 49%; padding-right: 20rpx">
                        <uni-forms-item label="监测要素">
                            <uni-data-select v-model="formParam.element" :localdata="range.elementRange" @change="elementChange"></uni-data-select>
                        </uni-forms-item>
                    </view>
                </view>
                <view class="flex" style="width: 100%">
                    <view style="width: 75%">
                        <uni-forms-item label="日期时间">
                            <uni-datetime-picker v-model="formParam.date" type="daterange" @maskClick="maskClick" />
                        </uni-forms-item>
                    </view>
                    <view style="width: 25%">
                        <button class="search-button flex justify-center align-center">查询</button>
                    </view>
                </view>
            </uni-forms>
        </view>

        <!-- 运行状况 -->
        <view class="operate-status-box">
            <uni-card title="运行状况" :is-shadow="false">
                <view class="inner-content wh100 flex align-center">
                    <image src="../../static/images/tabBar/fill.png" mode="aspectFill"></image>
                    <text>{{ statusInfo }}</text>
                </view>
            </uni-card>
        </view>

        <!-- 信息展示图表 -->
        <view class="info-display-box">
            <view class="chart-box">
                <chart-line-vue :chartData="echartData"></chart-line-vue>
            </view>
            <view class="table-box">
                  <uni-table ref="table" :loading="tableLoading" border stripe emptyText="暂无更多数据" style="width: 100%; height: 100%; overflow: auto">
                    <uni-tr>
                        <uni-th width="150" align="center">监测站点</uni-th>
                        <uni-th width="150" align="center">流量(m³/s)</uni-th>
                        <uni-th align="center">监测时间</uni-th>
                    </uni-tr>
                    <uni-tr v-for="(item, index) in tableData" :key="index">
                        <uni-td>{{ item.point }}</uni-td>
                        <uni-td>
                            <view class="name">{{ item.waterFlow }}</view>
                        </uni-td>
                        <uni-td align="center">{{ item.time }}</uni-td>
                    </uni-tr>
                </uni-table>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import chartLineVue from '../../components/echarts/chart-line.vue';
const props = defineProps({
    monitorObject: {
        type: Object
    }
});

// 提取出props的属性
const { formParam, range, statusInfo, echartData, tableData } = toRefs(props.monitorObject);

const stationChange = (e) => {
    console.log('测试', e);
};

const elementChange = (e) => {
    console.log('要素测试', e);
};

const tableLoading = ref(false);

</script>

<style lang="scss" scoped>
@import url('../../common/style/common-style.scss');
page {
    height: 100%;
    background: $background-color-1;
}
.monitor-model {
    height: 100%;
    display: flex;
    flex-direction: column;
    .notice-box {
        height: 80rpx;
    }
    .select-box {
        width: 100%;
        height: 180rpx;
        // padding: 15rpx 10rpx;

        .search-button {
            height: 68rpx;
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

    .operate-status-box {
        height: 200rpx;
        width: 100%;
        .inner-content {
            image {
                width: 60rpx;
                height: 60rpx;
            }
            text {
                color: #fff;
                padding-left: 15rpx;
            }
        }
    }

    .info-display-box {
        flex: 1;
        .chart-box {
            height: 50%;
            width: 100%;
        }
        .table-box {
            height: 50%;
            width: 100%;
            background-color: #aaffff;
        }
    }
}
</style>
