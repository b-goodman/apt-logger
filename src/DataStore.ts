import Dexie from 'dexie';

interface DataRow {
    id?: number;
    name?: string;
    age?: number;
}

//
// Declare Database
//
class FriendDatabase extends Dexie {
    public friends: Dexie.Table<DataRow, number>; // id is number in this case

    public constructor() {
        super("FriendDatabase");
        this.version(1).stores({
            friends: "++id,name,age"
        });
        this.friends = this.table("friends");
    }
}