<template>
    <view class="fill">
        <!-- 标题栏 -->
        <custom-nav-bar title="填报"></custom-nav-bar>
        <!-- 导航栏 -->
        <view class="uni-padding-wrap uni-common-mt">
            <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
        </view>
        <view class="content">
            <view v-if="current === 0" class="wh100">
                <water-level-observe-vue></water-level-observe-vue>
            </view>
            <view v-if="current === 1" class="wh100">
                <waterDiversionVue></waterDiversionVue>
            </view>
            <view v-if="current === 2" class="wh100">
                <waterUseApplyVue></waterUseApplyVue>
            </view>
            <view v-if="current === 3" class="wh100">
                <water-use-register-vue></water-use-register-vue>
            </view>
            <view v-if="current === 4" class="wh100">
                <water-settlement-vue></water-settlement-vue>
            </view>
            <view v-if="current === 5" class="wh100">
                <engineer-inspection-vue></engineer-inspection-vue>
            </view>
			<view v-if="current === 6" class="wh100">
			    <repair-apply-vue></repair-apply-vue>
			</view>
			<view v-if="current === 7" class="wh100">
			   <repair-records-vue></repair-records-vue>
			</view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import waterLevelObserveVue from './water-level-observe/water-level-observe.vue';
import waterDiversionVue from './water-diversion/water-diversion.vue';
import waterUseApplyVue from './water-use-apply/water-use-apply.vue';
import waterUseRegisterVue from './water-use-register/water-use-register.vue';
import waterSettlementVue from './water-settlement/water-settlement.vue';
import engineerInspectionVue from './engineer-inspection/engineer-inspection.vue';
import repairApplyVue from './repair-apply/repair-apply.vue';
import repairRecordsVue from './repair-records/repair-records.vue';
const items = ref(['水位观测', '引水结算', '用水申请', '用水登记', '用水结算', '工程巡检', '维养申请', '维养记录']);
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
</script>

<style lang="scss" scoped>
@import url('../../common/style/common-style.scss');
page {
    height: 100%;
}
.fill {
    // height: 100vh;
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
    .segmented-control__text {
        display: block;
        width: 2em;
        word-break: break-all;
    }
}
</style>
