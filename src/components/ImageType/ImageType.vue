<template>
    <div class="imagetype-wrapper">
        <div class="nav">
            <div class="nav-item px-1"
                 v-for="(item, index) in imageTypes"
                 :key="index"
                 :class="['imagetype-wrapper__item', { 'imagetype-wrapper__item--choosen' : choosenType === index }]"
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
                'dogs',
                'cats',
                'others'
            ]
        }
    },
    methods: {
        setChoosenType (index) {
            this.choosenType = index;
        }
    }
}
</script>

<style src="./ImageType.scss" lang="scss" scoped />>