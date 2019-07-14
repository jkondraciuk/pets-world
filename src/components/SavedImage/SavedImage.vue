<template>
    <div class="savedimage-wrapper">
        <div class="savedimage-wrapper__image" :style="style" />
        <div class="savedimage-wrapper__bar">
            <div class="savedimage-wrapper__data">
                <span class="savedimage-wrapper__time">11:10</span>
                <span class="savedimage-wrapper__date">12.14.2014</span>
            </div>
            <div class="savedimage-wrapper__remove">
                <img src="@/assets/icons/bin.svg" alt="A bin icon">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SavedImage',
    props: ['image'],
    computed: {
        style () {
            return `background-image: url(${this.image.url})`
        }
    }
}
</script>

<style src="./SavedImage.scss" lang="scss" scoped />