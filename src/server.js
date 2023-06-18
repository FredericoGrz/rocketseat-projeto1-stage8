require("express-async-errors")

const AppError = require("./utils/AppError")

const express = require("express");

//Por padrao quando a gente nao diz o arquivo de uma pasta, ele carrega o arquivo index
const routes = require("./routes")

const app = express();

const PORT = 3333;

//Diz pra aplicacao que o padrao de request vira em formato de json
app.use(express.json())
app.use(routes)
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));