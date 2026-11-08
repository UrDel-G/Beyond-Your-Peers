const form = document.querySelectorAll(".comment-form");

form.forEach(function(form) {
    const commentInput = form.querySelector(".comment-input");
    const commentsContainer = form.nextElementSibling;
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const commentText = commentInput.value.trim();

    if (commentText === "") {
        return;
    }

    const comment = document.createElement("div");

    comment.classList.add("comment");

    const paragraph = document.createElement("p");

    paragraph.textContent = commentText;

    comment.appendChild(paragraph);

    commentsContainer.appendChild(comment);

    commentInput.value = "";

});
    
})    
