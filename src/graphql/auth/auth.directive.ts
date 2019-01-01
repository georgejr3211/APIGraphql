import { SchemaDirectiveVisitor } from "graphql-tools";

export class AuthDirective extends SchemaDirectiveVisitor {

  visitFieldDefinition(field: any) {

    const { resolve } = field;

    field.resolve = async (...args: any) => {
      const [, , auth] = args;

      const size = Object.keys(auth).length;

      if (!size) {
        throw new Error('Sem autorização, token inválido ou expirado. É necessário informar um token para ter acesso!');
      }

      const result = await resolve.apply(this, args);
      return result;

    }
  }

}