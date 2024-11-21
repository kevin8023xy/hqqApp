<template>
    <view class="water-use-register">
		<!-- <water-use-register-report-vue></water-use-register-report-vue> -->
		<!-- <water-use-register-approval-vue></water-use-register-approval-vue> -->
		<water-use-register-approval-water-vue></water-use-register-approval-water-vue>
    </view>
</template>

<script setup>
import waterUseRegisterReportVue from './water-use-register-report.vue';
import waterUseRegisterApprovalVue from './water-use-register-approval.vue';
import waterUseRegisterApprovalWaterVue from './water-use-register-approval-water.vue';
</script>

<style lang="scss">
@import url('../../../common/style/common-style.scss');
.water-use-register {
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
