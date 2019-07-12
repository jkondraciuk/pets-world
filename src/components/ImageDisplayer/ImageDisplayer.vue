<template>
    <div class="imgd-wrapper">
        <ImageType @changed-type="changeChoosenType" class="imgd-wrapper__type" />
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
                     @click="addImage(image)">
                <button class="btn btn-secondary imgd__button"
                        @click="loadImage">Next one</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ImageType from '@/components/ImageType/ImageType'

import { mapActions } from 'vuex'

const dogsAPI = 'https://dog.ceo/api/breeds/image/random'
const catsAPI = null
const othersAPI = null

export default {
    name: 'ImageDisplayer',
    components: {
        ImageType
    },
    data () {
        return {
            saved: false,
            choosenType: 0,
            image: {
                type: 'dog',
                url: null,
                saveTime: null,
                saveDate: null
            }
        }
    },
    methods: {
        loadImage () {
            switch (this.choosenType) {
                case 0: {
                    this.fetchImage(dogsAPI);
                } break;
                case 1: {
                    this.fetchImage(catsAPI);
                } break;
                case 2: {
                    this.fetchImage(othersAPI);
                } break;
            }
        },
        fetchImage (usedAPI) {
            axios.get(usedAPI)
                .then(response => this.image.url = response.data.message)
                .catch(error => console.log(error))
            this.saved = false
        },
        saveImage () {
            this.saved = true
        },
        changeChoosenType (choosenType) {
            this.choosenType = choosenType
            switch (this.choosenType) {
                case 0: {
                    this.image.type = 'dog'
                } break;
                case 1: {
                    this.image.type = 'cat'
                } break;
                case 2: {
                    this.image.type = 'other'
                } break;
            }
            this.loadImage()
        },
        ...mapActions(['addImage'])
    },
    computed: {
        style () {
            return `background-image: url(${this.image.url})`
        },
        imageType () {
            return this.choosenType;
        }
    },
    mounted () {
        this.loadImage()
    }
}
</script>

<style src="./ImageDisplayer.scss" lang="scss" scoped />