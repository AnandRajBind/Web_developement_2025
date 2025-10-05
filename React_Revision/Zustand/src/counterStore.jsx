// import { create } from 'zustand'

// export const CounterStore = create((set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     decrement: () => set((state) => ({ count: state.count - 1 })),
//     increaseByX: (data) => set((state) => ({ count: state.count + data }))
// }))

import { create } from 'zustand'

export const CounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    increaseByX: (data) => set((state) => ({ count: state.count + data }))
}))