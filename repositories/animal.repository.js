import Animal from '../models/animal.model.js';
import Proprietario from '../models/proprietario.model.js';

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (error) {
    throw error;
  }
}

async function getAnimals() {
  try {
    return await Animal.findAll({
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getAnimalsByProprietarioId(proprietarioId) {
  try {
    return await Animal.findAll({
      where: {
        proprietarioId,
      },
    });
  } catch (error) {}
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id, {
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (error) {}
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({
      where: {
        animalId: id,
      },
    });
  } catch (error) {}
}

async function updateAnimal(animal) {
  try {
    await Animal.update(
      {
        nome: animal.nome,
        tipo: animal.tipo,
        proprietarioId: animal.proprietarioId,
      },
      {
        where: {
          animalId: animal.animalId,
        },
      }
    );
    return await getSale(animal.animalId);
  } catch (error) {}
}

export default {
  insertAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalsByProprietarioId,
};
