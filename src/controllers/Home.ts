/**
 * Handler for Home
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

import { Response, Request, NextFunction } from 'express'

class Home {
	public static index (request: Request, response: Response, next: NextFunction): void {
		return response.render('pages/home', {
			title: 'Home'
		});
	}
}

export default Home;
