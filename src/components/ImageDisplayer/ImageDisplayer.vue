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
                <div class="imgd__save" >
                    <div @click="addImage(image); alreadySaved()">
                        <HeartIcon :class="['imgd__heart-icon', { 'imgd__heart-icon--clicked' : isSaved }]" />
                    </div>
                    <span :class="['imgd__saved', { 'imgd__saved--clicked' : isSaved }]">Saved!</span>
                </div>
                <button class="btn btn-primary btn-sm imgd__button"
                        @click="loadImage(); unsaved()">Next one</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ImageType from '@/components/ImageType/ImageType'
import HeartIcon from '@/components/HeartIcon/HeartIcon'

import { mapGetters, mapActions } from 'vuex'

const dogsAPI = 'https://dog.ceo/api/breeds/image/random'
const catsAPI = 'https://api.thecatapi.com/v1/images/search'
const othersAPI = null

export default {
    name: 'ImageDisplayer',
    components: {
        ImageType,
        HeartIcon
    },
    data () {
        return {
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
            // axios.get(usedAPI)
            //     .then(response => this.image.url = response.data.message)
            //     .catch(error => console.log(error))
            switch (this.choosenType) {
                case 0: {
                    axios.get(usedAPI)
                        .then(response => this.image.url = response.data.message)
                        .catch(error => console.log(error))
                }
                case 1: {
                    axios.get(usedAPI)
                        .then(response => {this.image.url = response.data[0].url; console.log(response.data)})
                        .catch(error => console.log(error))
                }
            }
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
        ...mapActions(['addImage', 'alreadySaved', 'unsaved'])
    },
    computed: {
        style () {
            return `background-image: url(${this.image.url})`
        },
        imageType () {
            return this.choosenType;
        },
        ...mapGetters (['isSaved'])
    },
    mounted () {
        this.loadImage()
    }
}
</script>

<style src="./ImageDisplayer.scss" lang="scss" scoped />