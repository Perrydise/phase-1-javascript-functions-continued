// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`
}

function wrapAdjective(adj = '*'){
    const greeting = 'You are ';
    return function(endGreeting = 'a hard worker'){
        return `${greeting}${adj}${endGreeting}${adj}!`
        }
    }
wrapAdjective('||')("a dedicated programmer");