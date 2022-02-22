import { NextFunction, Response, Request } from "express";

import { RootRequest } from "../routes/types";
import GuestBookController from '../controllers/GuestBook/index'

class GuestBook {
    public static renderPage(request: (Request & RootRequest), response: Response, next: NextFunction) {
        return response.render('pages/guestbook', {
            entries: GuestBookController.getGuestBookEntries(),
            routes: request.allPath ?? [],
        })
    }
}

export default GuestBook