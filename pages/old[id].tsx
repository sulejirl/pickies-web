import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Head from 'next/head';

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
export default function Page({ params }) {
	const router = useRouter();
	const { id } = router.query;

	const { data, loading, error } = useQuery(GET_DOCUMENT, {
		variables: { where: { documentId: id } },
		fetchPolicy: 'network-only',
	});

	const html = data?.documents[0]?.content.html || '';
	const title = data?.documents[0]?.title || '';

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error</div>;
	if (!html) router.push('/');

	return (
		<div style={{ margin: '2rem' }}>
			<Head>
				<title>{title}</title>
			</Head>
			{parse(html)}
		</div>
	);
}
