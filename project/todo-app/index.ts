import fastify from "fastify";

const PORT = parseInt(process.env.PORT || "8080", 10);

const server = fastify();

server.get("/ping", async (request, response) => {
  return "pong";
});

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server started at ${address}`);
});
