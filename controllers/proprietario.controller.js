import ProprietarioService from '../services/proprietario.service.js';

async function createProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error('Nome e telefone são obrigatórios.');
    }
    proprietario = await ProprietarioService.createProprietario(proprietario);
    res.send(proprietario);
    logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (error) {
    next(error);
  }
}

async function getProprietarios(req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietarios());
    logger.info('GET /proprietario');
  } catch (error) {
    next(error);
  }
}

async function getProprietario(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await ProprietarioService.getProprietario(id));
    logger.info(`GET /proprietario/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function deleteProprietario(req, res, next) {
  try {
    let id = req.params.id;
    await ProprietarioService.deleteProprietario(id);
    res.end();
    logger.info(`DELETE /proprietario/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function updateProprietario(req, res, next) {
  try {
    let proprietario = req.body;
    if (
      !proprietario.proprietario_id ||
      !proprietario.nome ||
      !proprietario.telefone
    ) {
      throw new Error('Proprietario_Id, Nome e telefone são obrigatórios.');
    }
    proprietario = await ProprietarioService.updateProprietario(proprietario);
    res.send(proprietario);
    logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  deleteProprietario,
  updateProprietario,
};
