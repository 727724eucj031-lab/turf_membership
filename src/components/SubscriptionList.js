import React from 'react';
import { Link } from 'react-router-dom';
import { useSubscription } from '../context/SubscriptionContext';

const SubscriptionList = () => {
  const { subscriptions } = useSubscription();

  return (
    <div>
      <h1>Subscription List</h1>
      <ul>
        {subscriptions.map(subscription => (
          <li key={subscription.id}>
            <Link to={`/subscription/${subscription.id}`}>
              {subscription.name}
            </Link>
            <span> - {subscription.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;