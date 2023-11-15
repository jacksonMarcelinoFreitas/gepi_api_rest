const Employee = require('../models/Employee');

module.exports = {
  async show(req, res){
    const { employee_external_id } = req.params;
    const employee = await Employee.findOne({
      where: {
        employee_external_id
      },
      attributes: ["name", "sector", "registration", "employee_external_id", "created_at", "updated_at"],
    });

    if(!employee){
      return res.status(400).json({error: 'Funcionário não está registrado na base de dados!'});
    }

    return res.json(employee);
  },

  async index(req, res){
    const employees = await Employee.findAll({
      attributes: ["name", "sector", "registration", "employee_external_id", "created_at", "updated_at"],
    });

    if(!employees){
      return res.json({ message: 'Não há funcionários na base de dados' });
    }

    return res.json(employees);
  },

  async create(req, res){
    const { name, sector, registration } = req.body;

    const existingEmployee = await Employee.findOne({
      where: {
        registration,
      },
      attributes: ["name", "sector", "registration", "employee_external_id", "created_at", "updated_at"],
    });

    if (existingEmployee) {
      return res.status(400).json({ error: `Este funcionário de CNPJ: ${cnpj} já existe.` });
    }
    
    try {
      const employee = await Employee.create({ name, sector, registration });
      return res.status(200).json({ message: 'Funcionário criado com sucesso.' });
    } catch (error) {
      return res.json({ error: `${error}` });
    }

  },

  async update(req, res){
    const { employee_external_id } = req.params;
    const { name, sector, registration } = req.body;

    try {
      const [updatedRowCount] = await Employee.update(
        { name, sector, registration },
        {
          where: {
            employee_external_id,
          },
          returning: true, // Retorna os registros atualizados
        }
      );

      if (updatedRowCount === 0) {
        return res.status(404).json({ error: `Funcionário com employee_external_id: ${employee_external_id} não encontrado.` });
      }

      const updatedSupplier = await Employee.findOne({
        where: {
          employee_external_id,
        },
        attributes: ["name", "sector", "registration", "employee_external_id", "created_at", "updated_at"],
      });

      return res.json(updatedSupplier);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno ao atualizar o Employee." });
    }

  },

  async delete(req, res){
    const { employee_external_id } = req.params;

    const result = await Employee.destroy({
      where: {
        employee_external_id
      },
    });

    if(!result){
      return res.status(401).json({ message: 'Não foi possível deletar o funcionário.' });
    }
      
    return res.json({ message: 'Funcionário deletado com sucesso.' });
  },
};
