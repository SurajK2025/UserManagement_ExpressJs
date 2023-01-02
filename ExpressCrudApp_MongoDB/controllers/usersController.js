const Userdb = require('../data/mongoDBConnector');

exports.getAllUsers = (req, res) => {
    console.log("inside controller");
    Userdb.find().exec((err, data) => {
        if (err) {
            console.log(err);
            resp.status(500).send("no data found");
        }
        else {
            //console.log(data);
            res.send(data);
        }
    });
}