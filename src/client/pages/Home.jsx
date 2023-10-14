import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getPlants from '@wasp/queries/getPlants';
import createPlant from '@wasp/actions/createPlant';
import updatePlant from '@wasp/actions/updatePlant';
import deletePlant from '@wasp/actions/deletePlant';
import waterPlant from '@wasp/actions/waterPlant';

export function Home() {
  const { data: plants, isLoading, error } = useQuery(getPlants);
  const createPlantFn = useAction(createPlant);
  const updatePlantFn = useAction(updatePlant);
  const deletePlantFn = useAction(deletePlant);
  const waterPlantFn = useAction(waterPlant);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreatePlant = (name, wateringFrequency) => {
    createPlantFn({ name, wateringFrequency });
  };

  const handleUpdatePlant = (id, name, wateringFrequency) => {
    updatePlantFn({ id, name, wateringFrequency });
  };

  const handleDeletePlant = (id) => {
    deletePlantFn({ plantId: id });
  };

  const handleWaterPlant = (id) => {
    waterPlantFn({ id });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>My Plants</h1>
      <div className='grid grid-cols-3 gap-4'>
        {plants.map((plant) => (
          <div
            key={plant.id}
            className='bg-gray-100 p-4 rounded-lg flex flex-col gap-2'
          >
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-bold'>{plant.name}</h2>
              <div className='flex gap-2'>
                <button
                  onClick={() => handleUpdatePlant(plant.id, plant.name, plant.wateringFrequency)}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePlant(plant.id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                >
                  Delete
                </button>
              </div>
            </div>
            <p>Watering in {plant.wateringFrequency} days</p>
            <button
              onClick={() => handleWaterPlant(plant.id)}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              Water
            </button>
          </div>
        ))}
      </div>
      <Link
        to='/add-plant'
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'
      >
        Add Plant
      </Link>
    </div>
  );
}