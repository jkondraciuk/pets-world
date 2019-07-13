<template>
    <div class="lastsaved-wrapper">
        <div class="container">
        <div class="row">
            <SavedImage />
            <SavedImage />
            <SavedImage />
        </div>
        </div>
    </div>
</template>

<script>
import SavedImage from '@/components/SavedImage/SavedImage';

export default {
    name: 'LastSaved',
    components: {
        SavedImage
    }
}
</script>

<style src="./LastSaved.scss" lang="scss" scoped />