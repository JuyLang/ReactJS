// module import /export

// lấy về là import 

import loger,{
    warn ,
    err,
    duy

} from "./moduleloger.js"

console[warn](loger(duy))
console[err](loger(duy))


// cách lấy hết tất cả các const của modulelogger.js 
import * as contact from  "./modulecontact.js"
console.log(contact)
// contact ở dạng object