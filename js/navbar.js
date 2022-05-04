const submenu = document.querySelectorAll(".btn");
const submenu2 = document.querySelectorAll(".btn-lv2");
const submenu3 = document.querySelectorAll(".btn-lv3");

for (let i = 0; i < submenu.length; i++){
    submenu[i].addEventListener('click', (e)=>{
        // console.log(submenu);
        let menu = e.target.parentElement.parentElement;
        console.log(menu);
        if(menu.classList.contains("active")){
            menu.classList.remove("active");
            menu.classList.remove("active-btn");
        }
        else{
            menu.classList.add("active");
            menu.classList.add("active-btn");
        }
    });
}

for (let i = 0; i < submenu2.length; i++){
    submenu2[i].addEventListener('click', (e) =>{
        let menu = e . target.parentElement.parentElement;
        console.log(menu);
        if(menu.classList.contains("active-lv2")){
            menu.classList.remove("active-lv2");
        }
        else{
            menu.classList.add("active-lv2");
        }
    })
}

for (let i = 0; i < submenu3.length; i++){
    submenu3[i].addEventListener('click', (e) =>{
        let menu = e . target.parentElement.parentElement;
        console.log(menu);
        if(menu.classList.contains("active-lv3")){
            menu.classList.remove("active-lv3");
        }
        else{
            menu.classList.add("active-lv3");
        }
    })
}