<template>
    <div class="home-wrapper">
        <ImageDisplayer />
        <Footer />
    </div>
</template>

<script>
import ImageDisplayer from '@/components/ImageDisplayer/ImageDisplayer';
import Footer from '@/components/Footer/Footer';

export default {
    name: 'Home',
    components: {
        Footer,
        ImageDisplayer
    }
}
</script>

<style src="./Home.scss" lang="scss" scoped />>