window.onload = () => {
  const deleteButtons = document.querySelectorAll(".delete-post");

  const deletePost = (url, postContainer) => {
    axios
      .delete(url)
      .then((res) => {
        postContainer.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteButtons.forEach((button) => {
    const { id } = button.dataset;
    const url = `http://localhost:3000/posts/${id}/delete`;
    const postContainer = button.parentElement.parentElement.parentElement;

    button.addEventListener("click", () => deletePost(url, postContainer));
  });

  const likeBtns = document.querySelectorAll(".like-btn");

  likeBtns.forEach((likeBtn) => {
    const postId = likeBtn.value;

    const iconNode = likeBtn.querySelector(".bi");

    likeBtn.onclick = () => {
      axios
        .post(`/posts/${postId}/like`)
        .then((response) => {
          if (response.status === 201) {
            iconNode.classList.remove("bi-heart");
            iconNode.classList.add("bi-heart-fill");
          } else if (response.status === 204) {
            iconNode.classList.add("bi-heart");
            iconNode.classList.remove("bi-heart-fill");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
  });

  const followBtns = document.querySelectorAll(".follow-btn");

  followBtns.forEach((followBtn) => {
    const followedId = followBtn.value;

    const iconNode = followBtn.querySelector(".bi");
    const textNode = followBtn.querySelector("span");

    followBtn.onclick = () => {
      axios
        .post(`/profile/${followedId}/follow`)
        .then((response) => {
          if (response.status === 201) {
            textNode.textContent = "Unfollow";
            iconNode.classList.remove("bi-heart");
            iconNode.classList.add("bi-heart-fill");
          } else if (response.status === 204) {
            textNode.textContent = "Follow";
            iconNode.classList.remove("bi-heart-fill");
            iconNode.classList.add("bi-heart");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
  });

  const postImages = document.querySelectorAll(".post-img");
  const modalNode = document.querySelector(".modal-body");

  postImages.forEach((postImage) => {
    postImage.onclick = () => {
      const imageNode = document.createElement("img");
      imageNode.classList.add("bigPostImages");
      imageNode.src = postImage.src;
      modalNode.appendChild(imageNode);
    };
  });

  modalNode.onclick = () => {
    imageNode.classList.remove("bigPostImages");
    imageNode.src = "";
  };
};
