import { join } from 'path'
import { readFileSync } from 'fs'

interface GuesBookEntries {
    text: string
}

interface GuestBook {
    entries: GuesBookEntries[]
}

class GuestBookController {
    static guestBookFile: string
    constructor() {
        GuestBookController.guestBookFile = join(__dirname, '../../../', 'data', "guestbook.json")
    }

    public static getGuestBookEntries() {
        const rawData = readFileSync(this.guestBookFile, 'utf8');
        try {
            const persedData = JSON.parse(rawData) as GuestBook
            return persedData.entries
        } catch {
            console.error('error opening the JSON file')
        }
    }
}

export default GuestBookController