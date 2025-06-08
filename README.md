# Skip Hire Service Application

A modern, user-friendly skip hire booking application built with React, Redux Toolkit, and Tailwind CSS.

## Features

### 1. Multi-Step Booking Process
- **Step 1: Postcode Entry**
  - Clean, focused landing page
  - Instant postcode validation
  - Location-based service check

- **Step 2: Waste Type Selection**
  - Multiple waste type selection
  - Interactive cards with visual feedback
  - Categories include:
    - Household Waste
    - Garden Waste
    - Construction
    - Soil & Rubble
    - Commercial
    - Metal & Appliances

- **Step 3: Skip Size Selection**
  - Visual size comparison
  - Pricing information
  - Capacity details
  - Available sizes:
    - 4 Yard (£211)
    - 5 Yard (£241)
    - 6 Yard (£264)
    - 8 Yard (£299)
    - 10 Yard (£340)
    - 12 Yard (£380)

- **Step 4: Permit Check**
  - Road permit requirement check
  - Additional cost calculation
  - Location-based requirements

- **Step 5: Delivery Date**
  - Calendar selection
  - Available slot checking
  - Next day delivery options

- **Step 6: Payment & Confirmation**
  - Order summary
  - Secure payment processing
  - Booking confirmation

### 2. User Interface

#### Modern Design Elements
- Clean, minimalist interface
- Responsive layout
- Custom typography using:
  - Inter font for body text
  - Outfit font for headings
- Smooth transitions and animations

#### Interactive Components
- Progress stepper navigation
- Multi-select waste type cards
- Dynamic pricing updates
- Responsive form elements

### 3. Technical Implementation

#### State Management
- Redux Toolkit for global state
- Form data persistence
- Step navigation tracking
- Waste type and heavy waste selection management
- Skip filtering and availability checks

#### Waste Type Selection System
1. **General Waste Selection**
   - Multiple waste type selection
   - Categories include:
     - Household Waste
     - Garden Waste
     - Construction
     - Soil & Rubble
     - Commercial
     - Metal & Appliances

2. **Heavy Waste Handling**
   - Two-step verification process:
     1. Initial heavy waste check
     2. Specific heavy waste type selection
   - Heavy waste categories:
     - Soil
     - Rubble
     - Concrete
     - Bricks
   - Automatic skip filtering based on heavy waste requirements

#### Skip Filtering System
1. **Dynamic Filtering**
   - Filters based on:
     - Postcode availability
     - Heavy waste compatibility
     - Road placement requirements
   - Real-time skip availability updates

2. **Skip Display Features**
   - Visual representation with skip images
   - Price calculation with VAT
   - Hire period information
   - Road placement availability indicators
   - Heavy waste compatibility badges
   - Dynamic pricing updates

3. **Availability Handling**
   - No results handling with specific messages
   - Different messages for:
     - Heavy waste incompatibility
     - General availability issues
   - User guidance for alternative options

#### Data Structure
```javascript
// Skip Data Structure
{
  id: number,
  size: number,
  hire_period_days: number,
  price_before_vat: number,
  vat: number,
  postcode: string,
  allowed_on_road: boolean,
  allows_heavy_waste: boolean
}

// Form State Structure
{
  selectedWasteTypes: string[],
  hasHeavyWaste: boolean,
  heavyWasteTypes: string[],
  skipFilters: {
    needsRoadPlacement: boolean,
    needsHeavyWaste: boolean,
    postcode: string
  }
}
```

#### User Flow
1. **Waste Type Selection**
   - Select multiple waste types
   - Confirm heavy waste requirements
   - Choose specific heavy waste types if applicable

2. **Skip Selection**
   - View filtered available skips
   - See waste requirements summary
   - Select appropriate skip size
   - View compatibility information

3. **Validation & Navigation**
   - Waste type validation
   - Heavy waste confirmation
   - Skip availability checks
   - Navigation controls

#### Styling
- Tailwind CSS for styling
- Custom gradients and animations
- Responsive design principles
- Dark mode optimized

#### Form Handling
- Multi-step form validation
- Real-time input validation
- Error handling
- Data persistence between steps

## Technology Stack

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Hero Icons
- Google Fonts (Inter & Outfit)

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── StepOne.jsx    # Postcode entry
│   ├── StepTwo.jsx    # Waste type selection
│   ├── StepThree.jsx  # Skip size selection
│   ├── StepFour.jsx   # Permit check
│   ├── StepFive.jsx   # Date selection
│   ├── StepSix.jsx    # Payment
│   └── StepperNav.jsx # Navigation
├── store/
│   ├── store.js
│   └── features/
│       └── formSlice.js
└── styles/
    └── skip.css
```

## Design Approach

The application follows these key design principles:

1. **Progressive Disclosure**
   - Information presented in logical steps
   - Reduced cognitive load
   - Clear progress indication

2. **Visual Hierarchy**
   - Important information highlighted
   - Clear call-to-action buttons
   - Consistent visual language

3. **User Feedback**
   - Interactive state changes
   - Progress indication
   - Clear error messages
   - Success confirmations

4. **Accessibility**
   - Semantic HTML
   - Keyboard navigation
   - Screen reader friendly
   - Color contrast compliance

## Future Enhancements

- Integration with payment gateway
- Email notifications
- Admin dashboard
- Order tracking
- Customer account area
- Saved addresses
- Repeat booking functionality
