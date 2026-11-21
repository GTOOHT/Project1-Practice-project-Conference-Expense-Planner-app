import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AvItem } from '../types'
import { avImages } from '../assets/images'

const initialState: AvItem[] = [
  {
    img: avImages.projectors.url,
    name: 'Projectors',
    cost: 200,
    quantity: 0,
  },
  {
    img: avImages.speaker.url,
    name: 'Speaker',
    cost: 35,
    quantity: 0,
  },
  {
    img: avImages.microphones.url,
    name: 'Microphones',
    cost: 45,
    quantity: 0,
  },
  {
    img: avImages.whiteboards.url,
    name: 'Whiteboards',
    cost: 80,
    quantity: 0,
  },
  {
    img: avImages.signage.url,
    name: 'Signage',
    cost: 80,
    quantity: 0,
  },
]

export const avSlice = createSlice({
  name: 'av',
  initialState,
  reducers: {
    incrementAvQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (state[index]) {
        state[index].quantity++
      }
    },
    decrementAvQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--
      }
    },
  },
})

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions
export default avSlice.reducer
