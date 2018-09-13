window.onload=function () {
//购物袋
    let bagmax=document.querySelector(".max .bag");
    let bacgclik=document.querySelector(".max .navul li:last-child");

    let bagmin=document.querySelector(".mix .bag");
    let backclicks=document.querySelector(".mix .icons li:last-child");

    let navmax=document.querySelector(".max");
    let navmix=document.querySelector(".mix");

    let mixHidden=document.querySelector(".mix-hidden");
    let row=document.querySelector(".bread-inside-top");
    let coloum=document.querySelector(".bread-inside-bottom");
    let cross=document.querySelector(".icons li:first-child");
    let bagmove=document.querySelector(".icons li:last-child");
    let body=document.querySelector("body");

    let jiahao=document.querySelectorAll(".rowshow .jiahao");
    let yincangul=document.querySelectorAll(".rowshow ul");
    // console.log(mixHidden, row, coloum, cross,bagmove);
    // console.log(jiahao,yincangul);
    //    第一屏设置
    // console.log(bagmax,bacgclik,bagmin,backclicks,);
    bacgclik.onclick=function () {
        let statusmax=bagmax.style.display;
        console.log(statusmax);
        if (statusmax=="none"){
            bagmax.style.display="block";
        }else if(statusmax=="block"){
            bagmax.style.display="none";
        }
    }

    window.onscroll=function(){
        let bh=document.body.scrollTop||document.documentElement.scrollTop;
        // console.log(bh);
        if (bh>=40){
            navmax.classList.add("flxation");
            navmix.classList.add("flxation");
            bagmax.style.top="47px";
            bagmin.style.top="47px";

        }else {
            navmax.classList.remove("flxation");
            navmix.classList.remove("flxation");
            bagmax.style.top="87px";
            bagmin.style.top="87px";
        }
    }
    //最小屏设置
    backclicks.onclick=function () {
        let statusmix=bagmin.style.display;
        // console.log(statusmix);
        if (statusmix=="none"){
            bagmin.style.display="block";
        }else if(statusmix=="block"){
            bagmin.style.display="none";
        }
    }
    cross.onclick=function () {
        let histatus=mixHidden.style.display;
        // console.log(histatus);
        if (histatus=="none") {
            mixHidden.style.display="block"
            body.style.overflow="hidden";
            bagmove.style.transform="translateX(200px)";
            row.classList.add("rotate");
            coloum.classList.add("rotate");
            navmix.style.background="#000";

        }else if(histatus=="block"){
            mixHidden.style.display="none"
            body.style.overflow="";
            bagmove.style.transform="translateX(0)";
            row.classList.remove("rotate");
            coloum.classList.remove("rotate");
            navmix.style.background="#333333";
        }
    }

//    点加号出现底部
//
    for (let i=0;i<jiahao.length;i++) {
        jiahao[i].onclick=function () {
            yincangul[i].classList.toggle("yincang");
            this.classList.toggle("jhrotate");
        }
    }







}