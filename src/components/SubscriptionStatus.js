import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSubscription } from '../context/SubscriptionContext';

const SubscriptionStatus = () => {
  const { id } = useParams();
  const { getSubscription, updateSubscriptionStatus } = useSubscription();
  const subscription = getSubscription(id);
  const [status, setStatus] = useState(subscription?.status || 'Active');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubscriptionStatus(id, status);
    history.push(`/subscription/${id}`);
  };

  if (!subscription) {
    return <div>Subscription not found!</div>;
  }

  return (
    <div>
      <h2>Update Subscription Status for {subscription.name}</h2>
      <form onSubmit={handleSubmit}>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">Update Status</button>
      </form>
      <Link to="/">Back to Subscription List</Link>
    </div>
  );
};

export default SubscriptionStatus;