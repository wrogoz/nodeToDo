const chalk = require('chalk');
const fs = require('fs');


const readList=()=>{
  return   JSON.parse(fs.readFileSync('tasks.json').toString());

}

const showAll = ()=>{
    const data=readList();
    console.log(chalk.green(`***** TODO *****`))
   for (let index = 0; index < data.length; index++) {
    console.log(`${chalk.yellow(index+1)}: ${data[index].task}`)

   }
   console.log(chalk.green(`****************`))

}

const addNewTask=(task)=>{
    const data = readList();
    let checkDuplicate=data.filter((el)=>{
        return el.task===task
    })
    if(checkDuplicate.length===0){
        data.push({task:task})
        fs.writeFileSync('tasks.json',JSON.stringify(data))
        console.log(chalk.red(`task : "${task}" added`))
    }else{
        console.log('you got this task on list')
    }


}

const removeTaskbyName = (task)=>{
    const data = readList();
    const newData = data.filter((el)=>{
        return el.task!==task
    })
    fs.writeFileSync('tasks.json',JSON.stringify(newData))
    console.log(chalk.red(`task : "${task}" deleted`))

}

const clearList = ()=>{
    fs.writeFileSync('tasks.json',JSON.stringify([]))
    console.log(chalk.red('list deleted'))
}

module.exports={showAll,addNewTask,removeTaskbyName,clearList}