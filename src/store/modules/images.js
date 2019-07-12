import { isContext } from "vm";

const state = {
    savedImages: []
}

const getters = {
    getSavedImages: state => state.savedImages
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
    }
}

const mutations = {
    addImage (state, image) {
        state.savedImages.unshift({
            type: image.type,
            url: image.url,
            saveTime: image.time,
            saveDate: image.date
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}