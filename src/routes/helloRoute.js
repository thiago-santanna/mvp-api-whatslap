async function helloRoute(fastify, options) {
  fastify.get("/hello", async (request, reply) => {
    return { message: "Hello World" };
  });
}

export default helloRoute;
