import './dashboard.component.scss'
import MealPlanSection from '../../widgets/meal-plan-section/meal-plan-section.component'
import React from 'react'
import { UserApiService } from '../../../services/user-api.service'
import { DependencyFactory } from '../../../factory/dependency-factory'
import { AppStateStore } from '../../../services/app-state-store.service'

class Dashboard extends React.Component {
    private appStateStore: AppStateStore
    private userApiService: UserApiService

    constructor(props: Readonly<any>) {
        super(props)

        this.appStateStore = DependencyFactory.appStateStore
        this.userApiService = DependencyFactory.userApiService
    }

    componentDidMount() {
        void this.loginUser()
    }

    private async loginUser(): Promise<void> {
        const user = await this.userApiService.login()
        this.appStateStore.setLoggedInUser(user)
    }

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <section><div>Section 1</div></section>
                    </div>
                    <div className="col">
                        <section><div>Section 2</div></section>
                    </div>
                    <div>
                        <section><MealPlanSection /></section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
