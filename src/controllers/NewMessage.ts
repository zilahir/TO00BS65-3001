import { NextFunction, Response, Request } from "express";
import { v4 as uuidv4 } from 'uuid';

import GuestBookController from '../controllers/GuestBook/index'
import { RootRequest } from "../routes/types";

interface NewMessageRequest extends Request {
    name: string
}

class NewMessage {
    public static renderPage(request: (Request & RootRequest), response: Response, next: NextFunction) {
        console.log('rendering', request.route.path === '/ajaxmessage')
        return response.render('pages/newmessage', {
            routes: request.allPath ?? [],
            isAjaxPage: request.route.path === '/ajaxmessage'
        })
    }

    public static createNewGuestBookEntry(request: (Request & NewMessageRequest), response: Response, next: NextFunction) {
        const { username, country, message } = request.body;
        console.log(request)
        const newObject = {
            username,
            country,
            message,
            id: uuidv4(),
            date: new Date().getTime(),
        };

        console.log(newObject);
        GuestBookController.createNewGuestBookEntry(newObject);
        if (request.baseUrl === '/api') {
            return response.status(200).send({
                success: true,
            })
        } else {
            return response.end();
        }
    }
}

export default NewMessage