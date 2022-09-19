//fs 두가지 기능 

//읽기파일 동기화 = 파일 동기화????
//현재 추측상 파일을 읽고 쓰는 느낌임 read, write;
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//파일이 없는 경우 파일 위치를 설정하여 파일 하나를 만듬
//flag의 역할을 잘모르겠음 결과는 있고없고 차이는 없다 일단 내가보기엔;;;;;;;
writeFileSync('./content/result-sync.txt',
`여기에 결과 옛다 임마 : ${first}, ${second}`,
{flag:'a'})

console.log(first, second); 