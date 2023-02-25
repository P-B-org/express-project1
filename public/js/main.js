window.onload = () => {
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
