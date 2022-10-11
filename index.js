const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

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
