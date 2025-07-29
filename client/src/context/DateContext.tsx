import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface DateContextType {
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  setPickupDate: (date: string) => void;
  setReturnDate: (date: string) => void;
  setPickupLocation: (location: string) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error('useDateContext must be used within a DateProvider');
  }
  return context;
};

interface DateProviderProps {
  children: ReactNode;
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');

  const value = {
    pickupDate,
    returnDate,
    pickupLocation,
    setPickupDate,
    setReturnDate,
    setPickupLocation,
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
}; 