import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  postcode: '',
  selectedWasteTypes: [],
  selectedSkipId: null,
  hasHeavyWaste: false,
  heavyWasteTypes: [],
  skipFilters: {
    needsRoadPlacement: false,
    needsHeavyWaste: false,
    minSize: null,
    maxSize: null,
    minPrice: null,
    maxPrice: null,
    postcode: ''
  },
  deliveryDate: null,
  permitRequired: false,
  paymentDetails: null
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setPostcode: (state, action) => {
      state.postcode = action.payload;
      state.skipFilters.postcode = action.payload;
    },
    toggleWasteType: (state, action) => {
      const wasteType = action.payload;
      const index = state.selectedWasteTypes.indexOf(wasteType);
      if (index === -1) {
        state.selectedWasteTypes.push(wasteType);
      } else {
        state.selectedWasteTypes.splice(index, 1);
      }
    },
    setHasHeavyWaste: (state, action) => {
      state.hasHeavyWaste = action.payload;
      state.skipFilters.needsHeavyWaste = action.payload;
      if (!action.payload) {
        state.heavyWasteTypes = [];
      }
    },
    addHeavyWasteType: (state, action) => {
      if (!state.heavyWasteTypes.includes(action.payload)) {
        state.heavyWasteTypes.push(action.payload);
      }
    },
    removeHeavyWasteType: (state, action) => {
      state.heavyWasteTypes = state.heavyWasteTypes.filter(
        type => type !== action.payload
      );
    },
    setSelectedSkip: (state, action) => {
      state.selectedSkipId = action.payload;
    },
    updateSkipFilters: (state, action) => {
      state.skipFilters = {
        ...state.skipFilters,
        ...action.payload
      };
    },
    setDeliveryDate: (state, action) => {
      state.deliveryDate = action.payload;
    },
    setPermitRequired: (state, action) => {
      state.permitRequired = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    }
  }
});

export const {
  setCurrentStep,
  setPostcode,
  toggleWasteType,
  setHasHeavyWaste,
  addHeavyWasteType,
  removeHeavyWasteType,
  setSelectedSkip,
  updateSkipFilters,
  setDeliveryDate,
  setPermitRequired,
  setPaymentDetails,
  resetForm
} = formSlice.actions;

export default formSlice.reducer; 