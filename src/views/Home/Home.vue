<template>
    <div class="home-wrapper">
        <ImageDisplayer />
        <LastSaved />
        <PageFooter class="home-wrapper__footer" />
    </div>
</template>

<script>
import ImageDisplayer from '@/components/ImageDisplayer/ImageDisplayer';
import LastSaved from '@/components/LastSaved/LastSaved';
import PageFooter from '@/components/PageFooter/PageFooter';

export default {
    name: 'Home',
    components: {
        PageFooter,
        LastSaved,
        ImageDisplayer
    }
}
</script>

<style src="./Home.scss" lang="scss" scoped />