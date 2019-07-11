<template>
    <div class="imgd-wrapper">
        <ImageType class="imgd-wrapper__type" />
        <div class="imgd">
            <div class="imgd__img"
                 :style="style"
                 role="img"
                 aria-label="An image of choosen type of animal"
                 title="An image of choosen type of animal" />
            <div class="imgd__bar">
                <img :class="['imgd__icon', { 'imgd__icon--clicked' : saved }]"
                     src="@/assets/icons/heart.png"
                     alt="Heart icon"
                     @click="saveImage">
                <button class="btn btn-secondary imgd__button"
                        @click="loadImage">Next one</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ImageType from '@/components/ImageType/ImageType';

const dogsAPI = 'https://dog.ceo/api/breeds/image/random';

export default {
    name: 'ImageDisplayer',
    components: {
        ImageType
    },
    data () {
        return {
            saved: false,
            imageURL: null
        }
    },
    methods: {
        loadImage () {
            axios.get(dogsAPI)
                .then(response => this.imageURL = response.data.message)
                .catch(error => console.log(error))
            this.saved = false;
        },
        saveImage () {
            this.saved = true;
        }
    },
    computed: {
        style () {
            return `background-image: url(${this.imageURL})`;
        }
    },
    mounted () {
        this.loadImage();
    }
}
</script>

<style src="./ImageDisplayer.scss" lang="scss" scoped />