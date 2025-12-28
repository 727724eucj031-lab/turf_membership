import React, { createContext, useContext, useState } from 'react';

const SubscriptionContext = createContext();

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const addSubscription = (subscription) => {
    const newSubscription = {
      ...subscription,
      id: Date.now().toString(),
    };
    setSubscriptions(prev => [...prev, newSubscription]);
    return newSubscription.id;
  };

  const updateSubscriptionStatus = (id, status) => {
    setSubscriptions(prev =>
      prev.map(sub => sub.id === id ? { ...sub, status } : sub)
    );
  };

  const getSubscription = (id) => {
    return subscriptions.find(sub => sub.id === id);
  };

  const value = {
    subscriptions,
    addSubscription,
    updateSubscriptionStatus,
    getSubscription,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};