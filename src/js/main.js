import { getParkData, getParkLink, getInfoLinks, getParkAlerts} from "./parkService.mjs";
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

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkLink);
}

init();

function enableNavigation() {
    // use a queryelector to get the menu buttons
    const menuButton = document.getElementById('global-nav-toggle')
    // when the main menu button is clicked:
    menuButton.addEventListener("click", (ev) => {
       let target = ev.target;
       // toggle the show class on the global-nav
       document.querySelector(".global-nav").classList.toggle("show")
       //check to see if target is the button or something
        if (target.tagName != "BUTTON") {
            target = target.closest("button");
        }
       // check to see if we just opened or closed the menu
        if (document.querySelector(".global-nav").classList.contains("show")) {
            // if we opened it then set the aria-expanded attribute on the button to true
            target.setAttribute("aria-expanded", true);
        } else {
            // if we closed it then set the aria-expanded attribute on the button to false
            target.setAttribute("aria-expanded",  false);
        }

        console.log("toggle");
    });
}

init();
enableNavigation()