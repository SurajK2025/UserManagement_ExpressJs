$(document).ready(() => {
  $.ajax({
    url: "/getUsers",
    type: "GET",
    success: (data) => {
      var rows = "";
      data.forEach((obj) => {
        rows =
          rows +
          `<tr><td>${obj.userid}</td><td>${obj.username}</td><td>${obj.course}</td><td>${obj.purchasedate}</td><td><a href="/deleteUser/${obj.userid}">Delete</a></td>`;
      });
      $("#userTable").append(rows);
    },
  });
});
