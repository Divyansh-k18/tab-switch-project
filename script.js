var buttons = document.querySelectorAll(".tab-btn")
var content = document.querySelectorAll(".tab-content")
 buttons.forEach(button => {
    button.addEventListener("click",() => {
        buttons.forEach(function(btn){
            btn.classList.remove("active");
            btn.style.borderBottom = "none"
            button.style.borderBottom = "3px solid blue"
        });
        content.forEach(contents => {
            contents.classList.remove("active")
        })
        button.classList.add("active")
        const tabnumber = button.getAttribute("data-tab");
        document.getElementById("content-" + tabnumber).classList.add("active")
        
    })
 })