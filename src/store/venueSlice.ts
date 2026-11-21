import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { VenueItem } from '../types'
import { venueImages } from '../assets/images'

const initialState: VenueItem[] = [
  {
    img: venueImages.conferenceRoom.url,
    name: 'Conference Room (Capacity:15)',
    capacity: 15,
    cost: 1500,
    quantity: 0,
  },
  {
    img: venueImages.auditoriumHall.url,
    name: 'Auditorium Hall (Capacity:200)',
    capacity: 200,
    cost: 5500,
    quantity: 0,
  },
  {
    img: venueImages.presentationRoom.url,
    name: 'Presentation Room (Capacity:50)',
    capacity: 50,
    cost: 3500,
    quantity: 0,
  },
  {
    img: venueImages.largeMeetingRoom.url,
    name: 'Large Meeting Room (Capacity:10)',
    capacity: 10,
    cost: 1000,
    quantity: 0,
  },
  {
    img: venueImages.smallMeetingRoom.url,
    name: 'Small Meeting Room (Capacity:5)',
    capacity: 5,
    cost: 800,
    quantity: 0,
  },
]

export const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (state[index]) {
        state[index].quantity++
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--
      }
    },
  },
})

export const { incrementQuantity, decrementQuantity } = venueSlice.actions
export default venueSlice.reducer
