import { NextFunction, Response, Request } from "express";

import { RootRequest } from "../routes/types";

interface NewMessageRequest extends Request {
    name: string
}

class NewMessage {
    public static renderPage(request: RootRequest, response: Response, next: NextFunction) {
        console.log('rendering')
        return response.render('pages/newmessage', {
            routes: request.allPath ?? [],
        })
    }

    public static createNewGuestBookEntry(request: (Request & NewMessageRequest), response: Response, next: NextFunction) {
        const { name } = request
        const newObject = {
            name,
        }

        console.log(newObject);
        return response.status(200).send({
            ok: true,
        })
    }
}

export default NewMessage