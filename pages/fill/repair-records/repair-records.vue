<template>
    <view class="repair-records">
        <!-- <repairRecordsReportVue></repairRecordsReportVue> -->
		<!-- <repair-records-approval-vue></repair-records-approval-vue> -->
		<repair-records-approval-water-vue></repair-records-approval-water-vue>
    </view>
</template>

<script setup>
import repairRecordsReportVue from './repair-records-report.vue';
import repairRecordsApprovalVue from './repair-records-approval.vue';
import repairRecordsApprovalWaterVue from './repair-records-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.repair-records {
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
