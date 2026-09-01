// total button making
let totalCardCount = document.querySelectorAll('#cards-sec .card').length;
const total = document.getElementById('total-count');
const jobCounter = document.getElementById('jobsCount');
function updateCount() {
    total.innerText = totalCardCount;
    jobCounter.innerText = totalCardCount;
}
updateCount();
//delete functionality
for (let i = 1; i <= 8; i++) {
    document.getElementById(`del-btn-${i}`).addEventListener('click', function () {
        document.getElementById(`card-${i}`).classList.add('hidden');
        totalCardCount--;
        updateCount();
    });
}
// //rejecting functionality
// const totalRejectCount=document.getElementById('rejected-count');
// let rejectCount=0;
// function updateRejectCount(){
//     totalRejectCount.innerText=rejectCount;
// }
// for(let j=1;j<=8;j++){
//     document.getElementById(`reject-${j}`).addEventListener('click',function(){
//         btnChanger2(`job-${j}-apply`,`newBtn-${j}-adder`,`job-${j}-btn`,`reject-${j}`,j);
//         rejectCount++;
//     });
// }



// document.getElementById('job-1-btn').addEventListener('click',function(){
//     btnChanger('job-1-apply','newBtn-1-adder','job-1-btn');
// });
// //card-2
// document.getElementById('job-2-btn').addEventListener('click',function(){
//     btnChanger('job-2-apply','newBtn-2-adder','job-2-btn');
// });
// //card-3
// document.getElementById('job-3-btn').addEventListener('click',function(){
//     btnChanger('job-3-apply','newBtn-3-adder','job-3-btn');
// });
// //card-4
// document.getElementById('job-4-btn').addEventListener('click',function(){
//     btnChanger('job-4-apply','newBtn-4-adder','job-4-btn');
// });
// //card-5
// document.getElementById('job-5-btn').addEventListener('click',function(){
//     btnChanger('job-5-apply','newBtn-5-adder','job-5-btn');
// });
// //card-6
// document.getElementById('job-6-btn').addEventListener('click',function(){
//     btnChanger('job-6-apply','newBtn-6-adder','job-6-btn');
// });
// //card-7
// document.getElementById('job-7-btn').addEventListener('click',function(){
//     btnChanger('job-7-apply','newBtn-7-adder','job-7-btn');
// });
// //card-8
// document.getElementById('job-8-btn').addEventListener('click',function(){
//     btnChanger('job-8-apply','newBtn-8-adder','job-8-btn');
// });


let interViewCount = 0;
let rejectCounter = 0;
const totalInterViewCount=document.getElementById('interview-count');
const rejectCountUpdater=document.getElementById('rejected-count');
document.addEventListener('click',function(event){
    if(event.target.id==='job-1-btn'){
        interViewCount++;
        btnChanger('job-1-apply','newBtn-1-adder','job-1-btn','reject-1');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-2-btn'){
        interViewCount++;
        btnChanger('job-2-apply','newBtn-2-adder','job-2-btn','reject-2');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-3-btn'){
        interViewCount++;
        btnChanger('job-3-apply','newBtn-3-adder','job-3-btn','reject-3');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-4-btn'){
        interViewCount++;
        btnChanger('job-4-apply','newBtn-4-adder','job-4-btn','reject-4');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-5-btn'){
        interViewCount++;
        btnChanger('job-5-apply','newBtn-5-adder','job-5-btn','reject-5');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-6-btn'){
        interViewCount++;
        btnChanger('job-6-apply','newBtn-6-adder','job-6-btn','reject-6');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-7-btn'){
        interViewCount++;
        btnChanger('job-7-apply','newBtn-7-adder','job-7-btn','reject-7');
        totalInterViewCount.innerText=interViewCount;
    }
    else if(event.target.id==='job-8-btn'){
        interViewCount++;
        btnChanger('job-8-apply','newBtn-8-adder','job-8-btn','reject-8');
        totalInterViewCount.innerText=interViewCount;
    }


    // rejected count

    else if(event.target.id==='reject-1'){
        rejectCounter++;
        btnChanger2('job-1-apply','newBtn-1-adder','job-1-btn','reject-1');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-2'){
        rejectCounter++;
        btnChanger2('job-2-apply','newBtn-2-adder','job-2-btn','reject-2');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-3'){
        rejectCounter++;
        btnChanger2('job-3-apply','newBtn-3-adder','job-3-btn','reject-3');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-4'){
        rejectCounter++;
        btnChanger2('job-4-apply','newBtn-4-adder','job-4-btn','reject-4');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-5'){
        rejectCounter++;
        btnChanger2('job-5-apply','newBtn-5-adder','job-5-btn','reject-5');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-6'){
        rejectCounter++;
        btnChanger2('job-6-apply','newBtn-6-adder','job-6-btn','reject-6');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-7'){
        rejectCounter++;
        btnChanger2('job-7-apply','newBtn-7-adder','job-7-btn','reject-7');
        rejectCountUpdater.innerText=rejectCounter;
    }
    else if(event.target.id==='reject-8'){
        rejectCounter++;
        btnChanger2('job-8-apply','newBtn-8-adder','job-8-btn','reject-8');
        rejectCountUpdater.innerText=rejectCounter;
    }
})

