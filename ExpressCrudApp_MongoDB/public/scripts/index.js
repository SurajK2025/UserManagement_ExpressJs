$(document).ready(() => {
  $.ajax({
    url: "/getUsers",
    type: "GET",
    success: (data) => {
      var rows = "";
      data.forEach((obj) => {
        rows =
          rows +
          `<tr><td>${obj._id}</td><td>${obj.username}</td><td>${obj.course}</td><td>${obj.purchaseDate}</td><td><a href="/deleteUser/${obj._id}">Delete</a></td>`;
      });
      $("#userTable").append(rows);
    },
  });
});
