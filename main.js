let jsonData 
let checkloading
const key = "79DWOl8fX6_GjcUXEAjil5fuZLFH5hn9Lr7MyTd0Epc"
async function getPhotos() {
    const key = "79DWOl8fX6_GjcUXEAjil5fuZLFH5hn9Lr7MyTd0Epc"
    const count = 20
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`
    try{
       const url = await fetch(apiUrl)
       jsonData =  await url.json()
       console.log(jsonData)
    } catch(error){
        alert("404 Error")
    }
}

const applyPhotos = () => {
    checkloading = false
    getPhotos().then(() => {
        const galleryContainer = document.querySelector("#gallery-container");
        for(let i = 0; i < jsonData.length; i++) {
            const div = document.createElement("div");
            div.setAttribute("class", "hover-container");

            const img = document.createElement("img");
            img.setAttribute("src", jsonData[i].urls.regular);
            img.setAttribute("alt", jsonData[i].alt_description)
            div.appendChild(img);

            const a = document.createElement("a");
            a.setAttribute("href", jsonData[i].links.html);
            a.setAttribute("target", "_blank");
            a.appendChild(div);
            galleryContainer.appendChild(a);
        }; 
        checkloading = true   
    }) 
}
applyPhotos()

window.addEventListener('scroll', function() {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1500 && checkloading === true){
        applyPhotos()
    }
})

