import { parkInfoTemplate, footerTemplate } from "./template.mjs";
import enableNavigation from "./navigation.mjs";


function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".hero-banner_content").innerHTML =
    parkInfoTemplate(data);
}

function setParkFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setParkFooter(parkData);
    enableNavigation();
}