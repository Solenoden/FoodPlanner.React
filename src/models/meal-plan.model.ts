export class MealPlan {
    id?: string
    name?: string
    shoppingDay?: number

    constructor(value?: { id?: string, name?: string, shoppingDay?: number }) {
        this.id = value?.id
        this.name = value?.name
        this.shoppingDay = value?.shoppingDay
    }
}
