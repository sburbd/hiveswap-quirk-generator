var app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
    emptycheck: function() {
      if (this.message == '') {return ''}
    }
  },
  computed: {

    xefros: function () {
      if (this.message == '') {return ''}

      return this.message
        .toLowerCase()
        .replace(/ex/gi, "X")
        .replace(/ten/gi, "X")
        .replace(/cross/gi, "X")
        .replace(/trans/gi, "X")
        .replace(/x/gi, "X")
    },

    diemen: function () {
      if (this.message == '') {return ''}
      return '(| ' + this.message.replace(/\.+$/, "") + ' |)'
    },

    fozzer: function() {

    },

    marsti: function () {
      if (this.message == '') {return ''}
      return this.message.charAt(0).toUpperCase()
      + this.message.slice(1) + ' -_-'
    },

    chixie: function() {

    },

    skylla: function() {
      if (this.message == '') {return ''}
      var msg = this.message
        .replace(/y/gi, "yy")
      return msg.charAt(0).toUpperCase()
      + msg.slice(1)
    },

    vikare: function() {

    },

    azdaja: function() {

    },

    cirava: function () {
      if (this.message == '') {return ''}
      return this.message
      .toLowerCase()
      .replace(/[^A-Za-z0-9" "]/g,"")
       + ' lmao'
    },

    folykl: function() {

    },

    kuprum: function() {

    },

    zebede: function() {

    },

    boldir: function() {

    },

    charun: function() {

    },

    konyyl: function() {

    },

    polypa: function() {

    },

    wanshi: function() {

    },

    bronya: function() {
      if (this.message == '') {return ''}

      return 'vV ' + this.message.charAt(0).toUpperCase()
      + this.message.slice(1) + ' Vv'
    },

    daraya: function() {

    },

    lanque: function() {

    },

    lynera: function() {

    },

    stelsa: function() {

    },

    tagora: function() {
      if (this.message == '') {return ''}
      return this.message
      .charAt(0).toUpperCase()
      + this.message.slice(1)
      + '\n'
      + '*_________'
    },

    tegiri: function() {

    },

    tirona: function() {

    },

    tyzias: function() {

    },

    ardata: function () {
      if (this.message == '') {return ''}
        var msg = this.message
        return msg.charAt(0).toUpperCase()
        .replace(/i/g, "iii")
        .replace(/I/g, "III")
        + msg.slice(1)
        .replace(/i/g, "iii")
        .replace(/I/g, "III")
    },

    elwurd: function() {

    },

    mallek: function() {

    },

    remele: function() {

    },

    amisia: function () {
      if (this.message == '') {return ''}

      var msg = this.message.split('')

      return msg.map((x) => {
        if (x == 'u') { return x + x }
        if (x == 'U') { return x + x }
        else { return x }
      }).join('')

    },

    galekh: function() {

    },

    nikhee: function() {

    },

    zebruh: function() {

    },

    baizli: function() {

    },

    barzum: function() {

    },

    chahut: function () {
      if (this.message == '') {return ''}
      return this.message
        .toLowerCase()
        .replace(/t/gi, "T")
    },

    karako: function() {

    },

    marvus: function() {

    },

    trizza: function () {
      if (this.message == '') {return ''}
      return this.message
        .toLowerCase()
        .replace(/[^A-Za-z0-9" "]/g,"")
        .replace(/w/gi, "ψ")

    }


  }
})
