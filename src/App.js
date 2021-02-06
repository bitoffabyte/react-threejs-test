import './App.css';
import { Canvas } from 'react-three-fiber';
import Box from './Box';
import { OrbitControls, Stars } from '@react-three/drei';
function App() {
	return (
		<Canvas>
			<OrbitControls />
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 15, 10]} angle={0.3} />
			<Box />
			<Stars />
		</Canvas>
	);
}

export default App;
