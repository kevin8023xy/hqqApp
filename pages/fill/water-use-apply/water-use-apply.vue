<template>
    <view class="water-use-apply">
        <!-- <waterUseApplyReportVue></waterUseApplyReportVue> -->
		<!-- <waterUseApplyApprovalVue></waterUseApplyApprovalVue> -->
		<waterUseApplyApprovalWaterVue></waterUseApplyApprovalWaterVue>
    </view>
</template>

<script setup>
import waterUseApplyReportVue from './water-use-apply-report.vue';
import waterUseApplyApprovalVue from './water-use-apply-approval.vue';
import waterUseApplyApprovalWaterVue from './water-use-apply-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.water-use-apply {
    height: 100%;
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
