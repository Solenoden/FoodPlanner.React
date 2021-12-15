import { User } from '../models/user.model'
import { BehaviorSubject } from 'rxjs'

export class AppStateStore {
    private loggedInUser = new BehaviorSubject<User | undefined>(undefined)
    public getLoggedInUser(): BehaviorSubject<User | undefined> { return this.loggedInUser }
    public setLoggedInUser(value?: User): void { this.loggedInUser.next(value) }
}
