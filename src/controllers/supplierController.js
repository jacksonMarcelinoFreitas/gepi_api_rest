const Supplier = require('../models/Supplier');

module.exports = {
  async show(req, res){
    const { supplier_external_id } = req.params;
    const supplier = await Supplier.findOne({
      where: {
        supplier_external_id
      },
      attributes: ["name", "cnpj", "type", "contact", "supplier_external_id", "created_at", "updated_at"],
    });

    if(!supplier){
      return res.status(400).json({error: 'Fornecedor não está registrado na base de dados!'});
    }

    return res.json(supplier);
  },

  async index(req, res){
    const suppliers = await Supplier.findAll({
      attributes: ["name", "cnpj", "type", "contact", "supplier_external_id", "created_at", "updated_at"],
    });

    if(!suppliers){
      return res.json({ message: 'Não há fornecedores na base de dados' });
    }

    return res.json(suppliers);
  },

  async create(req, res){
    const { name, cnpj, type, contact } = req.body;

    const existingSupplier = await Supplier.findOne({
      where: {
        cnpj,
      },
      attributes: ["name", "cnpj", "type", "contact", "supplier_external_id", "created_at", "updated_at"],
    });

    if (existingSupplier) {
      return res.status(400).json({ error: `Este fornecedor de CNPJ: ${cnpj} já existe.` });
    }
    
    try {
      const supplier = await Supplier.create({ name, cnpj, type, contact });
      return res.status(200).json({ message: 'Fornecedor criado com sucesso.' });
    } catch (error) {
      return res.json({ error: `${error}` });
    }

  },

  async update(req, res){
    const { supplier_external_id } = req.params;
    const { name, cnpj, type, contact } = req.body;

    try {
      const [updatedRowCount] = await Supplier.update(
        {
          name,
          cnpj,
          type,
          contact
        },
        {
          where: {
            supplier_external_id,
          },
          returning: true, // Retorna os registros atualizados
        }
      );

      if (updatedRowCount === 0) {
        return res.status(404).json({ error: `Supplier com supplier_external_id: ${supplier_external_id} não encontrado.` });
      }

      const updatedSupplier = await Supplier.findOne({
        where: {
          supplier_external_id,
        },
        attributes: ["name", "cnpj", "type", "contact", "supplier_external_id", "created_at", "updated_at"],
      });

      return res.json(updatedSupplier);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno ao atualizar o Supplier." });
    }

  },

  async delete(req, res){
    const { supplier_external_id } = req.params;

    const result = await Supplier.destroy({
      where: {
        supplier_external_id
      },
    });

    if(!result){
      return res.status(401).json({ message: 'Não foi possível deletar o fornecedor.' });
    }
      
    return res.json({ message: 'Fornecedor deletado com sucesso.' });
  },
};
