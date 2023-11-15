const User = require('../models/User');

module.exports = {
  async login(req, res){
    const { email, password } = req.body;
    const usersIsRegistered = await User.findOne({
      where: {
        email: email,
        password: password
      },
      attributes: ['name', 'email', 'user_external_id', 'createdAt', 'updatedAt'],
    });

    if(!usersIsRegistered){
      return res.status(403).json({error: 'Usuário ou senha incorreto'});
    }

    return res.json(usersIsRegistered);
  },

  async index(req, res){
    const users = await User.findAll({
      attributes: ['name', 'email', 'user_external_id', 'createdAt', 'updatedAt'],
    });
    return res.json(users);
  },

  async create(req, res){
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }
    
    const user = await User.create({name, email, password});

    return res.json(user);
  },
};
