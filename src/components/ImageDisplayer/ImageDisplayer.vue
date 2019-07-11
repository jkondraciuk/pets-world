<template>
    <div class="imgd-wrapper">
        <ImageType class="imgd-wrapper__type" />
        <div class="imgd">
            <div class="imgd__img"></div>
            <div class="imgd__bar">
                <span class="imgd__icon">i</span>
                <button class="btn btn-secondary">Next one</button>
            </div>
        </div>
    </div>
</template>

<script>
import ImageType from '@/components/ImageType/ImageType';

export default {
    name: 'ImageDisplayer',
    components: {
        ImageType
    }
}
</script>

<style src="./ImageDisplayer.scss" lang="scss" scoped />