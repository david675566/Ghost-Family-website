function SetCwinHeight(){
var iframeid=document.getElementById("body-content");
if (document.getElementById){
    if (iframeid && !window.opera){
        if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight){
            iframeid.height = iframeid.contentDocument.body.offsetHeight;
        }else if(iframeid.Document && iframeid.Document.body.scrollHeight){
            iframeid.height = iframeid.Document.body.scrollHeight;
        }
    }
}
}