import {validatePriority,validateTitle,validateDate} from "./validator.js"
let tasks=[];
let complete=false;
function addTask(title,priority,dueDate)
{
    if(!validateTitle && !validatePriority && !validateDate)
    {
        return false;
    }
    const task={title,priority,dueDate}
    tasks.push(task)
    return "task added successfully";
}
function getAllTasks()
{
    return tasks;
}
function completeTask(taskid)
{
    complete=true;
    return complete;
}
export {completeTask,getAllTasks,addTask}