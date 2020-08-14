import passport from 'passport';
import express from 'express';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
import { create, login, findAllUsers, 
    findById, update, deleteUser
} from '../contollers/user';
const router = express.Router();

  // create a new user
  router.post(
    '/create', create);

  // user login
  router.post('/login', login);

  //retrieve all users
  router.get(
    '/', 
    passport.authenticate('jwt', { 
      session: false 
    }),
    allowOnly(config.accessLevels.admin, findAllUsers)
  );

  // retrieve user by id
  router.get(
    '/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, findById)
  );

  // update a user with id
  router.put(
    '/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.user, update)
  );

  // delete a user
  router.delete(
    '/:userId',
    passport.authenticate('jwt', {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, deleteUser)
  );

export default router;