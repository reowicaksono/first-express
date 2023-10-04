import express from "express";
import  testController  from "../controller/test_controller.js";

const testRouter = new express.Router();

testRouter.get("/test", testController.getTest);
testRouter.post("/test", testController.postTest);
testRouter.put("/test/:id", testController.putTest);

export default testRouter;