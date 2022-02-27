import { Request, Response, NextFunction } from "express"
import { join } from 'path'
import { writeFileSync, readFileSync } from 'fs'

/**
 * GuestBook controller
 * 
 * @author Richard Zilahi <zilahi@gmail.com>
 */

interface GuesBookEntry {
    id: string,
    message: string,
    username: string,
    date: number,
    country: string
}

interface GuestBook {
    entries: GuesBookEntry[]
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

    public createNewGuestBookEntry(newObject: GuesBookEntry) {
        const currentEntries = this.getGuestBookEntries();
        console.log('currentEntries', currentEntries);
        console.log('newObject', newObject);

        writeFileSync(this.guestBookFile, JSON.stringify({
            entries: [...currentEntries, newObject]
        }))
    }
}

export default new GuestBookController