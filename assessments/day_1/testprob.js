/*

//task 1
//find bigger from any 2 no.s???
let a=10,b=20;
if(a>b)
{
    console.log("a is bigger,a value is :",a)
}
else{
    console.log("b is bigger,b value is :",b)
}*/



//task 2
//find bigger from any 3 no.s  ???
/*let a=10,b=20,c=15;
if(a>b && a>c)
{
   console.log("a is bigger,a value is :",a) 
}
else if(b>c && b>a)
{
    console.log("b is bigger,b value is :",b)
}
else
{
    console.log("c is bigger,c value is :",c)
}*/


//task 3
//sum of marks [98,78,65,99] ????
/*
let marks=[98,78,65,99]
let v=0;
for(let s=0;s<marks.length;s++)
{
    v=v+marks[s];
}
console.log(v)
console.log(98+78+65+98)

*/
//task 4
//lowest of marks ???
let marks=[98,78,65,99]
let v1=marks[0];
for(let s1=0;s1<marks.length;s1++)
{
    if(v1>marks[s1])
    {
        v1=marks[s1];
    }
}
console.log(v1)