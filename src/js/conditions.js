import { getParkData, getParkAlerts, getParkVisitorCenters, getActivitiesData} from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, setActivitiesTemplate } from "./template.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul")
    alertsContainer.innerHTML = "";
    const alertsHTML = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("beforeend", alertsHTML.join(""));
}
function setVisitorCenters(centers) {
    const centersContainer = document.querySelector(".center > ul")
    const visitorCentersHTML = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("beforeend", visitorCentersHTML.join(""));
    console.log(centersContainer);
}
function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul")
    const activitiesHTML = activities.map(setActivitiesTemplate);
    activitiesContainer.innerHTML = activitiesHTML.join("");
    console.log(activitiesContainer);
}
async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getParkVisitorCenters(parkData.parkCode);
    const activitiesData = await getActivitiesData(parkData.parkCode);
    console.log(visitorCenters);
    console.log(activitiesData);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(activitiesData);
}

init();
