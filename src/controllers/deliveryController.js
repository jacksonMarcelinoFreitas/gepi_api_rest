const Delivery = require('../models/Delivery');

module.exports = {

  async index(req, res){
    const deliveries = await Delivery.findAll({
      attributes: ["employee_name", "employee_registration", "sector", "epi_name", "epi_code", "amount_required", "created_at", "updated_at"],
    });

    if(!deliveries){
      return res.json({ message: 'Não há entregas na base de dados' });
    }

    return res.json(deliveries);
  },

  async create(req, res){
    const { employee_name, employee_registration, sector, epi_name, epi_code, amount_required } = req.body;
    
    try {
      const delivery = await Delivery.create({ employee_name, employee_registration, sector, epi_name, epi_code, amount_required });

      if(!delivery){
        return res.status(400).json({ message: 'Não foi possível resgistrar.' });
      }

      return res.status(200).json({ message: 'Entrega registrada com sucesso.' });

    } catch (error) {

      return res.json({ error: `${error}` });

    }

  },
};
