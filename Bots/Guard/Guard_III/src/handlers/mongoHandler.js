const mongoose = require("mongoose");
const takachicim = require("../../../../../config.json");

mongoose.set('strictQuery', true);
mongoose.connect(takachicim.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Database bağlantısı tamamlandı!");
});
mongoose.connection.on("error", () => {
  console.error("[HATA] Database bağlantısı kurulamadı!");
});