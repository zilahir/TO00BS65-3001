/**
 * Define all your Web routes
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

import { NextFunction, Router, Request, Response } from 'express';

import Cache from './../providers/Cache';
import HomeController from '../controllers/Home';
const cache = Cache.cache;

interface AppRoute {
	key: number,
	targetPath: string;
	cache?: (duratoin: number) => any;
	routeController: (request: Request, response: Response, next?: NextFunction) => void,
	type: "POST" | "GET"

}

const routes: AppRoute[] = [
	{ key: 0, targetPath: '/', routeController: HomeController.index, cache: cache(10), type: "GET" },
]

const router = Router();

routes.map(({ targetPath, cache, routeController, type }) => {
	if (type === "GET") {
		return router.get(targetPath, cache, routeController)
	}
})

export default router;
