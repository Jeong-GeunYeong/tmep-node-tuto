//온갓 정보들을 가지고있다는데 아직 이해못함 ;;;;;;
const os = require('os')

// info about current user; 
//현재 유저의 정보를 os를 이용하여 현재 이 컴퓨터의 유저정보 확인
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
//시스템이 가동된 시간 (이건 넘 신기한뎅??)
console.log(`The System Uptime is ${os.uptime} secnods`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);