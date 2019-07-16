import { isContext } from "vm";

const state = {
    savedImages: [],
    alreadySaved: false
}

const getters = {
    getSavedImages: state => state.savedImages,
    isSaved: state => state.alreadySaved,
    lastSavedImages: state => state.savedImages.slice(0, 3)
}

const actions = {
    addImage ({ commit }, image) {
        const time = new Date()
        const hours = time.getHours() >= 10 ? time.getHours() : '0' + time.getHours(),
                minutes = time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes(),
                days = time.getDate() >= 10 ? time.getDate() : '0' + time.getDate(),
                months = time.getMonth() >= 10 ? time.getMonth() : '0' + time.getMonth(),
                year = time.getFullYear()

        //Setting time and date
        image.saveTime = `${hours}:${minutes}`
        image.saveDate = `${days}.${months}.${year}`
        commit('addImage', image)
    },
    alreadySaved ({ commit }) {
        commit('alreadySaved')
    },
    unsaved ({ commit }) {
        commit('unsaved')
    },
    removeImage ({ commit }, imageIndex) {
        commit('removeImage', imageIndex)
        if (imageIndex === 0) {
            commit('unsaved')
        }
    }
}

const mutations = {
    addImage (state, image) {
        if (!state.alreadySaved) {
            state.savedImages.unshift({
                type: image.type,
                url: image.url,
                saveTime: image.time,
                saveDate: image.date
            })
        }
    },
    alreadySaved (state) {
        state.alreadySaved = true
    },
    unsaved (state) {
        state.alreadySaved = false
    },
    removeImage (state, imageIndex) {
        state.savedImages.splice(imageIndex, 1)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}