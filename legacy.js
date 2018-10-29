console.log(msg)
msg = msg.split('')

return msg.map((x) => {
  if (x == 'x' || x == 'X') { return x.toUpperCase() }
  else { return x.toLowerCase() }
}).join('')

// xefros: done
// marsti: remove full stops, add face variation.
// diemen: requires extra work and maybe replaying his friendsim
// all: check capitalisation, add capital 'i's
