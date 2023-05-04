Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'pages/form'
    }
  },

  data: {
    citys: [{
      name: '',
      date: '',
    }]
  },

  bindAddCity: function(e) {
    this.setData(
      {
        citys: [...this.data.citys, {
          name: '',
          date: '' 
        }]
      }
    )
  },

  bindArrivedCityName: function(e) {
    const index = e.currentTarget.dataset.id;
    const newCitys = [...this.data.citys]
    newCitys[index].name = e.detail.value
    this.setData({citys: newCitys})
  },

  bindArrivedCityDate: function(e) {
    const index = e.currentTarget.dataset.id;
    const newCitys = [...this.data.citys]
    newCitys[index].date = e.detail.value
    this.setData({citys: newCitys})
  },


  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', this.data)
  },
})