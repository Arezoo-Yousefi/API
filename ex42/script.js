let images = ["batmanwb", "flashwb", "supermanwb", "wonder_womanwb"];
images.forEach(element =>{
    let imgElement = document.createElement('img');
    imgElement.setAttribute("src", "img/" + element + ".png");
    document.body.appendChild(imgElement);
    imgElement.addEventListener("mouseover", function(event){
        let srcAtt = imgElement.getAttribute("src");
        srcAtt = srcAtt.replace("wb","");
        console.log(srcAtt);
        imgElement.setAttribute("src", srcAtt);
    })
    imgElement.addEventListener("mouseleave", function(event){
        let srcAtt = imgElement.getAttribute("src");
        srcAtt = srcAtt.replace(".","wb.");
        imgElement.setAttribute("src", srcAtt);
    })
    imgElement.onclick = function(event){
        alert(`${element.toUpperCase().replace("WB","")}`);
    }
})
