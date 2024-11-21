<template>
    <view class="water-level-observe">
        <!-- <waterLevelOberserveReportVue></waterLevelOberserveReportVue> -->
		<!-- <waterLevelOberserveApprovalVue></waterLevelOberserveApprovalVue> -->
		<waterLevelOberserveApprovalWaterVue></waterLevelOberserveApprovalWaterVue>
    </view>
</template>

<script setup>
import waterLevelOberserveReportVue from './water-level-oberserve-report.vue';
import waterLevelOberserveApprovalVue from './water-level-oberserve-approval.vue';
import waterLevelOberserveApprovalWaterVue from './water-level-oberserve-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.water-level-observe {
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
