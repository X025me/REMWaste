import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  postcode: '',
  selectedWasteTypes: [],
  selectedSkipId: null,
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
      
      // Update skip filters based on waste types
      state.skipFilters.needsHeavyWaste = state.selectedWasteTypes.some(type => 
        ['SOIL', 'RUBBLE', 'CONCRETE', 'BRICKS'].includes(type)
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
  setSelectedSkip,
  updateSkipFilters,
  setDeliveryDate,
  setPermitRequired,
  setPaymentDetails,
  resetForm
} = formSlice.actions;

export default formSlice.reducer; 