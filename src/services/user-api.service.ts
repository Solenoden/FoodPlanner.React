import { Axios } from 'axios'
import { Environment } from '../environment/environment'
import { User } from '../models/user.model'

export class UserApiService {
    constructor(
        private httpClient: Axios
    ) {}

    public async login(): Promise<User> {
        const result = await this.httpClient.post('/api/v1/login', { userId: Environment.UserId })

        return new User(result.data as Record<string, unknown>)
    }
}
