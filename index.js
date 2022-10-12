import { posts } from "./data.js";

const handler = () => {
  const main = document.getElementById("main");

  let content = "";

  for (let post of posts) {
    const template = `<section>
    <div class="section-top">
        <img class="small-image round" src="${post.avatar}">
        <div class="who-posted">
            <p class="bold">${post.name}</p>
            <p>${post.location}</p>
        </div>
    </div>
    <img class="post-image" src="${post.post}">
    <div class="button-section">
        <button>
            <img src="images/icon-heart.png">
        </button>
        <button>
            <img src="images/icon-comment.png">
        </button>
        <button>
            <img src="images/icon-dm.png">
        </button>
        <p class="bold">${post.likes} likes</p>
        <p>
            <span class="bold">${post.username}</span> ${post.comment}
        </p>
    </div>
</section>`;

    content = content + template;
  }

  main.innerHTML = content;
};

document.addEventListener("DOMContentLoaded", handler);
