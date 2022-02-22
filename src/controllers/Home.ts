import { Response, Request, NextFunction } from 'express'
import { RootRequest } from '../routes/Api';
import GuestBookController from './GuestBook';

/**
 * Handler for Home
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

class Home {
	static guestBookConroller = new GuestBookController()
	public static index (request: (Request & RootRequest), response: Response, next: NextFunction): void {
		const entries = GuestBookController.getGuestBookEntries()
		return response.render('pages/home', {
			welcomeText: 'Guestbook TO00BS65-3001',
			author: "Richard Zilahi",
			studentId: 2108162,
			routes: request.allPath ?? [],
			numOfGuestBookEntries: entries.length,
			lastGuestBookEntry: entries[0]
		});
	}
}

export default Home;
