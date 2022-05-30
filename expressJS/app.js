const express = require("express");
const app = express();
const port = 3020;
const availabilitiesRouter = require("./routes/availabilities");
const reservationsRouter = require("./routes/reservations");
const cors = require("cors");
app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
// var corsOptions = {
//   origin: "http://localhost:3000/"
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/availabilities", availabilitiesRouter);
app.use("/reservations", reservationsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});