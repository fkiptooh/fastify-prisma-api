import Fastify from 'fastify';

const server = Fastify();

server.get("/healthcheck", async function(request, response){
    return { status: "OK" }
});

(async function main() {
    try {
        await server.listen(3000, "0.0.0.0");
        console.log("Server ready at http://localhost:3000");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}());