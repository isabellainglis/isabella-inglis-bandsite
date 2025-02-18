const bandsiteApi = new BandSiteApi(API_KEY);

const commentSection = document.querySelector(
  ".comment-section__comment-cards"
);

const displayComments = async () => {
  const comments = await bandsiteApi.getComments();

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const date = new Date(comment.timestamp).toLocaleDateString();
    const userName = comment.name;
    const userComment = comment.comment;

    const commentCard = document.createElement("div");
    commentCard.classList.add("comment-section__comment-card");
    commentSection.appendChild(commentCard);

    const commentImgContainer = document.createElement("div");
    commentImgContainer.classList.add("comment-section__comment-img-container");
    commentCard.appendChild(commentImgContainer);

    const commentImg = document.createElement("div");
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
    commentName.innerText = userName;
    commentTop.appendChild(commentName);

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment-section__comment-date");
    commentDate.innerText = date;
    commentTop.appendChild(commentDate);

    const commentContent = document.createElement("p");
    commentContent.classList.add("comment-section__comment-content");
    commentContent.innerText = userComment;
    commentContainer.appendChild(commentContent);
  }
};

const formEl = document.querySelector(".comment-section__form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const errorEl = document.querySelector(".comment-section__error");
  const nameInputEl = document.querySelector(".comment-section__input-name");
  const commentInputEl = document.querySelector(
    ".comment-section__input-comment"
  );

  if (nameInputEl.classList.contains("comment-section__input-name--error")) {
    nameInputEl.classList.remove("comment-section__input-name--error");
  }

  if (
    commentInputEl.classList.contains("comment-section__input-comment--error")
  ) {
    commentInputEl.classList.remove("comment-section__input-comment--error");
  }

  if (
    event.target.name.value.length === 0 &&
    event.target.content.value.length === 0
  ) {
    errorEl.innerText =
      "Oops, looks like you haven't entered a name or comment!";
    nameInputEl.classList.add("comment-section__input-name--error");
    commentInputEl.classList.add("comment-section__input-comment--error");
  } else if (
    event.target.name.value.length === 0 &&
    event.target.content.value.length > 0
  ) {
    errorEl.innerText = "Oops, looks like you haven't entered a name!";
    nameInputEl.classList.add("comment-section__input-name--error");
  } else if (
    event.target.name.value.length > 0 &&
    event.target.content.value.length === 0
  ) {
    errorEl.innerText = "Oops, looks like you haven't entered a comment!";
    commentInputEl.classList.add("comment-section__input-comment--error");
  } else {
    const newComment = {
      name: event.target.name.value,
      comment: event.target.content.value,
    };

    await bandsiteApi.postComment(newComment);
    errorEl.innerHTML = "";
    nameInputEl.classList.remove("comment-section__input-name--error");
    commentInputEl.classList.remove("comment-section__input-comment--error");
    commentSection.innerHTML = "";
    formEl.reset();
    displayComments();
  }
});

displayComments();
