<template>
    <view class="water-diversion">
        <!-- <waterDiversionApprovalVue></waterDiversionApprovalVue> -->
        <waterDiversionApprovalWaterVue></waterDiversionApprovalWaterVue>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import waterDiversionApprovalVue from './water-diversion-approval.vue';
import waterDiversionApprovalWaterVue from './water-diversion-approval-water.vue';
</script>

<style lang="scss" scoped>
@import url('../../../common/style/common-style.scss');
page {
    height: 100%;
}
.water-diversion {
    height: 100%;
}
</style>
