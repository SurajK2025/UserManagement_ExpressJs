const userController = require('../../controllers/usersController');

$(document).ready(() => {
    $.ajax({
        url: '/getUsers',
        type: 'GET',
        success: (data) => {
            var rows = '';
            data.forEach((obj) => {
                rows = rows + `<tr><td>${obj.userid}</td><td>${obj.username}</td><td>${obj.course}</td><td>${obj.purchasedate}</td><td><input type="button" id="${obj.userid}" value="Delete" onclick=""/></td>`
            });
            $('#userTable').append(rows);
        }

    })
});