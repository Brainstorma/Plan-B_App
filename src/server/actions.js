import HttpError from '@wasp/core/HttpError.js'

export const createPlant = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Plant.create({
    data: {
      name: args.name,
      wateringFrequency: args.wateringFrequency,
      lastWatered: new Date(),
      user: { connect: { id: context.user.id } }
    }
  });
}

export const updatePlant = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const plant = await context.entities.Plant.findUnique({
    where: { id: args.id }
  });
  if (plant.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Plant.update({
    where: { id: args.id },
    data: {
      name: args.name,
      wateringFrequency: args.wateringFrequency
    }
  });
}

export const deletePlant = async ({ plantId }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const plant = await context.entities.Plant.findUnique({
    where: { id: plantId }
  });
  if (plant.userId !== context.user.id) { throw new HttpError(403) };

  await context.entities.Plant.delete({
    where: { id: plantId }
  });
}

export const waterPlant = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const plant = await context.entities.Plant.findUnique({
    where: { id: args.id }
  });

  if (plant.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Plant.update({
    where: { id: args.id },
    data: { lastWatered: new Date() }
  });
}