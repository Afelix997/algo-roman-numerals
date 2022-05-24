exports.toRoman = function(num) {
        let arab = num
        let answer = []
        let romansObj = {
          1000: 'M',
          500: 'D',
          100: 'C',
          50: 'L',
          10: 'X',
          5: 'V',
          1: 'I',
        }
        let keyArr = Object.keys(romansObj)
        keyArr.reverse()
      
        for (let k of keyArr) {
          if (k === arab) {
            answer.push(romansObj[k])
          }
          if ((arab % k !== 0) && (arab % k < arab)) {
            let counter = Math.floor(arab / k);
      
            for (i = counter; i > 0; i--) {
              answer.push(romansObj[k])
            }
            arab = arab % k
          }
      
          if ((arab < 5) && (arab > 0)){
            let counter = Math.floor(arab / k)
            for (i = counter; i > 0; i--) {
              answer.push(romansObj[k])
            }}
           
      
          }
       
          return answer.join('').toString();
        }