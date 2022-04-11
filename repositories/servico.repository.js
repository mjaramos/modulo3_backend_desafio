import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js';
import Proprietario from '../models/proprietario.model.js';

async function insertServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (error) {
    throw error;
  }
}

async function getServicos() {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getServicosByAnimalId(animalId) {
  try {
    return await Servico.findAll({
      where: {
        animalId,
      },
    });
  } catch (error) {}
}

async function getServicosByProprietarioId(proprietarioId) {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
          where: {
            proprietarioId,
          },
        },
      ],
    });
  } catch (error) {}
}

async function getServico(id) {
  try {
    return await Servico.findByPk(id);
  } catch (error) {}
}

async function deleteServico(id) {
  try {
    await Servico.destroy({
      where: {
        servicoId: id,
      },
    });
  } catch (error) {}
}

async function updateServico(servico) {
  try {
    await Servico.update(
      {
        descricao: servico.descricao,
        valor: servico.valor,
        animalId: servico.animalId,
      },
      {
        where: {
          servicoId: servico.servicoId,
        },
      }
    );
    return await getSale(servico.servicoId);
  } catch (error) {}
}

export default {
  insertServico,
  getServicos,
  getServicosByAnimalId,
  getServico,
  deleteServico,
  updateServico,
  getServicosByProprietarioId,
};
