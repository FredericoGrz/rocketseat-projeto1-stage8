const AppError = require("../utils/AppError")

class UsersController {
  /**
   * Index - GET para listar varios registros.
   * show - GET para exibir um registro especifico
   * create - POST para Criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   */
  create(request, response) {
    const { name, email, password } = request.body

    if(!name){
      throw new AppError("Nome é obrigatorio")
    }

    response.status(201).json({ name, email, password })
  }

}

module.exports = UsersController