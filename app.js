/*
npm - global command, comes with node
npm --version

local dependency - use it only in this particular project
npm i <package>

global dpendency - use it in any project
npm install -g <package>
sudo npm install -g <package>

package.json - manifest file (stores importan info about project/package)'
manual approach (create package.json in the root, create properties etc)
npm init(step by step, press enter to skip)
npm init -y (everything default)
*/


//npm에서 필요한 package를 다운 받아서 사용하자
//ex lodash를 이용해서 어지러운 배열을 보다 쉽게 정리하였다!
const _=require('lodash');

const items=[1,[2,[3,[4]]]];
const newItem = _.flattenDeep(items);
console.log(newItem)