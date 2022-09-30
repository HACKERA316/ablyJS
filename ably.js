const bodyControl = document.querySelector("#ablyDataStart");



const dataset = bodyControl.dataset;




function refreshController(){

    if (dataset.ablyScriptRefresh === "on"){
        ablyScriptRefresh();
    }
    else if (dataset.ablyScriptRefresh === "off"){
    }
    else if (dataset.ablyScriptRefresh === "refreshFULL"){
    }
    else{
        console.log("tag not found ")
    }




    //ref on
    function ablyScriptRefresh() {
        console.log("on")



    }









}




refreshController();