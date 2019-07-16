<template>
    <div class="saved-wrapper">
        <SavedImages />
        <PageFooter />
    </div>
</template>

<script>
import SavedImages from '@/components/SavedImages/SavedImages'
import PageFooter from '@/components/PageFooter/PageFooter'

export default {
    name: 'Saved',
    components: {
        SavedImages,
        PageFooter
    }
}
</script>

<style src="./Saved.scss" lang="scss" scoped />