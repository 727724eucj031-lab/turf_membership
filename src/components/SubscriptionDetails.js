import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSubscription } from '../context/SubscriptionContext';

const SubscriptionDetails = () => {
  const { id } = useParams();
  const { getSubscription } = useSubscription();
  const subscription = getSubscription(id);

  if (!subscription) {
    return <div>Subscription not found!</div>;
  }

  return (
    <div>
      <h2>{subscription.name}</h2>
      <p>Price: {subscription.price}</p>
      <p>Status: {subscription.status}</p>
      <Link to={`/subscription-status/${id}`}>Update Subscription Status</Link>
      <br />
      <Link to="/">Back to Subscription List</Link>
    </div>
  );
};

export default SubscriptionDetails;