import Fastify from "fastify";

export const buildApp = () => {
  const app = Fastify();
    app.get("/", async (request, reply) => {
    return { hello: "world" };
  });
  return app;
}