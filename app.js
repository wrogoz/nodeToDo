const yargs = require('yargs');
const actions = require('./actions');




yargs.command({
    command:'list',
    description:'showing list of tasks',
    handler:()=>{
        actions.showAll()
    }
})

yargs.command({
    command:'add',
    description:'adding new task',
    builder:{
        task:{
            type:"string",
            demand:true
        }
    },
    handler:(argv)=>{
       actions.addNewTask(argv.task)
    }
})

yargs.command({
    command:'remove',
    description:'removing task',
    builder:{
        task:{
            type:"string",
            demand:true
            }
    },
    handler:(argv)=>{
        actions.removeTaskbyName(argv.task)
    }
})

yargs.command({
    command:'deleteAll',
    description:'deleting all tasks',
    handler:()=>{
        actions.clearList()
    }
})

yargs.parse()