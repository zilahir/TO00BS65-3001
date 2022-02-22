import { Request, Response, NextFunction } from "express"
import { join } from 'path'
import { readFileSync } from 'fs'
import { RootRequest } from "../../routes/types"

/**
 * GuestBook controller
 * 
 * @author Richard Zilahi <zilahi@gmail.com>
 */

interface GuesBookEntries {
    text: string
}

interface GuestBook {
    entries: GuesBookEntries[]
}

class GuestBookController {
    public guestBookFile: string
    constructor() {
        this.guestBookFile = join(__dirname, '../../../', 'data', "guestbook.json");
    }

    public getGuestBookEntries() {
        const rawData = readFileSync(this.guestBookFile, 'utf8');
        try {
            const persedData = JSON.parse(rawData) as GuestBook
            return persedData.entries
        } catch {
            console.error('error opening the JSON file')
        }
    }
}

export default new GuestBookController