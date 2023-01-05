$(document).ready(() => {
  $.ajax({
    url: "/",
    type: "POST",
    success: (data) => {
      var rows = "";
      data.forEach((obj) => {
        rows =
          rows +
          `<tr><td>${obj.userid}</td><td>${obj.username}</td><td>${obj.course}</td><td>${moment(obj.purchasedate).format("YYYY-MM-DD")}</td><td><a href="/updateUser/${obj.userid}">Update</a></td><td><a href="/deleteUser/${obj.userid}">Delete</a></td>`;
      });
      $("#userTable").append(rows);
    },
  });
});
