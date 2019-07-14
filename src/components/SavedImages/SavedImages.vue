<template>
    <div class="savedimages-wrapper">
        <img v-for="(img, index) in getSavedImages" :key="index" :src="img.url" />
    </div>
</template>

<script>
import SavedImage from '@/components/SavedImage/SavedImage';

import { mapGetters } from 'vuex';

export default {
    name: 'SavedImages',
    components: {
        SavedImage
    },
    data () {
        return {
            savedImages: []
        }
    },
    computed: {
        ...mapGetters(['getSavedImages'])
    }
}
</script>

<style src="./SavedImages.scss" lang="scss" scoped />