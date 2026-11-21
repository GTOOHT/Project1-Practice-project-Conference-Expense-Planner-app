export interface VenueItem {
  img: string
  name: string
  capacity: number
  cost: number
  quantity: number
}

export interface AvItem {
  img: string
  name: string
  cost: number
  quantity: number
}

export interface MealItem {
  name: string
  cost: number
  selected: boolean
}

export interface SummaryLineItem {
  name: string
  unitCost: number
  quantity: string
  totalCost: number
}
