import Nav from './nav';
import Header from './header';
import styles from '../styles/Layout.module.css';

const layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</div>
		</>
	);
};

export default layout;
