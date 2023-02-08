function bestPlan(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../json/bestPlan.json");
    xmlReq.send();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let response=JSON.parse(xmlReq.responseText);
            for(let i=0;i<response.length;i++){
                document.querySelector(".best .swiper .swiper-wrapper").innerHTML+=`
                <div class="card swiper-slide px-2 py-3 pb-0 position-relative">
                <img src=${response[i]["img-src"]} class="card-img-top rounded-3" alt=${response[i]["city"]}>
                <div class="card-body px-1 pt-4 pb-5">
                    <h5 class="card-title">${response[i]["city"]}</h5>
                    <p class="card-text text-black-50 fw-bold pb-4"><i class="fa-solid fa-location-dot fs-6 me-2"></i> ${response[i]["location"]}</p>
                    <button class="w-100 position-absolute bottom-0 end-0 py-2"><a class="text-center text-white" href="#">${response[i]["days"]}</a></button>
                </div>
            </div>`
            };
        }
    }
    // swiper
const swiper = new Swiper('.swiper', {
    spaceBetween: 60,
    centeredSlider: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    // Optional parameters
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3.2,
        },
    }
});
}
bestPlan();