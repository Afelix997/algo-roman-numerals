exports.toRoman = function(num) {
 let answer = []
let romansObj = {
  M: '1000',
  CM: '900',
  D: '500',
  CD:'400',
  C: '100',
  XC: '90',
  L: '50',
  XL: '40',
  X: '10',
  IX: '9',
  V: '5',
  IV: '4',
  I: '1',
}

  for (let roman of Object.keys(romansObj)) {
    let arab = Math.floor(num / romansObj[roman]);
    num -= arab * romansObj[roman];
    answer.push(roman.repeat(arab))
  }

return answer.join('').toString();
        }
