<template>
    <view class="engineer-inspection">
		<!-- <engineerInspectionReportVue></engineerInspectionReportVue> -->
		<!-- <engineerInspectionApprovalVue></engineerInspectionApprovalVue> -->
		<engineerInspectionApprovalWaterVue></engineerInspectionApprovalWaterVue>
    </view>
</template>

<script setup>
import engineerInspectionReportVue from './engineer-inspection-report.vue';
import engineerInspectionApprovalVue from './engineer-inspection-approval.vue';
import engineerInspectionApprovalWaterVue from './engineer-inspection-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.engineer-inspection {
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
