const port = process.env.PORT || 3001;
const app = require("./app");
const db = require("../../models");

app.listen(port, async () => {
  await db.sequelize.sync({ force: false, alter: true});
  console.log(`Api rodando na porta ${port}`);
});