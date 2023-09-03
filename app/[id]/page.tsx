import React from 'react';
import { gql } from '@apollo/client';
import { getClient } from 'lib/client';

const GET_DOCUMENT = gql`
	query Assets($where: DocumentWhereInput!) {
		documents(where: $where) {
			content {
				html
			}
			documentId
			title
		}
	}
`;

export default async function Page({ params }) {
	const { data }: any = await getClient().query({
		query: GET_DOCUMENT,
		variables: { where: { documentId: params.id } },
	});
	console.log(data.documents[0].content.html);

	return <div>{data.documents[0].content.html}</div>;
}
