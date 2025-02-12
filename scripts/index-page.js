let displayComments = (comment) => {
  const commentSection = document.querySelector(".comment-section");

  const commentCard = document.createElement("div");
  commentCard.classList.add("comment-section__comment-card");
  commentSection.appendChild(commentCard);

  const commentImgContainer = document.createElement("div");
  commentImgContainer.classList.add("comment-section__comment-img-container");
  commentCard.appendChild(commentImgContainer);

  const commentImg = document.createElement("img");
  commentImg.classList.add("comment-section__comment-img");
  commentImgContainer.appendChild(commentImg);

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-section__comment-container");
  commentCard.appendChild(commentContainer);

  const commentTop = document.createElement("div");
  commentTop.classList.add("comment-section__comment-top");
  commentContainer.appendChild(commentTop);

  const commentName = document.createElement("p");
  commentName.classList.add("comment-section__comment-name");
  commentName.innerText = comment.name;
  commentTop.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.classList.add("comment-section__comment-Date");
  commentDate.innerText = comment.date;
  commentTop.appendChild(commentDate);

  const commentContent = document.createElement("p");
  commentContent.classList.add("comment-section__comment-content");
  commentContent.innerText = comment.content;
  commentContainer.appendChild(commentContent);
};

const comments = [
  {
    name: "Victor Pinto",
    content:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "01/12/2025",
  },
  {
    name: "Christina Cabrera",
    content:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/02/2025",
  },
  {
    name: "Isaac Tadesse",
    content:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "12/20/2024",
  },
];

for (let i = 0; i < comments.length; i++) {
  const comment = comments[i];

  displayComments(comment);
}
