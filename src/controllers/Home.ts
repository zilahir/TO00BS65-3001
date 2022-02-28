import { Response, Request, NextFunction } from 'express'

import Locals from '../providers/Locals';
import { RootRequest } from '../routes/types';
import GuestBookController from './GuestBook/index'

/**
 * Handler for Home
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

class Home {
	public static index (request: (Request & RootRequest), response: Response, next: NextFunction): void {
		const entries = GuestBookController.getGuestBookEntries()
		return response.render('pages/home', {
			welcomeText: 'Guestbook TO00BS65-3001',
			author: "Richard Zilahi",
			studentId: 2108162,
			routes: request.allPath ?? [],
			numOfGuestBookEntries: entries.length,
			lastGuestBookEntry: entries[0],
			formatDateFns: Locals.config().formatDateFns,
			title: 'Home'
		});
	}
}

export default Home;
