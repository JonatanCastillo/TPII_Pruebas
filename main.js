const menus = document.querySelectorAll(".submenu");
const submenus = document.querySelectorAll(".btn");
const menus_lv2 = document.querySelectorAll(".submenu-lv2");
// console.log(menus);
function activeMenu(){
    // this.classList.toggle("active");
    // this.classList.toggle("active-btn");
    if(this.classList.contains("active")){
        this.classList.remove("active");
        this.classList.remove("active-btn");
    }
    else{
        // menus.forEach((item)=>{
        //     // console.log("Hola", item);
        //     item.classList.remove("active");
        //     item.classList.remove("active-btn");
    
        // });
        this.classList.add("active");
        this.classList.add("active-btn");
    }
}
for (let i = 0; i < menus.length; i++){
    menus[i].addEventListener('click', activeMenu);
}







