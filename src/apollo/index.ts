import { ApolloClient, NormalizedCacheObject, InMemoryCache } from "@apollo/client";
import { STRAPI_URI } from "../utils/constants";


export const apolloStrapi: ApolloClient<NormalizedCacheObject> = 
new ApolloClient ({
uri: `${STRAPI_URI}/graphql`,
cache: new InMemoryCache( ),
});