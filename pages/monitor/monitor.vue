<template>
    <view class="monitor wh100">
        <!-- 标题栏 -->
        <custom-nav-bar title="监测"></custom-nav-bar>
        <!-- 导航栏 -->
        <view class="uni-padding-wrap uni-common-mt">
            <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
        </view>
        <view class="content">
            <view v-if="current === 0" class="wh100">
                <monitor-model-vue :monitorObject="weatherInfo"></monitor-model-vue>
            </view>
            <view v-if="current === 1" class="wh100">
                <monitor-model-vue :monitorObject="soilInfo"></monitor-model-vue>
            </view>
            <view v-if="current === 2" class="wh100">
                <monitor-model-vue :monitorObject="waterLevelInfo"></monitor-model-vue>
            </view>
            <view v-if="current === 3" class="wh100">
                <monitor-video-vue></monitor-video-vue>
            </view>
        </view>
    </view>
</template>

<script setup>
import monitorModelVue from './monitor-model.vue';
import monitorVideoVue from './monitor-video.vue';
import { ref } from 'vue';
const items = ref(['气象', '墒情', '水位', '视频']);
const styles = ref([
    {
        value: 'button',
        text: '按钮',
        checked: true
    },
    {
        value: 'text',
        text: '文字'
    }
]);
const colors = ref(['#007aff', '#4cd964', '#dd524d']);
const current = ref(0);
const colorIndex = ref(0);
const activeColor = ref('#007aff');
const styleType = ref('button');

const onClickItem = (e) => {
    if (current.value !== e.currentIndex) {
        current.value = e.currentIndex;
    }
};
const styleChange = (e) => {
    if (styleType.value !== e.detail.value) {
        styleType.value = e.detail.value;
    }
};
const colorChange = (e) => {
    if (styleType.value !== e.detail.value) {
        console.log(e.detail.value);
        activeColor.value = e.detail.value;
    }
};

const weatherInfo = ref({
    formParam: {
        station: '',
        element: '',
        date: ''
    },
    // 下拉框选项
    range: {
        stationRange: [
            { value: 0, text: '站点1' },
            { value: 1, text: '站点2' },
            { value: 2, text: '站点3' }
        ],
        elementRange: [
            { value: 0, text: '要素1' },
            { value: 1, text: '要素2' },
            { value: 2, text: '要素3' }
        ]
    },
    statusInfo: '该站点于2024/10/10 8:00至今运行异常！',
    echartData: [],
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

const soilInfo = ref({
    formParam: {
        station: '',
        element: '',
        date: ''
    },
    // 下拉框选项
    range: {
        stationRange: [
            { value: 0, text: '站点1' },
            { value: 1, text: '站点2' },
            { value: 2, text: '站点3' }
        ],
        elementRange: [
            { value: 0, text: '要素1' },
            { value: 1, text: '要素2' },
            { value: 2, text: '要素3' }
        ]
    },
    statusInfo: '该站点于2024/10/10 8:00至今运行异常！',
    echartData: [],
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

const waterLevelInfo = ref({
    formParam: {
        station: '',
        element: '',
        date: ''
    },
    // 下拉框选项
    range: {
        stationRange: [
            { value: 0, text: '站点1' },
            { value: 1, text: '站点2' },
            { value: 2, text: '站点3' }
        ],
        elementRange: [
            { value: 0, text: '要素1' },
            { value: 1, text: '要素2' },
            { value: 2, text: '要素3' }
        ]
    },
    statusInfo: '该站点于2024/10/10 8:00至今运行异常！',
    echartData: [],
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
@import url('../../common/style/common-style.scss');
page {
    height: 100%;
}
.monitor {
    height: 100%;
    background: $background-color-1;
    display: flex;
    flex-direction: column;
    .content {
        flex: 1;
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
