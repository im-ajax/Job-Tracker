
document.getElementById('job-1-btn').addEventListener('click',function(){
    const hideBtn=document.getElementById('job-1-apply');
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
    document.getElementById("newBtn-adder").appendChild(statusBox);
    document.getElementById('job-1-btn').disabled='true';
});