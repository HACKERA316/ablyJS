

const bodyControl = document.querySelector("html");

const dataset = bodyControl.dataset;

console.log(dataset)

function refreshController(){

    if (dataset.ablyScriptRefresh === "on"){
        //function text make
        console.log('on')
        refreshEnable();
    }
    else if (dataset.ablyScriptRefresh === "off"){
        //function text make
        console.log('off')
        refreshDisable();
    }
    else if (dataset.ablyScriptRefresh === "refreshFULL"){
        //function text make
        refreshFull();
        console.log('full')
    }
    else{
        console.log('null prompt tag');
    }
//functions

//function refresh full
    function refreshFull(){
    }


//function refresh on
    function refreshEnable(){

    }

//function refresh off
    function refreshDisable(){

    }

}




















