import { Router } from 'express';
import NewMessage from '../controllers/NewMessage';

/**
 * Define all your API web-routes
 *
 * @author Richard Zilahi <zilahi@gmail.com>
 */

const router = Router();

router.post('/ajaxmessage', [NewMessage.createNewGuestBookEntry])

export default router