import React from 'react';
import { gql } from '@apollo/client';
import { getClient } from 'lib/client';
import parse from 'html-react-parser';

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

export default async function Page({ params }: any) {
	const { data }: any = await getClient().query({
		query: GET_DOCUMENT,
		variables: { where: { documentId: params.id } },
	});
	const html = parse(data?.documents[0]?.content.html || '');

	return (
		<div className='mx-28 my-10'>
			<div>{html}</div>
		</div>
	);
}
