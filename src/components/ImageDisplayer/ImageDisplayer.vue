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
                type: null,
                url: null,
                saveTime: null,
                saveDate: null
            }
        }
    },
    methods: {
        loadImage () {
            axios.get(dogsAPI)
                .then(response => this.image.url = response.data.message)
                .catch(error => console.log(error))
            this.saved = false
        },
        saveImage () {
            this.saved = true
        },
        changeChoosenType (choosenType) {
            this.choosenType = choosenType
        },
        ...mapActions(['addImage'])
    },
    computed: {
        style () {
            return `background-image: url(${this.image.url})`
        }
    },
    mounted () {
        this.loadImage()
    }
}
</script>

<style src="./ImageDisplayer.scss" lang="scss" scoped />