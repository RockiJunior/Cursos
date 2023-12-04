import styles from './App.module.css';
import { Square } from './components/Sqare/Sqare';


export const App = () => {
	const { container } = styles;
	
  return (
		<div className={container}>
			<Square />
		</div>
	);

};
