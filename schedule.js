const schedule = require('node-schedule');
const updateName = require('./Service/nameUpdataing');
// var rule=new schedule.RecurrenceRule();
// rule.second=1;
const job=schedule.scheduleJob({rule:"1 * * * * *"},()=>{
updateName.updateName("Ganesh");
})
// job.invoke();