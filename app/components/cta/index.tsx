interface ICTA {
	waMessage: string;
	title: string;
}

const CTA = (props: ICTA) => {
	const handleGoToWhatsapp = () => {
		window.open(`https://wa.me/573102643415?text=${encodeURI(props.waMessage)}`);
	};

	return (
		<button onClick={handleGoToWhatsapp} className="font-body text-t-white font-light underline">
			{props.title}
		</button>
	);
};
export default CTA;
