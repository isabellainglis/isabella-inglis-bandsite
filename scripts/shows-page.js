displayShow = (show) => {
  const showContainer = document.createElement("div");
  showContainer.classList.add("show__show-container");
  showsSection.appendChild(showContainer);

  const dateTitle = document.createElement("p");
  dateTitle.classList.add("show__subheading");
  dateTitle.innerText = "Date";
  showsSection.appendChild(dateTitle);

  const showDate = document.createElement("p");
  showDate.classList.add("show__info");
  showDate.innerText = show.date;
  showsSection.appendChild(showDate);

  const venueTitle = document.createElement("p");
  venueTitle.classList.add("show__subheading");
  venueTitle.innerText = "Venue";
  showsSection.appendChild(venueTitle);

  const showvenue = document.createElement("p");
  showvenue.classList.add("show__info");
  showvenue.innerText = show.venue;
  showsSection.appendChild(showvenue);

  const locationTitle = document.createElement("p");
  locationTitle.classList.add("show__subheading");
  locationTitle.innerText = "Location";
  showsSection.appendChild(locationTitle);

  const showlocation = document.createElement("p");
  showlocation.classList.add("show__info");
  showlocation.innerText = show.location;
  showsSection.appendChild(showlocation);
};

const mainSection = document.querySelector(".shows");
const showsSection = document.createElement("section");
showsSection.classList.add("shows__shows-section");
mainSection.appendChild(showsSection);

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
