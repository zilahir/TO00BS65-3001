import { NextFunction, Response, Request } from "express";

import { RootRequest } from "../routes/types";

class NewMessage {
    public static renderPage(request: (Request & RootRequest), response: Response, next: NextFunction) {
        return response.render('pages/newmessage', {
            routes: request.allPath ?? [],
        })
    }
}

export default NewMessage