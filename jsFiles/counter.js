// total counter
const cardCounter=document.querySelectorAll('#cards-sec .card').length;
const jobCount=document.getElementById('jobsCount');
const totalCount=document.getElementById('total-count');
totalCount.innerText=cardCounter;
jobCount.innerText=cardCounter;

