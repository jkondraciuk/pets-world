<template>
    <div class="imagetype-wrapper">
        <b-nav>
            <b-nav-item v-for="(item, index) in imageTypes"
                        :key="index"
                        :class="['imagetype-wrapper__item', { 'imagetype-wrapper__item--choosen' : choosenType === index }]"
                        @click="setChoosenType(index)"
                        >{{ item }}</b-nav-item>
        </b-nav>
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