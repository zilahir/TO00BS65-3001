import { Response, Request, NextFunction } from 'express'
import { RootRequest } from '../routes/Api';

/**
 * Handler for Home
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

class Home {
	public static index (request: (Request & RootRequest), response: Response, next: NextFunction): void {
		return response.render('pages/home', {
			welcomeText: 'Guestbook TO00BS65-3001',
			author: "Richard Zilahi",
			studentId: 2108162,
			routes: request.allPath ?? [],
		});
	}
}

export default Home;
