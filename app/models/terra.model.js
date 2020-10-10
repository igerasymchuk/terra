module.exports = (sequelize, Sequelize) => {
    const Terra = sequelize.define("newpr", {
        LandID: {
            type: Sequelize.BIGINT,
            primaryKey: true
          },
          Status: {
            type: Sequelize.STRING
          },
          Name: {
            type: Sequelize.STRING
          },
          LandRada: {
            type: Sequelize.STRING
          },
          Region: {
            type: Sequelize.STRING
          },
          District: {
            type: Sequelize.STRING
          },
          ExpertizeYear: {
            type: Sequelize.INTEGER
          },
          ExpertizeYear: {
            type: Sequelize.INTEGER
          },
          AreaInGA: {
            type: Sequelize.INTEGER
          },
          PeopleCount: {
            type: Sequelize.INTEGER
          },
          DocumentationCost: {
            type: Sequelize.DOUBLE
          },
          PricePerSqMeter: {
            type: Sequelize.DOUBLE
          },
    }, {
        freezeTableName: true,
        timestamps: false
    });
  
    return Terra;
  };

//   sequelize.define('User', {
//     // ... (attributes)
//   }, {
//     freezeTableName: true
//   });

//   CREATE TABLE IF NOT EXISTS "newpr" (
// 	"LandID"	BIGINT,
// 	"Status"	TEXT,
// 	"Name"	TEXT,
// 	"LandRada"	TEXT,
// 	"Region"	TEXT,
// 	"District"	TEXT,
// 	"ExpertizeYear"	INTEGER,
// 	"AreaInGA"	INTEGER,
// 	"PeopleCount"	INTEGER,
// 	"DocumentationCost"	REAL,
// 	"PricePerSqMeter"	REAL