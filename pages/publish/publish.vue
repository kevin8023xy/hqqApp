<template>
    <view class="publish-box">
        <!-- 标题栏 -->
        <custom-nav-bar title="发布"></custom-nav-bar>
        <view class="content">
            <!-- <publish-report-vue></publish-report-vue> -->
            <!-- <publish-approval-vue></publish-approval-vue> -->
			<publishApprovalWaterVue></publishApprovalWaterVue>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import publishReportVue from './publish-report.vue';
import publishApprovalVue from './publish-approval.vue';
import publishApprovalWaterVue from './publish-approval-water.vue';
</script>

<style lang="scss" scoped>
@import url('../../common/style/common-style.scss');
page {
    height: 100%;
}
.publish-box {
    height: 100%;
    background: $background-color-1;
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