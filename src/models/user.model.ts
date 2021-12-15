import { MealPlan } from './meal-plan.model'

export class User {
    public id?: string
    public name?: string
    public mealPlans?: MealPlan[]

    constructor(value?: { id?: string, name?: string, mealPlans?: MealPlan[] }) {
        this.id = value?.id
        this.name = value?.name
        this.mealPlans = value?.mealPlans
    }
}
