const moment = require('moment')
moment.locales("en-au")
function formatTime(start, end){
    if(new Date(start).getDate() - new Date(end).getDate() === 0){
        console.log(moment(start).format('HH:mm:ss'))
        console.log(moment(end).format('HH:mm:ss'))
    }
}
formatTime('2022-05-23T01:31:00Z', '2022-05-23T01:32:01Z')
