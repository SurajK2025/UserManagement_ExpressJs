$(document).ready(() => {
  $.ajax({
    url: "/updateUser",
    type: "GET",
    success: (data) => {
      console.log(data);
      document.getElementById("username").value = data[0].username;
      document.getElementById("course").value = data[0].course;
      document.getElementById("purchasedate").value = data[0].purchasedate;
    },
  });
});