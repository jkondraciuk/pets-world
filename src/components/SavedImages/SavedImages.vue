<template>
    <div class="savedimages-wrapper">
        <div class="container savedimages-wrapper__container">
            <div class="row no-gutters">
                <div class="col-12 col-sm-6 col-md-4 savedimages-wrapper__noimages">
                    <p class="savedimages-wrapper__paragraph">You haven't saved any photos yet</p>
                    <img src="@/assets/icons/add.svg" alt="Add icon">
                </div>
                <div class="col-12 col-sm-6 col-md-4 savedimages-wrapper__image"
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