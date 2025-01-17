import Fastify from "fastify";
import testRoute from "./routes/testRoute.js";
import helloRoute from "./routes/helloRoute.js";

const fastify = Fastify({ logger: true });

fastify.register(testRoute);
fastify.register(helloRoute);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Servidor iniciado na porta 3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
