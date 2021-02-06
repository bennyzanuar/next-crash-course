import headerStyles from '../styles/Header.module.css';

const header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Webdev</span> News
			</h1>
			<p className={headerStyles.description}>
				Keep up to date with latest web dev news
			</p>
			{/* <style jsx>
				{`
					.title {
						color: red;
					}
				`}
			</style> */}
		</div>
	);
};

export default header;