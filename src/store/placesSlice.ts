import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoricalPlace, historicalPlaces } from '../data/places';

interface PlacesState {
  places: HistoricalPlace[];
  randomSuggestion: HistoricalPlace | null;
}

const initialState: PlacesState = {
  places: historicalPlaces,
  randomSuggestion: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    toggleVisited: (state, action: PayloadAction<string>) => {
      const place = state.places.find(p => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
    generateRandomSuggestion: (state) => {
      const availablePlaces = state.places.filter(place => !place.visited);
      if (availablePlaces.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePlaces.length);
        state.randomSuggestion = availablePlaces[randomIndex];
      } else {
        // If all places are visited, suggest any random place
        const randomIndex = Math.floor(Math.random() * state.places.length);
        state.randomSuggestion = state.places[randomIndex];
      }
    },
    clearRandomSuggestion: (state) => {
      state.randomSuggestion = null;
    },
  },
});

export const { toggleVisited, generateRandomSuggestion, clearRandomSuggestion } = placesSlice.actions;
export default placesSlice.reducer;