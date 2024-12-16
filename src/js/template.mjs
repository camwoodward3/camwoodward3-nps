import spritePath from '../images/sprite.symbol.svg';

export function parkInfoTemplate(info) {
    const name = info.name || "Unknown Park";
    const designation = info.designation || "Unknown Designaton";
    const states = info.states || "Unknown State(s)";
    return `<a href="/" class="hero-banner_title">${name}</a>
    <p class="hero-banner_subtitle">
        <span>${designation}</span>
        <span>${states}</span>
    </p>`;    
}    

export function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card_img">
        <h3 class="media-card_title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
    </div>`;
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((addresses) => addresses.type === "Mailing");
    return mailing
}

function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers)

    return `<section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div><p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.statCode} ${mailing.postalCode}</p></div>
        <h4>Phone:</h4>
        <p>${voice}</p>
    </section`;
}

export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure"
            break;
        default:
            alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
        <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>
    <div>    
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
    </div></li>`;
}   

export function visitorCenterTemplate(center) {
    return `<li class="centers">
    <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </li>`
}

export function setActivitiesTemplate(activities) {
    return `
    <li class="activity">${activities.name}</li>`
}

export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
        <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="/images/sprite.symbol.svg#${iconId}"></use>
    </svg>`;
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
    return `<details name="vc-details" id="${elementId}">
            <summary>
                ${iconTemplate(iconId)}
                ${summaryText}
            </summary>
            ${content}
            </details>`;
}

export function vcTitleTemplate(text) {
    return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
    const image = data.images[0];
    return `<figure>
    <img src="${image.url}" alt="${image.altText}" />
    <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
    </figure>
    <p>${data.description}</p>`;
}

export function listTemplate(data, contentTemplate) {
    return `<ul>${data.map(contentTemplate).join("")}</ul>`;
}

function vcAddressTemplate(data) {
    return `<section>
                <h3>${data.type} Adress</h3>
                <address>
                    ${data.line1}<br />
                    ${data.city}, ${data.stateCode} ${data.postalCode}
                </address>
            </section>`;
}

export function vcAddressesListTemplate(data) {
    const types = ["Physical", "Mailing"];
    return types
        .map((type) => {
            const address = data.find((addr) => addr.type === type);
            return address ? vcAddressTemplate(address) : "";
        })
        .join("");
}

export function vcAmenityTemplate(data) {
    return `<li>${data}</li>`
}

export function vcDirectionsTemplate(data) {
    return `<li>${data}</p>`;
}

export function vcContactsTemplate(data) {
    const email = data.emailAddresses?.[0]?.emailAddress || "No email available";
    const phone = data.phoneNumbers?.[0]?.phoneNumber || "No phone number available";
    return `<section class="vc-contact___email">
                <h3>Email Address</h3>
                <a href="email:${email}">${email}</a>
            </section>
            <section class="vc-contact___phone">
                <h3>Phone Numbers</h3>
                <a href="tel:+1${phone}">${phone}</a>
            </section>`;
}

export function vcImageTemplate(data) {
    return `<li><img src="${data.url}" alt="${data.altText}"></li>`;
}