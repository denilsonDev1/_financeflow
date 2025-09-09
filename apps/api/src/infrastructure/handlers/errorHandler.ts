import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { hasZodFastifySchemaValidationErrors } from 'fastify-type-provider-zod';
export const erroHandler = (err: FastifyError, req: FastifyRequest, reply: FastifyReply) => {
      console.error(err)
        if (hasZodFastifySchemaValidationErrors(err)) {
    return reply.code(422).send({
      error: 'Response Validation Error',
      message: "Request doesn't match the schema",
      statusCode: 422,
      details: {
        issues: err.validation,
        method: req.method,
        url: req.url,
      },
    });
  }
    }
    
