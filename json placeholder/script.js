document.addEventListener("DOMContentLoaded", () => {
    let postsSection = document.querySelector(".posts-section");
    let postTemplate = document.getElementById("post-template");
    let userSection = document.querySelector(".users-section");
    let userTemplate = document.getElementById("user-template");

    async function getPost(user_id) {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        };

        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`, { 
            method: "GET",
            headers: headersList
        });

        let posts = await response.json();
        console.log(posts);

        // Clear existing posts
        postsSection.innerHTML = "";

        posts.forEach(post => {
            // Clone the template
            let postClone = postTemplate.cloneNode(true);
            postClone.removeAttribute("id");

            // Populate the clone with data
            let titleText = postClone.querySelector(".title-text");
            let bodyText = postClone.querySelector(".body-text");

            titleText.textContent = post.title;
            bodyText.textContent = post.body;

            postClone.addEventListener("click", () => {
                window.location.href = `comment.html?postId=${post.id}`;
            });

            postsSection.appendChild(postClone);
        });
    }

    async function getUser() {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        };

        let response = await fetch("https://jsonplaceholder.typicode.com/users", { 
            method: "GET",
            headers: headersList
        });

        let users = await response.json();
        console.log(users);

        users.forEach(user => {
            // Clone the template
            let userClone = userTemplate.cloneNode(true);
            userClone.removeAttribute("id");

            // Populate the clone with data
            let userName = userClone.querySelector(".user-name");
            let userEmail = userClone.querySelector(".user-email");

            userName.textContent = user.name;
            userEmail.textContent = user.email;

            // Add click event to fetch and display posts for this user
            userClone.addEventListener("click", () => {
                getPost(user.id);
            });

            // Append the clone to the users section
            userSection.appendChild(userClone);
        });

        // Remove the template from the DOM as it is no longer needed
        userTemplate.remove();
    }

    async function getComments(postId){
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        };

        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, { 
            method: "GET",
            headers: headersList
        });

        let comments = await response.json();
        console.log(comments);

        let commentsSection = document.getElementById("comments");
        commentsSection.innerHTML = "";

        comments.forEach(comment => {
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");

            let commentName = document.createElement("p");
            commentName.classList.add("comment-name");
            commentName.textContent = comment.name;

            let commentBody = document.createElement("p");
            commentBody.classList.add("comment-body");
            commentBody.textContent = comment.body;

            commentDiv.appendChild(commentName);
            commentDiv.appendChild(commentBody);

            commentsSection.appendChild(commentDiv);
        });
    }

    
    getUser();

    if (window.location.pathname.endsWith("comment.html")) {
        let urlParams = new URLSearchParams(window.location.search);
        let postId = urlParams.get("postId");
        if (postId) {
            getComments(postId);
        }
    }
});
