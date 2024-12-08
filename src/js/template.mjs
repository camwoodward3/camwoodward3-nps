 export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero-banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
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

function getMalingAddress(addresses) {
    const mailing = addresses.find((addresses) => addresses.type === "Mailing");
    return mailing
}

function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function footerTemplate(info) {
    const mailing = getMalingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers)

    return `<section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div><p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.statCode} ${mailing.postalCode}</p></div>
        <h4>Phone:<h4>
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
        <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
    </svg>
    <div>    
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
    </div></li>`;
}   

export function visitorCenterTemplate(center) {
    return `<li class="centers">
    <h4>${center.name}</h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </li>`
}

export function setActivitiesTemplate(activities) {
    return `
    <li class="activity">${activities.name}</li>`
}