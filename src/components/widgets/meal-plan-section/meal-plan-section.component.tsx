import './meal-plan-section.component.scss'
import React from 'react'
import { DependencyFactory } from '../../../factory/dependency-factory'
import { User } from '../../../models/user.model'
import { AppStateStore } from '../../../services/app-state-store.service'

class MealPlanSection extends React.Component<User, { loggedInUser?: User }> {
    private appStateStore: AppStateStore

    constructor(props: User | Readonly<User>) {
        super(props)
        this.state = {}
        this.appStateStore = DependencyFactory.appStateStore
    }

    componentDidMount() {
        this.getLoggedInUser()
    }

    private getLoggedInUser(): void {
        this.appStateStore.getLoggedInUser().subscribe(result => {
            if (result) this.setState({ loggedInUser: result })
        }, error => {
            // eslint-disable-next-line no-console
            console.error(error)
        })
    }

    public render() {
        return (
            <div id="meal-plans-container">{
                this.state.loggedInUser ?
                    <>
                        <h4>Meal plans</h4>
                        {
                            this.state.loggedInUser.mealPlans && this.state.loggedInUser.mealPlans?.length > 0 
                                ? this.state.loggedInUser?.mealPlans?.map(x => {
                                    return <div className="meal-plan-pill" key={x.id}><span>{ x.name }</span></div>})
                                : <div>No meal plans</div>
                        }
                    </>
                    : <div>Please login</div>
            }</div>
        )
    }
}

export default MealPlanSection
