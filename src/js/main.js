import { getParkData } from "./parkService.mjs";
const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero-banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states.join(', ')}</span>
    </p>
`;    
}    

document.querySelector(".hero-banner_content").innerHTML = parkInfoTemplate(parkData);

function imageEditor() {
    return `<img src="https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg" alt="${parkData.fullName}">`
}

document.querySelector(".hero-banner").innerHTML = imageEditor();

