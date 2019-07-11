<template>
    <div class="lastsaved-wrapper">
        <SavedImage />
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