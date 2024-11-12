import { getParkData, getParkLink } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import {parkInfoTemplate, mediaCardTemplate, footerTemplate} from "./template.mjs";
const parkData = getParkData();
const parkLink = getParkLink();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.querySelector(".hero-banner_content").innerHTML = parkInfoTemplate(parkData);

function imageEditor() {
    return `<img src="https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg" alt="${parkData.fullName}">`
}

document.querySelector(".hero-banner").innerHTML += imageEditor();


function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    const html = data.map(mediaCardTemplate)
    infoEl.innerHTML = html.join("");
}


setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkLink);
setParkFooter(parkData);