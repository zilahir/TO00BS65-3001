import { Application, NextFunction } from "express";
import { RootRequest } from "../routes/types";
import { routes } from "../routes/Web";

class Pages {
    public static mount(_express: any): Application {
        _express.use((request: RootRequest, response: Response, next: NextFunction) => {
            const allPath = routes.getAllMenuItems()
            request.allPath = allPath;
            next();
        })

        return _express;
    }
}

export default Pages