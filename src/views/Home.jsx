import { generateToken } from '@the-collab-lab/shopping-list-utils';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export function Home({ setToken }) {
	const navigate = useNavigate();

	const handleNewList = () => {
		const token = generateToken();
		if (token) {
			setToken(token);
			navigate('/list');
		}
	};

	return (
		<div className="Home">
			<p>Welcome to your Smart Shopping List</p>
			<button onClick={handleNewList} className="Home__button">
				Create new list
			</button>
		</div>
	);
}
