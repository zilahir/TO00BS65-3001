import { Application, NextFunction } from "express";
import { RootRequest, routes } from "../routes/Api";

class Pages {
    public static mount(_express: any): Application {
        _express.use((request: RootRequest, response: Response, next: NextFunction) => {
            const allPath = routes.getAllPaths();
            request.allPath = allPath;

            next();
        })

        return _express;
    }
}

export default Pages