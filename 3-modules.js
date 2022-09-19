// CommonJS - every file is module (by default) - 모든 파일은 모듈로 이루어짐 
//Modules - Encapsulated Code (only share minimum)

//모듈화한 변수나 함수를 require로 받고()안에 파일의 상대경로를 넣어준다.
const names  = require('./4-names')
const sayHi  = require('./5-utils')
const data = require('./6-alternative-flavor');

//현재 7페이지 에서는 module상태로 묵지 않았지만
//require로 페이지를 받아와 안에있던 함수가 실행 되어버림
//변수를 할당하지 않았음에도 실행되어짐 
require('./7-mind-grenade')


sayHi('susan')
// sayHi(jhon)
sayHi(names.jhon)
sayHi(names.peter)


