//LOOPS
//1)FOR LOOP
for(let i=0; i<=5; i++){
    console.log(i)
    }
    
    //2)FOR OF LOOP
    
    const iterable = [0, 1, 2, 3, 4, 5]
    for (let a of iterable){
        console.log(a)
    }
    
    //
    
    const todo = [
        {
        id:1,
    task: 'meeting',
    isComplate: true
    },
    {
        id:2,
    task: 'shopping',
    isComplate: true
    },
    {
        id:3,
    task: 'doctor',
    isComplate: true
    },
    ]
    
    for(let i=0; i<todo.length; i++){
        console.log(todo[i].id)
        console.log(todo[i].task)
        console.log(todo[i].isComplate)
    }
    
    for(let a of todo){
        console.log(a)
    }
    
    //3)FOR EACH
    
    const myArray = [1, 2, 3, 4]
    myArray.forEach(function(eachItem){
        console.log(eachItem)
    })
    
    //arrow 
    myArray.forEach(eachItem => console.log(eachItem))
    
    
    