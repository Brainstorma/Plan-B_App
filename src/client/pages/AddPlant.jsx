import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createPlant from '@wasp/actions/createPlant';

export function AddPlant() {
  const createPlantFn = useAction(createPlant);
  const history = useHistory();
  const [name, setName] = useState('');
  const [wateringFrequency, setWateringFrequency] = useState('');

  const handleCreatePlant = () => {
    createPlantFn({
      name,
      wateringFrequency: parseInt(wateringFrequency)
    });
    history.push('/');
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Add Plant</h1>
      <div className='mb-4'>
        <label className='block mb-2'>Name:</label>
        <input
          type='text'
          className='border rounded px-2 py-1 w-full'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2'>Watering Frequency (in days):</label>
        <input
          type='number'
          className='border rounded px-2 py-1 w-full'
          value={wateringFrequency}
          onChange={(e) => setWateringFrequency(e.target.value)}
        />
      </div>
      <button
        onClick={handleCreatePlant}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Plant
      </button>
      <Link to='/' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2'>
        Cancel
      </Link>
    </div>
  );
}