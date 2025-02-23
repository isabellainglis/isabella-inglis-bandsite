const bandsiteApi = new BandSiteApi(API_KEY);

const showsContainerEl = document.querySelector(".shows__show-list-container");
const showsSectionEl = document.createElement("section");
showsSectionEl.classList.add("shows__shows-section");
showsContainerEl.appendChild(showsSectionEl);

const displayShow = async () => {
  const showDetails = await bandsiteApi.getShows();

  for (let i = 0; i < showDetails.length; i++) {
    const show = showDetails[i];
    const date = new Date(show.date).toDateString();

    const showContainer = document.createElement("div");
    showContainer.classList.add("shows__show-container");
    showsSectionEl.appendChild(showContainer);

    const dateTitle = document.createElement("p");
    dateTitle.classList.add("shows__subheading");
    dateTitle.innerText = "DATE";
    showContainer.appendChild(dateTitle);

    const showDate = document.createElement("p");
    showDate.classList.add("shows__info");
    showDate.classList.add("shows__info--highlight");
    showDate.innerText = date;
    showContainer.appendChild(showDate);

    const venueTitle = document.createElement("p");
    venueTitle.classList.add("shows__subheading");
    venueTitle.innerText = "VENUE";
    showContainer.appendChild(venueTitle);

    const showvenue = document.createElement("p");
    showvenue.classList.add("shows__info");
    showvenue.innerText = show.place;
    showContainer.appendChild(showvenue);

    const locationTitle = document.createElement("p");
    locationTitle.classList.add("shows__subheading");
    locationTitle.innerText = "LOCATION";
    showContainer.appendChild(locationTitle);

    const showlocation = document.createElement("p");
    showlocation.classList.add("shows__info");
    showlocation.innerText = show.location;
    showContainer.appendChild(showlocation);

    const buyTicketsBtn = document.createElement("a");
    buyTicketsBtn.classList.add("shows__btn");
    buyTicketsBtn.innerText = "BUY TICKETS";
    showContainer.appendChild(buyTicketsBtn);
  }

  addShowSelector();
};

displayShow();

const addShowSelector = () => {
  const showContainer = document.querySelectorAll(".shows__show-container");
  let currentlySelected = null;

  showContainer.forEach((show) => {
    show.addEventListener("click", () => {
      if (currentlySelected) {
        currentlySelected.classList.remove("shows__show-container--selected");
      }

      show.classList.add("shows__show-container--selected");
      currentlySelected = show;
    });
  });
};
