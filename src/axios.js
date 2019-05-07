/* global axios: false */

const theObj = {
  // axios
  async fetchData({ commit }, { param }) {
    const url = 'TODO'

    const response = await axios.get(url, {
      param,
    })
    const { data } = response

    commit('setData', data)
    return data
  },

  // axiospost
  async postData({ commit }, { param }) {
    const url = 'TODO'

    const response = await axios.post(url, {
      param,
    })
    const { data } = response

    commit('setData', data)
    return data
  },

  // axiosform
  async uploadFormData({ commit }, { uploadData }) {
    const url = 'TODO'

    const formData = new FormData()
    const keys = Object.keys(uploadData)
    keys.forEach((name) => {
      const value = uploadData[name]
      formData.append(name, value)
    })

    const response = await axios.post(url, formData)
    const { data } = response

    commit('setUploadedData', data)
    return data
  },

  // axiosfile
  async uploadFile({ commit }, { name, file }) {
    const url = 'TODO'

    const formData = new FormData()
    formData.append(name, file)

    const response = await axios.post(url, formData)
    const { data } = response

    commit('setUploadedFile', data)
    return data
  },

  // axiossearch
  async uploadData({ commit }, { uploadData }) {
    const url = 'TODO'
    const params = new URLSearchParams(uploadData)

    const response = await axios.post(url, params)
    const { data } = response

    commit('setUploadedData', data)
    return data
  },

  // axiosdel
  async removeData({ commit }, { value }) {
    const url = 'TODO'
    const params = {
      data: {
        value,
      },
    }

    const response = await axios.delete(url, params)
    const { data } = response

    commit('removeData', data)
    return data
  },
}

export default theObj
