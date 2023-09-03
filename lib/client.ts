import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import {
	NextSSRInMemoryCache,
	NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
		},
	};
});

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
});
export const { getClient } = registerApolloClient(() => {
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: authLink.concat(httpLink),
	});
});
