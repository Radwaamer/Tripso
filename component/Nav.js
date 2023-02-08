function header(){
    let headerText=`<nav class="d-flex justify-content-between align-items-center">
    <h4 class="me-5 black">${document.title}</h4>
    <form class="position-relative flex-grow-1 pe-4">
        <input class="rounded-pill p-3 w-100 border-0 ps-5" type="text" placeholder="Type to Search anything">
        <input class="grey position-absolute top-50 start-0 ms-3 translate-middle-y fs-4 fa-solid fa-magnifying-glass" role="button" type="search" name="search-data-leak" id="search">
    </form>
    <div class="icons ps-3 d-flex">
        <button class="ms-5 fs-4 black"><i class="fa-regular fa-bell"></i></button>
        <button class="mood ms-4 me-5 fs-4 black"><i class="fa-solid fa-moon"></i></button>
    </div>
    <div class="profile d-flex align-items-center gap-3">
        <img class="rounded-circle" src="../files/imgs/fly.jpg" alt="">
        <p class="black">Hi, Ahmed</p>
    </div>
</nav>`
    let header=document.createElement("header");
    header.innerHTML=headerText;
    header.classList="my-5 pe-5"
    document.body.querySelector(".main").prepend(header);

    //enable dark mood
    document.querySelector("header nav .icons .mood").onclick=function(){
        document.body.classList.toggle("active");
        if(document.body.classList.contains("active")){
            this.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        }else{
            this.innerHTML=`<i class="fa-solid fa-moon"></i>`;
        };
    };
};
header();