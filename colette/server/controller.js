// const axios = require("axios");
// const secret = require("./secrets.js");
 
// const getVolumes = (req,res,next) => {
//   const db = req.app.get("db");
//   db.getAllVolumes()
//     .then( volumes => res.status(200).send(volumes) )
//     .catch( () => res.status(500).send() );
// }
 
// module.exports = {
//   getVolumes
// };

 

module.exports = {
  getAllVolumes: function(req, res, next){
      const dbInstance = req.app.get('db');
      dbInstance.get_all_volumes()
      .then( volumes => res.status(200).send(volumes) )
      .catch( () => res.status(500).send() );
  }
}
 
