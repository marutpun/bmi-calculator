import { writable } from 'svelte/store';

const initialState = {
  height: 12,
  weight: 13,
  bmiVal: 14,
  minWeight: 15,
  maxWeight: 16,
  loseRecommend: 17,
};

export const bmiStore = writable(initialState);

export function addValue(height, weight) {
  // NOT WORK
  // bmiStore.set((state) => {
  //   const newValue = {
  //     height,
  //     weight,
  //   };
  //   return { ...state, newValue };
  // });
}

export function resetState() {
  // NOT WORK
  // bmiStore.set((state) => {
  //   const newValue = {
  //     height: 0,
  //     weight: 0,
  //   };
  //   return { ...state, newValue };
  // });
}
