<template>
    <div class="savedimages-wrapper">
        <ImageType class="savedimages-wrapper__imagetype"
                   @changed-type="filterAnimals" />
        <div class="container savedimages-wrapper__container">
            <div class="row no-gutters">
                <div class="col-12 col-sm-6 col-md-4 savedimages-wrapper__noimages"
                    v-show="noImages">
                    <p class="savedimages-wrapper__paragraph">You haven't saved any photos yet</p>
                    <div class="savedimages-wrapper__noimage-img">
                        <router-link class="savedimages-wrapper__link" to="/">
                        <img src="@/assets/icons/add.svg"
                            alt="Add icon">
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 savedimages-wrapper__image"
                    v-for="(image, index) in getSavedImages" :key="index">
                    {{ image.type }}
                    <SavedImage :image="image"
                                @removeImage="removeImage(index)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SavedImage from '@/components/SavedImage/SavedImage'
import ImageType from '@/components/ImageType/ImageType'

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SavedImages',
    components: {
        SavedImage,
        ImageType
    },
    computed: {
        ...mapGetters(['getSavedImages']),
        noImages () {
            return this.getSavedImages.length === 0
        }
    },
    methods: {
        filterAnimals () {

        },
        ...mapActions(['removeImage'])
    }
}
</script>

<style src="./SavedImages.scss" lang="scss" scoped />