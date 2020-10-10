const db = require("../models");
const Terra = db.terra;
const Op = db.Sequelize.Op;
//const { QueryTypes } = require('sequelize');

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { Name: { [Op.iLike]: `%${name}%` } } : null;

    const q = "SELECT * FROM newpr WHERE \"Name\" LIKE '%" + name.toUpperCase() + "%'";
    console.log(q)
    
    db.sequelize.query(q, {
      model: Terra,
      mapToModel: true // pass true here if you have any mapped fields
    })
    //Terra.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single with an id
exports.findOne = (req, res) => {
  
};

// Update one by the id in the request
exports.update = (req, res) => {
  
};

// Delete one with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published 
exports.findAllPublished = (req, res) => {
  
};