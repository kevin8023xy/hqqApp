<template>
    <view class="water-sttlement">
        <!-- <waterSettlementReportVue></waterSettlementReportVue> -->
		<!-- <waterSettlementApprovalVue></waterSettlementApprovalVue> -->
		<waterSettlementApprovalWaterVue></waterSettlementApprovalWaterVue>
    </view>
</template>

<script setup>
import waterSettlementReportVue from './water-settlement-report.vue';
import waterSettlementApprovalVue from './water-settlement-approval.vue';
import waterSettlementApprovalWaterVue from './water-settlement-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.water-sttlement {
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
