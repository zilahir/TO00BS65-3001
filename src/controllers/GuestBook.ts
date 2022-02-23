import { NextFunction, Response, Request } from "express";

import { RootRequest } from "../routes/types";
import GuestBookController from '../controllers/GuestBook/index'
import Locals from "../providers/Locals";

class GuestBook {
    public static renderPage(request: (Request & RootRequest), response: Response, next: NextFunction) {
        console.log('Locals.config().formatDateFns', Locals.config().formatDateFns)
        return response.render('pages/guestbook', {
            entries: GuestBookController.getGuestBookEntries(),
            routes: request.allPath ?? [],
            formatDateFns: Locals.config().formatDateFns,
        })
    }
}

export default GuestBook