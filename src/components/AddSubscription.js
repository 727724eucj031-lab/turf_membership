import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSubscription } from '../context/SubscriptionContext';

const AddSubscription = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Active');
  const { addSubscription } = useSubscription();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubscription({
      name,
      price: parseFloat(price),
      status,
    });
    history.push('/');
  };

  return (
    <div>
      <h2>Add New Subscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subscription Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">Add Subscription</button>
      </form>
    </div>
  );
};

export default AddSubscription;