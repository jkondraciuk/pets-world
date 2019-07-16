<template>
    <div class="saved-wrapper">
        <SavedImages />
    </div>
</template>

<script>
import SavedImages from '@/components/SavedImages/SavedImages';

export default {
    name: 'Saved',
    components: {
        SavedImages,
    }
}
</script>

<style src="./Saved.scss" lang="scss" scoped />>