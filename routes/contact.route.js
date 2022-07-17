const  express = require("express");
const constact =require("../controllers/contact.comtroller");

const router=express.Router();

router
    .route("/")
    .get(constact.findAll)
    .post(constact.create)
    .delete(constact.deleteAll);

router
    .route("/favorite")
    .get(constact.findAllFavorite);

router
    .route("/:id")
    .get(constact.findOne)
    .put(constact.update)
    .delete(constact.delete);

module.exports = router;