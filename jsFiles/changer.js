// total counter
    const cardCounter=document.querySelectorAll('#cards-sec .card').length;
    const jobCount=document.getElementById('jobsCount');
    const totalCount=document.getElementById('total-count');
    totalCount.innerText=cardCounter;
    jobCount.innerText=cardCounter;

// button selector
// needs to be revised
document.getElementById("selector-1").addEventListener('click',function(){
    selectorColor('selector-2','selector-3');
})
document.getElementById("selector-2").addEventListener('click',function(){
    selectorColor('selector-1','selector-3');
})
document.getElementById("selector-3").addEventListener('click',function(){
    selectorColor('selector-1','selector-2');
})


//card 1
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-1-apply','newBtn-1-adder','job-1-btn');
});
//card-2
document.getElementById('job-2-btn').addEventListener('click',function(){
    btnChanger('job-2-apply','newBtn-2-adder','job-2-btn');
});
//card-3
document.getElementById('job-3-btn').addEventListener('click',function(){
    btnChanger('job-3-apply','newBtn-3-adder','job-3-btn');
});
//card-4
document.getElementById('job-4-btn').addEventListener('click',function(){
    btnChanger('job-4-apply','newBtn-4-adder','job-4-btn');
});
//card-5
document.getElementById('job-5-btn').addEventListener('click',function(){
    btnChanger('job-5-apply','newBtn-5-adder','job-5-btn');
});
//card-6
document.getElementById('job-6-btn').addEventListener('click',function(){
    btnChanger('job-6-apply','newBtn-6-adder','job-6-btn');
});
//card-7
document.getElementById('job-7-btn').addEventListener('click',function(){
    btnChanger('job-7-apply','newBtn-7-adder','job-7-btn');
});
//card-8
document.getElementById('job-8-btn').addEventListener('click',function(){
    btnChanger('job-8-apply','newBtn-8-adder','job-8-btn');
});
