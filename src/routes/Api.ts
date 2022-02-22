import { Router } from 'express';
import HomeController from '../controllers/Api/Home';
import GuestBookController from '../controllers/GuestBook';
import { MenuItem, Route } from './types';

/**
 * Define all your API web-routes
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

const router = Router();

export default router