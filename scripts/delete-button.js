const enableDelete = (comments) => {
  const deleteBtnElements = document.querySelectorAll(
    ".comment-section__delete-btn"
  );

  deleteBtnElements.forEach((deleteBtnEl, index) => {
    deleteBtnEl.addEventListener("click", async () => {
      const commentId = comments[index].id;
      try {
        await bandsiteApi.deleteComment(commentId);
        displayComments();
      } catch (error) {
        console.log("Error deleting comment:", error);
      }
    });
  });
};
