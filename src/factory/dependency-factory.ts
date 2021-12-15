import axios, { Axios } from 'axios'
import { Environment } from '../environment/environment'
import { UserApiService } from '../services/user-api.service'
import { AppStateStore } from '../services/app-state-store.service'

export class DependencyFactory {
    private static _httpClient: Axios
    public static get httpClient(): Axios {
        if (!this._httpClient) {
            this._httpClient = axios.create({
                baseURL: Environment.BaseUrl,
                timeout: 1000,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        return this._httpClient
    }

    private static _userApiService: UserApiService
    public static get userApiService(): UserApiService {
        if (!this._userApiService) this._userApiService = new UserApiService(this.httpClient)
        return this._userApiService
    }

    private static _appStateStore: AppStateStore
    public static get appStateStore(): AppStateStore {
        if (!this._appStateStore) this._appStateStore = new AppStateStore()
        return this._appStateStore
    }
}
