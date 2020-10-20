let listVideoId = JSON.parse(localStorage.getItem("listVideoId"));
if (listVideoId && listVideoId.item) {
  listVideoId = listVideoId.item;
} else {
  listVideoId = [];
}

export default {
  currentUser: {
    email: "",
    uid: "",
    userListVideo: listVideoId
  },
  isLoading: false,
  listVideo: [
    { id: "458171316", name: "Video 1" },
    { id: "333203660", name: "Video 2" },
    { id: "332518113", name: "Video 3" },
    { id: "447371459", name: "Video 4" },
    { id: "265911959", name: "Video 5" },
    { id: "265911808", name: "Video 6" }
  ]
};
