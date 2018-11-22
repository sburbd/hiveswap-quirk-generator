// notes
// zebruh and karako left

clear if empty
if (this.message == '') {return ''}

capitalise first letter
return msg.charAt(0).toUpperCase()
+ msg.slice(1)

no punctuation
.replace(/[^A-Za-z0-9" "]/g,"")

no punctuation at end of string only
.replace(/[^A-Za-z0-9\s]/g, '')

except commas
.replace(/[^A-Za-z0-9\s\,]/g, '')

check for new line (used for bronya and galekh)
//

capitalise i words
.replace(/\bi\b/gi, "I")
.replace(/\bi'\b/gi, "I'")

replace letter in word
.replace(/t/gi, "T")

replace words
.replace(/\bis\b/g, '=')
.replace(/\bare\b/g, '=')

replace smileys
.replace(/(:\))/g, ":.)")
.replace(/(:\()/g, ":.(")
.replace(/(;\()/g, ";,(")
.replace(/(;\()/g, ";,)")

randomly generate different spaces between words.
this isnt very useful but im still proud of this
.replace(/\s+/g, function() {
  var sp = ' '.repeat((Math.floor(Math.random() * 5) + 1))
  return sp
})

oh I am SO proud of this one.
different depending on whether or not newline
used for bronya and galekh
// if bullet point
if (RegExp('\n').test(this.message) == true) {
  var num = 1

  return '1. ' + this.message.charAt(0).toUpperCase()
  + this.message.slice(1)
  .replace(/\n/g, function() {
    num ++;
    return `\n${num.toString()}. `
  })
}

else {
  return 'vV ' + this.message.charAt(0).toUpperCase()
  + this.message.slice(1) + ' Vv'
}
