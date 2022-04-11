import ServicoService from '../services/servico.service.js';

async function createServico(req, res, next) {
  try {
    let servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error('Descricao, valor e animal_id são obrigatórios.');
    }
    servico = await ServicoService.createServico(servico);
    res.send(servico);
    logger.info(`POST /servico - ${JSON.stringify(servico)}`);
  } catch (error) {
    next(error);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.animalId));
    logger.info('GET /servico');
  } catch (error) {
    next(error);
  }
}

async function getServico(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await ServicoService.getServico(id));
    logger.info(`GET /servico/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function getServicoProprietarioId(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await ServicoService.getServicosByProprietarioId(id));
    logger.info(`GET /servico/proprietario/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function deleteServico(req, res, next) {
  try {
    let id = req.params.id;
    await ServicoService.deleteServico(id);
    res.end();
    logger.info(`DELETE /servico/:{id}`);
  } catch (error) {
    next(error);
  }
}

async function updateServico(req, res, next) {
  try {
    let servico = req.body;
    if (
      !servico.servicoId ||
      !servico.descricao ||
      !servico.valor ||
      !servico.animalId
    ) {
      throw new Error(
        'Servico_Id, descricao, valor e animal_id são obrigatórios.'
      );
    }
    servico = await ServicoService.updateServico(servico);
    res.send(servico);
    logger.info(`PUT /servico - ${JSON.stringify(servico)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
  getServicoProprietarioId,
};
