import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postcode: '',
  wasteTypes: [],
  skipSize: '',
  permitRequired: false,
  deliveryDate: '',
  paymentDetails: {
    total: 0,
    method: ''
  },
  currentStep: 0
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePostcode: (state, action) => {
      state.postcode = action.payload;
    },
    toggleWasteType: (state, action) => {
      const wasteType = action.payload;
      const index = state.wasteTypes.indexOf(wasteType);
      if (index === -1) {
        state.wasteTypes.push(wasteType);
      } else {
        state.wasteTypes.splice(index, 1);
      }
    },
    updateSkipSize: (state, action) => {
      state.skipSize = action.payload;
    },
    updatePermit: (state, action) => {
      state.permitRequired = action.payload;
    },
    updateDeliveryDate: (state, action) => {
      state.deliveryDate = action.payload;
    },
    updatePaymentDetails: (state, action) => {
      state.paymentDetails = { ...state.paymentDetails, ...action.payload };
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    }
  }
});

export const {
  updatePostcode,
  toggleWasteType,
  updateSkipSize,
  updatePermit,
  updateDeliveryDate,
  updatePaymentDetails,
  setCurrentStep,
  resetForm
} = formSlice.actions;

export default formSlice.reducer; 