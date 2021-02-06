import Head from 'next/head';
import ArticleList from '../components/article-list';

export default function Home({ articles }) {
	console.log('articles ', articles);
	return (
		<div>
			<Head>
				<title>Create Next Apps</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ArticleList articles={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=6'
	);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
