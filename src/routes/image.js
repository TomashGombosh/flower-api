import passport from 'passport';
import express from 'express';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
import { uploadFiles } from '../contollers/upload';
const imageRouter = express.Router();

  // create a new user
  imageRouter.post(
    '/upload', 
    // passport.authenticate('jwt', { 
    //   session: false 
    // }),
    // allowOnly(config.accessLevels.admin, uploadFiles));
    uploadFiles);

export default imageRouter;