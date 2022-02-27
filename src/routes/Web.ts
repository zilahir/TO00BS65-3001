/**
 * Define all your Web routes
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

import { NextFunction, Router, Request, Response } from 'express';

import HomeController from '../controllers/Home';
import { MenuItem, Route } from './types';
import GuestBook from'../controllers/GuestBook';
import NewMessage from '../controllers/NewMessage';


const router = Router();

export const routes = {
    routes: [
        {
            method: "GET", path: '/', controller: HomeController.index, label: 'Home'
        },
        {
            method: "GET", path: "/guestbook", label: "Guestbook", controller: GuestBook.renderPage
        },
        {
            method: "GET", path: '/newmessage', label: "New Message", controller: NewMessage.renderPage
        },
        {
            method: "GET", path: '/ajaxmessage', label: "New Message (AJAX)", controller: NewMessage.renderPage
        }
    ],
    getAllRouters: (): Route[] => routes.routes,
    getAllPaths: (): string[] => routes.routes.map(route => route.label),
    getAllMenuItems: (): MenuItem[] => routes.routes.map(({path, label}) => ({
        path,
        label
    }))
}

routes.getAllRouters().map(route => {
    if (route.method === "GET") {
        return router.get(route.path, [route.controller]);
    }
})

router.post('/newmessage', [NewMessage.createNewGuestBookEntry])
 

export default router;
