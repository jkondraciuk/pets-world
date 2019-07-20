<template>
    <div class="imagetype-wrapper">
        <div class="nav">
            <div class="nav-item mx-1"
                 v-for="(item, index) in imageTypes"
                 :key="index"
                 :class="['imagetype-wrapper__item', { 'imagetype-wrapper__item--choosen' : choosenType === index }]"
                 :disabled="choosenType === index"
                 @click="setChoosenType(index)"
                 >{{ item }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageType',
    data () {
        return {
            choosenType: 0,
            imageTypes: [
                'all',
                'dogs',
                'cats'
            ]
        }
    },
    methods: {
        setChoosenType (index) {
            if (this.choosenType !== index) {
                this.choosenType = index;
                this.$emit('changed-type', this.choosenType);
            }
        }
    }
}
</script>

<style src="./ImageType.scss" lang="scss" scoped />