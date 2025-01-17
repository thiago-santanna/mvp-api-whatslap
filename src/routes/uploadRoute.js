import fs from "fs";
import path from "path";
import axios from "axios";

async function uploadRoute(fastify, options) {
  fastify.post("/upload", async (request, reply) => {
    const data = await request.file();
    const filePath = path.join(__dirname, "../../uploads", data.filename);

    // Salvar o arquivo localmente
    await fs.promises.writeFile(filePath, await data.toBuffer());

    // Enviar o arquivo para outra API
    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));

    try {
      const response = await axios.post(
        "https://outra-api.com/receive-notas",
        formData,
        {
          headers: formData.getHeaders(),
        }
      );
      reply.send({
        message: "Arquivo enviado com sucesso",
        data: response.data,
      });
    } catch (error) {
      reply
        .status(500)
        .send({ message: "Erro ao enviar o arquivo", error: error.message });
    }
  });
}

export default uploadRoute;
