import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input }, { session }) => {
      await Listing.save({
        ...input,
        pictureUrl: "",
        userId: session.userId,
      });

      return true;
    },
  },
};
