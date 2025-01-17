async function testRoute(fastify, options) {
  fastify.get("/test", async (request, reply) => {
    return { message: "O servidor está funcionando" };
  });
}

export default testRoute;
