<template>
    <div class="lastsaved-wrapper">
        <div class="container lastsaved-wrapper__container">
        <div class="row no-gutters lastsaved-wrapper__row">
            <div class="col-12 col-sm-4 lastsaved-wrapper__inner"
                 v-for="(item, index) in lastSavedImages"
                 :key="index">
                <SavedImage class="lastsaved-wrapper__image" :image="lastSavedImages[index]" />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import SavedImage from '@/components/SavedImage/SavedImage';
import { mapGetters } from 'vuex'

export default {
    name: 'LastSaved',
    components: {
        SavedImage
    },
    computed: {
        ...mapGetters(['lastSavedImages'])
    }
}
</script>

<style src="./LastSaved.scss" lang="scss" scoped />