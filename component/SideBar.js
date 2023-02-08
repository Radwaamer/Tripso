//create side bar
function createSidebar(){
    let sideText=`<h1 class="text-center mb-5 black"><span class="main-color">Tri</span>pso</h1>
    <div class="items d-flex flex-column justify-content-between">
        <ul>
            <li>
                <a class="d-flex p-3 grey" href="../dashboard/dash.html">
                    <i class="fa-solid fa-house-chimney fs-5 me-3"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li class="my-4">
                <a class="d-flex p-3 grey" href="../Insert/insert.html">
                    <i class="fa-solid fa-box fa_fw fs-5 me-3"></i>
                    <p>Package Trips</p>
                </a>
            </li>
            <li>
                <a class="d-flex p-3 grey" href="dkkkdk">
                    <i class="fa-solid fa-circle-user fs-5 me-3"></i>
                    <p>Client</p>
                </a>
            </li>
        </ul>
        <div class="log-out">
            <a class="d-flex p-3 grey" href="d,dlwl">
                <i class="fa fa-sign-out fs-5 me-3"></i>
                <p>Log Out</p>
            </a>
        </div>
    </div>`
    let sidebar=document.createElement("aside");
    sidebar.innerHTML=sideText;
    sidebar.classList="px-4 py-5 position-fixed top-0 start-0"
    document.body.querySelector("header").after(sidebar);

    // active page style
    document.querySelectorAll("aside ul li a").forEach((a)=>{
        if(a.href.includes(window.location.pathname)){
            a.parentElement.classList.add("active");
        };
    });
}
createSidebar();