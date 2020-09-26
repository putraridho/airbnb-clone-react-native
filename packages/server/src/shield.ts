import { rule, shield } from "graphql-shield";

const isAuthenticated = rule()(
  (_: any, __: any, context: any) => !!context.session.userId
);

export const middlewareShield = shield({
  Mutation: {
    createListing: isAuthenticated,
    deleteListing: isAuthenticated,
  },
});
