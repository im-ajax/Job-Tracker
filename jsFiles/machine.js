function btnChanger(id1,id2,id3,id4,interviewCounter){
    const hideBtn=document.getElementById(id1);
    hideBtn.classList.add("hidden");
    const statusBox = document.createElement("div");
    statusBox.textContent = "Interview";
    statusBox.classList.add(
        "bg-success",
        "text-success-content",
        "rounded-md",
        "px-4",
        "py-2",
        "font-semibold",
        "inline-block",
        "text-center",
        "text-white"
    );
    document.getElementById(id2).appendChild(statusBox);
    document.getElementById(id3).disabled='true';
    document.getElementById(id4).disabled='true';
    interviewCounter++;
    const interviewPreview=document.getElementById('interview-count');
    interviewPreview.innerText=interviewCounter;
}
//rejection button
function btnChanger2(id1,id2,id3,id4,rejectCount){
    const hideBtn=document.getElementById(id1);
    hideBtn.classList.add("hidden");
    const statusBox = document.createElement("div");
    statusBox.textContent = "Rejected";
    statusBox.classList.add(
        "bg-error",
        "text-success-content",
        "rounded-md",
        "px-4",
        "py-2",
        "font-semibold",
        "inline-block",
        "text-center",
        "text-white"
    );
    document.getElementById(id2).appendChild(statusBox);
    document.getElementById(id3).disabled='true';
    document.getElementById(id4).disabled='true';
    rejectCount++;
    const rejectPreview=document.getElementById('rejected-count');
    rejectPreview.innerText=rejectCount;
}
