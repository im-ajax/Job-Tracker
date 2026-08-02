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
//items selector color pallete
// needs rework
function selectorColor(id1,id2){
    const btn=document.getElementById(id1);
    btn.style.backgroundColor='white';
    btn.style.color='black';
    btn.style.border='1px solid black';
    selectorColor(id2)
}