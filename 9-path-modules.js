//path경로를 받아서 여러 기능들을 쓰고 다른 파일들을 참조하는 느낌인거 같은데
//아직 쓰기엔 쫌 많이 어려운 것 같음 정확히 이해 못했음 ;;;;;;


const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//절
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);