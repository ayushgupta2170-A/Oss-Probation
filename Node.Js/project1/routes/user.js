const express = require("express");

const{handleGetAllUsers,
    handleGetUserById,
    handlePatchUserById,
    handleDeleteUserById,
    handleCreateUserById}=require("../controllers/user");
const router= express.Router();


router.route("/").get(handleGetAllUsers).post(handleCreateUserById);






router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handlePatchUserById)    
  .delete( handleDeleteUserById);


module.exports= router;


