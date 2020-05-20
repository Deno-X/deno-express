import * as expressive from "../mod.ts";

(async () => {
  const port = 8000;
  const app = new expressive.App();
  app.use(expressive.simpleLog());
  app.use(expressive.static_("./public"));
  app.use(expressive.bodyParser.json());
  const server = await app.listen(port);
  console.log("app listening on port: " + server.port);
})();
