
console.log(module);

//바로 모듈로 묶는 것 또한 가능
module.exports.items =['item1','item2'];
console.log(module);
const person ={
    name:'bob',
}
// 밑에 오브젝트 또한 바로 묶기 가능 
// module.exports.person ={
//     name:'bob',
// }

//오브젝트를 다른이름으로 묶기도 가능. 다른파일에서는 singlePerson으로 쓰일 예정
module.exports.singlePerson = person;

console.log(module);
