var app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {
  },
  computed: {

    xefros: function () {
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

      return '(| '
      + this.message
      .replace(/\.+$/, "")
      .toLowerCase()
      + ' |)'
    },

    fozzer: function() {

    },

    marsti: function () {
      if (this.message == '') {return ''}

      return this.message.charAt(0)
      .toUpperCase()
      + this.message
      .slice(1)
      .toLowerCase()
      .replace(/\bi\b/gi, "I")
      .replace(/\bi'\b/gi, "I'")

      + ' -_-'
    },

    chixie: function() {

    },

    skylla: function() {
      var msg = this.message
        .replace(/y/gi, "yy")
      return msg.charAt(0).toUpperCase()
      + msg.slice(1)
      .replace(/\bi\b/gi, "I")
      .replace(/\bi'\b/gi, "I'")
    },

    vikare: function() {
      if (this.message == '') {return ''}
      return '~ ' +
      this.message.charAt(0).toUpperCase() +
      this.message.slice(1)
      .replace(/\bi\b/gi, "I")
      .replace(/\bi'\b/gi, "I'")
      + ' ~'
    },

    azdaja: function() {
      if (this.message == '') {return ''}
      return '||| ' +
      this.message.charAt(0).toUpperCase() +
      this.message.slice(1)
      .replace(/\bi\b/gi, "I")
      .replace(/\bi'\b/gi, "I'")
      + ' |||'
    },

    cirava: function () {
      if (this.message == '') {return ''}
      return this.message
      .toLowerCase()
      .replace(/[^A-Za-z0-9" "]/g, '')
       + ' lmao'
    },

    folykl: function() {
      // randomised no. of spaces
      return this.message.toLowerCase()
      .replace(/[^A-Za-z0-9\s]/g, '')
      .replace(/\s+/g, function() {
        var sp = ' '.repeat((Math.floor(Math.random() * 4) + 3))
        return sp
      })
    },

    kuprum: function() {
      if (this.message == '') {return ''}
      return '> ' + this.message.toLowerCase()
      .replace(/\blol\b/g, "LOL")
    },

    zebede: function() {
      return this.message.toLowerCase()
      .replace(/[^A-Za-z0-9\s]/g, '')
      .replace(/s\b/g, 'z')
    },

    boldir: function() {

    },

    charun: function() {
      if (this.message == '') {return ''}
      return this.message.charAt(0).toUpperCase()
      + this.message.slice(1).toLowerCase()
      + '..'
    },

    konyyl: function() {
      return this.message
    },

    polypa: function() {
      if (this.message == '') {return ''}
      return '* ' + this.message
        .toLowerCase()
        .replace(/\band\b/g, '* and')
        .replace(/\bbecause\b/g, '* because')
        .replace(/\bso\b/g, '* so')
      + ' *|'
    },

    wanshi: function() {
      if (this.message == '') {return ''}

      return '[] ' +
      this.message.charAt(0).toUpperCase() +
      this.message.slice(1)
      .toLowerCase()
      .replace(/w/gi, 'W')
      .replace(/[^A-Za-z0-9\s]/g, '') +
      ((Math.random() <= 0.5) ? ' oWo' : ' uWu') +
      ' []'

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
      return this.message.charAt(0).toUpperCase()

      + this.message.slice(1)
      .toLowerCase()
      .replace(/\bi\b/gi, "I")
      .replace(/\bi'\b/gi, "I'")

      + '\n' + '*_________'
    },

    tegiri: function() {
      var msg = this.message
        .replace(/l/gi, "/")
      return msg.charAt(0).toUpperCase()
      + msg.slice(1)
      .replace(/\bi\b/gi, "I")
      .replace(/\bi'\b/gi, "I'")
    },

    tirona: function() {

    },

    tyzias: function() {
      return this.message
      .toLowerCase()
      .replace(/[^A-Za-z0-9\s\,]/g, '')
      .replace(/m/g, "mmmm")
      .replace(/w/g, "wwww")
    },

    ardata: function () {
      if (this.message == '') {return ''}
        return this.message
        .toLowerCase()
        .replace(/i/g, "iii")
        .replace(/(:\))/g, ":.)")
        .replace(/(:\()/g, ":.(")
        .replace(/(;\()/g, ";,(")
        .replace(/(;\()/g, ";,)")

    },

    elwurd: function() {
      return this.message.toLowerCase()
      .replace(/l/gi, "L")
      .replace(/\.+$/, "")
    },

    mallek: function() {
      if (this.message == '') {return ''}
      return this.message.toLowerCase()
      .replace(/[^A-Za-z0-9\s\,]/g, '')
      .replace(/\bi\b/g, 'I')
      .replace(/\bis\b/g, '=')
      .replace(/\bare\b/g, '=')
      .replace(/\bisn\'t\b/, '!=')
      .replace(/\baren\'t\b/, '!=')
      .replace(/is\snot/g, '!=')
      .replace(/am\snot/g, '!=')
      + ';'
    },

    remele: function() {
      return this.message
      .charAt(0).toUpperCase()
      .replace(/ain\b/g, 'aine')
      .replace(/at\b/g, 'ate')
      .replace(/in\b/g, 'ine')
    },

    amisia: function () {
      return this.message.toLowerCase()
      .replace(/u/g, "uu")
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
      return this.message.charAt(0).toUpperCase() +
      this.message.slice(1)
        .toLowerCase()
        .replace(/[^A-Za-z0-9" "]/g,"")
        .replace(/w/gi, "ψ")
        .replace(/\bi\b/gi, "I")
        .replace(/\bi'\b/gi, "I'")

    }


  }
})
