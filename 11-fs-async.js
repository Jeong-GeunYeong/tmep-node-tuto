// const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt','utf8', (err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/secnod,txt', 'utf8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile('/content/result-async.txt',
//         `Here is the result: ${first},${second}`,
//     });
// });

//그냥 싱크와 a싱크의 차이점을 잘 모르갰음
//차이점
//1. async는 콜백을 사용함(콜백 지옥..??)
//2. 콜백을 사용함으로 써 async의 경우 여러개의 파일을 읽을 수 있지만
//   sync는 하나만 읽기가 가능하다.
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')