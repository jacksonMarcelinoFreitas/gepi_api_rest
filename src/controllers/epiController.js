const Epi = require('../models/Epi');

module.exports = {
  async show(req, res){
    const { epi_external_id } = req.params;
    const epi = await Epi.findOne({
      where: {
        epi_external_id
      },
      attributes: ["name", "code", "amount", "description", "epi_external_id", "created_at", "updated_at"],
    });

    if(!epi){
      return res.status(400).json({error: 'Epi não está registrado na base de dados!'});
    }

    return res.json(epi);
  },

  async index(req, res){
    const epis = await Epi.findAll({
      attributes: ["name", "code", "amount", "description", "epi_external_id", "created_at", "updated_at"],
    });

    if(!epis){
      return res.json({ message: 'Não há epis na base de dados' });
    }

    return res.json(epis);
  },

  async create(req, res){
    const {name, code, amount, description} = req.body;

    const existingEpi = await Epi.findOne({
      where: {
        code,
      },
      attributes: ["name", "code", "amount", "description", "epi_external_id", "created_at", "updated_at"],
    });

    if (existingEpi) {
      return res.status(400).json({ error: `Epi de código: ${code} já existe.` });
    }
    
    const epi = await Epi.create({name, code, amount, description});

    return res.status(200).json({ message: 'Epi criado com sucesso.' });
  },

  async update(req, res){
    const { epi_external_id } = req.params;
    const { name, code, amount, description } = req.body;

    try {
      const [updatedRowCount] = await Epi.update(
        {
          name,
          code,
          amount,
          description,
        },
        {
          where: {
            epi_external_id,
          },
          returning: true, // Retorna os registros atualizados
        }
      );

      if (updatedRowCount === 0) {
        return res.status(404).json({ error: `Epi com epi_external_id: ${epi_external_id} não encontrado.` });
      }

      const updatedEpi = await Epi.findOne({
        where: {
          epi_external_id,
        },
        attributes: ["name", "code", "amount", "description", "epi_external_id", "createdAt", "updatedAt"],
      });

      return res.json(updatedEpi);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno ao atualizar o Epi." });
    }

  },

  async delete(req, res){
    const { epi_external_id } = req.params;

    const result = await Epi.destroy({
      where: {
        epi_external_id
      },
    });

    if(!result){
      return res.status(401).json({ message: 'Não foi possível deletar o epi.' });
    }
      
    return res.json({ message: 'Epi deletado com sucesso.' });
  },
};
