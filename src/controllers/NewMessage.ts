import { NextFunction, Response, Request } from "express";
import { v4 as uuidv4 } from 'uuid';

import GuestBookController, { GuesBookEntry } from '../controllers/GuestBook/index'
import { RootRequest } from "../routes/types";

interface NewMessageRequest extends Request, GuesBookEntry  {}

class NewMessage {
    public static renderPage(request: (Request & RootRequest), response: Response, next: NextFunction) {
        return response.render('pages/newmessage', {
            routes: request.allPath ?? [],
            isAjaxPage: request.route.path === '/ajaxmessage',
            title: "New Message"
        })
    }

    public static createNewGuestBookEntry(request: (Request & NewMessageRequest), response: Response, next: NextFunction) {
        const { username, country, message } = request.body;
        const newObject = {
            username,
            country,
            message,
            id: uuidv4(),
            date: new Date().getTime(),
        };

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