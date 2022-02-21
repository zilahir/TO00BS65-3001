import { Router, Request, Response, NextFunction } from 'express';
import HomeController from '../controllers/Api/Home';

/**
 * Define all your API web-routes
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

interface Route {
    method: string,
    path: string,
    controller: (req?: Request, res?: Response, next?: NextFunction) => any,
    label: string
}

export interface RootRequest extends Route {
    allPath: string[]
}

export const routes = {
    routes: [
        {
            method: "GET", path: '/', controller: HomeController.index, label: 'Home'
        }
    ],
    getAllRouters: (): Route[] => routes.routes,
    getAllPaths: (): string[] => routes.routes.map(route => route.label)
}

const router = Router();

// router.get('/', HomeController.index);

routes.getAllRouters().map(route => {
    if (route.method === "GET") {
        return router.get(route.path, [route.controller]);
    }
})


export default router;
