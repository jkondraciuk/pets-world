<template>
    <div class="savedimages-wrapper">
        <SavedImage />
    </div>
</template>

<script>
import SavedImage from '@/components/SavedImage/SavedImage';

export default {
    name: 'SavedImages',
    components: {
        SavedImage
    },
    data () {
        return {
            savedImages: []
        }
    }
}
</script>

<style src="./SavedImages.scss" lang="scss" scoped />