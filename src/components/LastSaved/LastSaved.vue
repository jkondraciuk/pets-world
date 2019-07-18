<template>
    <div class="lastsaved-wrapper">
        <h2 class="lastsaved-wrapper__header">Last Saved:</h2>
        <div class="container lastsaved-wrapper__container">
        <div class="row no-gutters lastsaved-wrapper__row">
            <div class="col-12 col-sm-4 lastsaved-wrapper__inner"
                 v-for="(item, index) in lastSavedImages"
                 :key="index">
                <SavedImage class="lastsaved-wrapper__image"
                            :image="lastSavedImages[index]"
                            @removeImage="removeImage(index)" />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import SavedImage from '@/components/SavedImage/SavedImage';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'LastSaved',
    components: {
        SavedImage
    },
    computed: {
        ...mapGetters(['lastSavedImages'])
    },
    methods: {
        ...mapActions(['removeImage'])
    }
}
</script>

<style src="./LastSaved.scss" lang="scss" scoped />