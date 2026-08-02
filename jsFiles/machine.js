function btnChanger(id1,id2,id3){
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
}