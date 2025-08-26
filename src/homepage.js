import krustyKrabImg from './krustykrab.webp';

export const createHomePage = () => {
    const homeArticle = document.createElement("article");
    homeArticle.id = 'home';

    const homeHeading = document.createElement("h1");
    homeHeading.textContent = 'THE KRUSTY KRaB'
    homeArticle.appendChild(homeHeading);

    const homeQuote = document.createElement("blockquote");
    const quoteText = document.createElement("p");
    homeQuote.textContent = '"The finest eating establishment ever established for eating."';
    homeQuote.appendChild(quoteText);
    homeArticle.appendChild(homeQuote);

    const homeImg = document.createElement("img");
    homeImg.src = krustyKrabImg;
    homeImg.alt = "A photo of the The Krusty Krab";
    homeArticle.appendChild(homeImg);

    const description = document.createElement("div");
    description.id = 'description';
    const descriptionText1 = document.createElement("p");
    descriptionText1.textContent = "Everyone's money is good here. What are you waiting for? Come on in and empty that piggy bank!";
    const descriptionText2 = document.createElement("p");
    descriptionText2.textContent = "Cash only. No deliveries or refunds.";
    descriptionText2.classList.add('bold');
    description.appendChild(descriptionText1);
    description.appendChild(descriptionText2);
    homeArticle.appendChild(description);

    const location = document.createElement("section");
    location.id = "location";
    const locationHeading = document.createElement("h3");
    locationHeading.textContent = "Location:";
    const locationDescription = document.createElement("p");
    locationDescription.textContent = "831 Bottomfeeder Lane, Bikini Bottom";
    location.appendChild(locationHeading);
    location.appendChild(locationDescription);
    homeArticle.appendChild(location);

    const schedule = document.createElement("section");
    schedule.id = "schedule";
    const scheduleHeading = document.createElement("h3");
    scheduleHeading.textContent = "Hours:";
    schedule.appendChild(scheduleHeading);
    homeArticle.appendChild(schedule)

    const scheduleList = document.createElement("ul");
    const daysOpen = document.createElement("li");
    const daysOpenDays = document.createElement("p");
    daysOpenDays.textContent = "Monday - Saturday:"
    const daysOpenHours = document.createElement("p");
    daysOpenHours.textContent = "9:00am to 6:00pm";
    daysOpen.appendChild(daysOpenDays);
    daysOpen.appendChild(daysOpenHours);
    scheduleList.appendChild(daysOpen);

    const daysClosed = document.createElement("li");
    const daysClosedDays = document.createElement("p");
    daysClosedDays.textContent = "Sunday:";
    const daysClosedHours = document.createElement("p");
    daysClosedHours.textContent = "Closed";
    daysClosed.appendChild(daysClosedDays);
    daysClosed.appendChild(daysClosedHours);
    scheduleList.appendChild(daysClosed);

    schedule.appendChild(scheduleList);

    return homeArticle;
};
