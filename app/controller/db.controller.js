const Info = require("../model/db.model.js");

exports.create = (req, res) => {

   // Create a Data point
   const info = new Info({
       title: req.body.title || "Untitled Note",
       name: req.body.name,
       content : req.body.content,
       type : req.body.type
   });

   // Save Note in the database
   info.save()
   .then(data => {
       res.send(data);
   }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Note."
       });
   });
};
exports.getData = (req, res) => {

};



exports.sendData = (req,res) => {

  Info.find()
    .then(info => {
        res.send(info);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
