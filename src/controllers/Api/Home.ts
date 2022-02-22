import { Request, Response, NextFunction } from "express"

/**
 * Define the API base url
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

import Locals from '../../providers/Locals';

class Home {
	public static index(request: Request, response: Response, next: NextFunction): any {
		return response.json({
			message: Locals.config().name
		});
	}
}

export default Home;
