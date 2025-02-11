const commentForm = document.querySelector(".comment-section");

const avatar = document.createElement("img");
avatar.classList.add("comment-section__avatar");
avatar.setAttribute("src", "../assets/images/mohan-muruge.jpg");
commentForm.appendChild(avatar);

const form = document.createElement("form");
form.classList.add("comment-section__form");

const nameLabel = document.createElement("label");
nameLabel.classList.add("comment-section__label");
nameLabel.setAttribute("for", "nameInput");
nameLabel.innerText = "NAME";
commentForm.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.classList.add("comment-section__name-input");
nameInput.setAttribute("name", "nameInput");
nameInput.setAttribute("id", "nameInput");
commentForm.appendChild(nameInput);

const commentLabel = document.createElement("label");
commentLabel.classList.add("comment-section__label");
commentLabel.setAttribute("for", "commentInput");
commentLabel.innerText = "COMMENT";
commentForm.appendChild(commentLabel);

const commentInput = document.createElement("input");
commentInput.classList.add("comment-section__comment-input");
commentInput.setAttribute("comment", "commentInput");
commentInput.setAttribute("id", "commentInput");
commentForm.appendChild(commentInput);

const commentBtn = document.createElement("button");
commentBtn.classList.add("comment-section__btn");
commentBtn.innerText = "COMMENT";
commentForm.appendChild(commentBtn);
