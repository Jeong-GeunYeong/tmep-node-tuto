const sayHi = (name) =>{
    console.log(`Hello there ${name}`)
}

//함수를 모듈화 시켜서 다른 파일에 배포하는 방법
// console.log(module);
module.exports = sayHi;
console.log(module);//콘솔에 모듈을 찍어보고 exports에 뭐가 모듈화 되어있는지 확인 가능