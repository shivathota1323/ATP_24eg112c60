// TODO app modules

 // 1. Validate task title (not empty, min 3 chars)
function validateTitle(title)
{
   // Your code here
   if(!title)
   {
    return "enter tilte"
   }
   else if(title.length()<=3)
   {
    return "title must be more thta 3 char's "
   }
   return true;
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) 
{
    const priorities=["low","medium","high"]
    let isit=priorities.includes(priority)
    if(!isit)
    {
        return "invalid priority"
    }
    return true;
}
function validateDate(date)
{
    let dueDate=new Date(2026-10-23)
    let today=new Date()
    if(!(dueDate>today))
    {
        return "date completed"
    }
    return true;
}
export {validatePriority,validateTitle,validateDate};
