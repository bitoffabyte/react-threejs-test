const Box = () => {
	return (
		<mesh>
			<boxBufferGeometry attach='geometry' />
			<meshLambertMaterial attach='material' color='hotpink' />
		</mesh>
	);
};

export default Box;
