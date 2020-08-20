import passport from 'passport';
import express from 'express';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
import { create, login, findAllUsers, 
    findById, update, deleteUser
} from '../contollers/user';
const userRouter = express.Router();

  // create a new user
  userRouter.post(
    '/create', create);

  // user login
  userRouter.post('/login', login);

  //retrieve all users
  userRouter.get(
    '/', 
    passport.authenticate('jwt', { 
      session: false 
    }),
    allowOnly(config.accessLevels.admin, findAllUsers)
  );

  // retrieve user by id
  userRouter.get(
    '/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, findById)
  );

  // update a user with id
  userRouter.put(
    '/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.user, update)
  );

  // delete a user
  userRouter.delete(
    '/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, deleteUser)
  );

export default userRouter;