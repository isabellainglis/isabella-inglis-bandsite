const updateLikeCount = (commentLikes, index) => {
  const likeCountEl = document.querySelectorAll(
    ".comment-section__like-counter"
  )[index];
  likeCountEl.innerText = commentLikes + 1;
};

const enableLikeCount = (comments) => {
  const likeBtnElements = document.querySelectorAll(
    ".comment-section__like-btn"
  );

  likeBtnElements.forEach((likeBtnEl, index) => {
    let clicked = false;

    likeBtnEl.addEventListener("click", () => {
      if (clicked) {
        return;
      }
      const commentId = comments[index].id;

      try {
        bandsiteApi.likeComment(commentId);
        const commentLikes = comments[index].likes;
        updateLikeCount(commentLikes, index, likeBtnEl);
        likeBtnEl.src = "../assets/icons/PNG/icon-heart-red.png";
        clicked = true;
      } catch (error) {
        console.log("Error updating likes:", error);
      }
    });
  });
};
