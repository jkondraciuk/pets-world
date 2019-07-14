<template>
    <div class="savedimages-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-4"
                     v-for="(image, index) in getSavedImages" :key="index">
                     <SavedImage :image="image" />
                </div>
            </div>
        </div>
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