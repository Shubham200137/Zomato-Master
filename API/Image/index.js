import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import {ImageModel} from "../../databases/allModels";

const Router= express.Router();

//Multer CONFIG
const storage=multer.memoryStorage();
const upload=multer({storage});

/*
Route     /
Des       Uploading the given image to AWS s3 bucket and then saving the file to mongoDB
params    None
Access    Public
Method    GET
*/
