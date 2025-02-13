displayShow = (show) => {
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
  showDate.innerText = show.date;
  showContainer.appendChild(showDate);

  const venueTitle = document.createElement("p");
  venueTitle.classList.add("shows__subheading");
  venueTitle.innerText = "VENUE";
  showContainer.appendChild(venueTitle);

  const showvenue = document.createElement("p");
  showvenue.classList.add("shows__info");
  showvenue.innerText = show.venue;
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
};

const showsContainerEl = document.querySelector(".shows__show-list-container");
const showsSectionEl = document.createElement("section");
showsSectionEl.classList.add("shows__shows-section");
showsContainerEl.appendChild(showsSectionEl);

const showDetails = [
  {
    date: "Mon Sept 08 2025",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 16 2025",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 11 2025",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 15 2025",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 28 2025",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 17 2025",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

for (let i = 0; i < showDetails.length; i++) {
  const show = showDetails[i];

  displayShow(show);
}
