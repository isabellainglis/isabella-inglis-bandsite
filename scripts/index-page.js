const bandsiteApi = new BandSiteApi(API_KEY);

const commentSection = document.querySelector(
  ".comment-section__comment-cards"
);

const displayComments = async () => {
  commentSection.innerHTML = "";
  const comments = await bandsiteApi.getComments();

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const date = new Date(comment.timestamp).toLocaleDateString();
    const userName = comment.name;
    const userComment = comment.comment;
    const likeCount = comment.likes;

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

    const likeContainerParent = document.createElement("div");
    likeContainerParent.classList.add("comment-section__like-container-parent");
    commentContainer.appendChild(likeContainerParent);

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("comment-section__delete-btn");
    deleteBtn.src = "../assets/icons/SVG/icon-delete.svg";
    deleteBtn.alt = "delete comment";
    likeContainerParent.appendChild(deleteBtn);

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("comment-section__like-container");
    likeContainerParent.appendChild(likeContainer);

    const likeBtn = document.createElement("img");
    likeBtn.classList.add("comment-section__like-btn");
    likeBtn.src = "../assets/icons/PNG/icon-heart-white.png";
    likeBtn.alt = "like comment";
    likeContainer.appendChild(likeBtn);

    const likeCountEl = document.createElement("div");
    likeCountEl.classList.add("comment-section__like-counter");
    likeCountEl.innerText = likeCount;
    likeContainer.appendChild(likeCountEl);
  }

  enableLikeCount(comments);
  enableDelete(comments);
};

const formEl = document.querySelector(".comment-section__form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const errorEl = document.querySelector(".comment-section__error");
  const nameInputEl = document.querySelector(".comment-section__input-name");
  const commentInputEl = document.querySelector(
    ".comment-section__input-comment"
  );
  const name = event.target.name.value;
  const comment = event.target.content.value;

  if (nameInputEl.classList.contains("comment-section__input-name--error")) {
    nameInputEl.classList.remove("comment-section__input-name--error");
  }

  if (
    commentInputEl.classList.contains("comment-section__input-comment--error")
  ) {
    commentInputEl.classList.remove("comment-section__input-comment--error");
  }

  if (name.length === 0 && comment.length === 0) {
    errorEl.innerText =
      "Oops, looks like you haven't entered a name or comment!";
    nameInputEl.classList.add("comment-section__input-name--error");
    commentInputEl.classList.add("comment-section__input-comment--error");
  } else if (name.length === 0 && comment.length > 0) {
    errorEl.innerText = "Oops, looks like you haven't entered a name!";
    nameInputEl.classList.add("comment-section__input-name--error");
  } else if (name.length > 0 && comment.length === 0) {
    errorEl.innerText = "Oops, looks like you haven't entered a comment!";
    commentInputEl.classList.add("comment-section__input-comment--error");
  } else {
    const newComment = {
      name: name,
      comment: comment,
    };

    await bandsiteApi.postComment(newComment);
    errorEl.innerHTML = "";
    nameInputEl.classList.remove("comment-section__input-name--error");
    commentInputEl.classList.remove("comment-section__input-comment--error");
    formEl.reset();
    displayComments();
  }
});

displayComments();
