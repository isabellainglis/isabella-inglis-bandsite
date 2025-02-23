const updateLikeCount = (commentLikes, index) => {
  const likeCountElements = document.querySelectorAll(
    ".comment-section__like-counter"
  )[index];
  likeCountElements.innerText = commentLikes + 1;
};

const enableLikeCount = (comments) => {
  const likeBtnElements = document.querySelectorAll(
    ".comment-section__like-btn"
  );

  likeBtnElements.forEach((likeBtnEl, index) => {
    let clicked = false;

    likeBtnEl.addEventListener("click", () => {
      const commentId = comments[index].id;

      if (clicked) {
        return;
      }

      try {
        bandsiteApi.likeComment(commentId);
        const commentLikes = comments[index].likes;
        updateLikeCount(commentLikes, index);
        likeBtnEl.src = "../assets/icons/PNG/icon-heart-red.png";
        clicked = true;
      } catch (error) {
        console.log("Error updating likes:", error);
      }
    });
  });
};
