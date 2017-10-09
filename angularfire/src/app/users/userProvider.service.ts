import { UserProvider as UserProviderInterface } from '../providers/userProvider.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from './user.class';

export class UserProvider implements UserProviderInterface {
    constructor(private firestore: AngularFirestore) {}

    loadUser(uid: string): Promise<User> {
        const reference = this.firestore.collection('users').doc(uid);
        // TODO CONTINUE WRITING LOADING
        throw new Error('Method not implemented.');
    }
}
