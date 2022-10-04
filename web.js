function boot(){
    var ID3 = document.getElementById("IDtext").value;
    console.log(ID3);
}

function CNB(){
    removeNodes()
}

function removeNodes(){
    const rtext = document.getElementById("IDtext").parentNode;
    const parentrtext = rtext.parentNode;
    parentrtext.removeChild(rtext)
    console.log(parent);
}