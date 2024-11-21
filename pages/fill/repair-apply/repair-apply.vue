<template>
    <view class="repair-apply">
		<repairApplyReportVue></repairApplyReportVue>
		<!-- <repair-apply-approval-vue></repair-apply-approval-vue> -->
		<!-- <repair-apply-approval-water-vue></repair-apply-approval-water-vue> -->
	</view>
</template>

<script setup>
	import repairApplyReportVue from './repair-apply-report.vue';
	import repairApplyApprovalVue from './repair-apply-approval.vue';
	import repairApplyApprovalWaterVue from './repair-apply-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.repair-apply {
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
