// total counter
    const cardCounter=document.querySelectorAll('#cards-sec .card').length;
    const jobCount=document.getElementById('jobsCount');
    const totalCount=document.getElementById('total-count');
    totalCount.innerText=cardCounter;
    jobCount.innerText=cardCounter;


//card 1
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-1-apply','newBtn-1-adder','job-1-btn');
});
//card-2
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-2-apply','newBtn-2-adder','job-2-btn');
});
//card-3
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-3-apply','newBtn-3-adder','job-3-btn');
});
//card-4
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-4-apply','newBtn-4-adder','job-4-btn');
});
//card-5
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-5-apply','newBtn-5-adder','job-5-btn');
});
//card-6
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-6-apply','newBtn-6-adder','job-6-btn');
});
//card-7
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-7-apply','newBtn-7-adder','job-7-btn');
});
//card-8
document.getElementById('job-1-btn').addEventListener('click',function(){
    btnChanger('job-8-apply','newBtn-8-adder','job-8-btn');
});