import "./Modal.css";

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="modal-overlay" onClick={onClose}>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;
