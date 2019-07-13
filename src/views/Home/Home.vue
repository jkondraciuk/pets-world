<template>
    <div class="home-wrapper">
        <ImageDisplayer />
        <LastSaved />
        <Footer />
        <br><br><br>
    </div>
</template>

<script>
import ImageDisplayer from '@/components/ImageDisplayer/ImageDisplayer';
import LastSaved from '@/components/LastSaved/LastSaved';
import Footer from '@/components/Footer/Footer';

export default {
    name: 'Home',
    components: {
        Footer,
        LastSaved,
        ImageDisplayer
    }
}
</script>

<style src="./Home.scss" lang="scss" scoped />