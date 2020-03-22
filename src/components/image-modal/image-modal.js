import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import React, { useState } from 'react';
import classes from './image-modal.module.css';

const ImageModal = ({ url, text}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModalState = () => {
		setIsModalOpen(!isModalOpen);
	}

	return (
		<div className={classes.img_modal}>
			{
				isModalOpen ?
				<ReactModal
					isOpen={isModalOpen}
					onRequestClose={toggleModalState}
					contentLabel="Example Modal In Gatsby"
					overlayClassName={classes.img_modal_overlay_open}
					className={classes.img_modal_content_open}
				>
					<span className={classes.close} onClick={toggleModalState}>Close Modal</span>
					<img src={url} alt={text} class="my-1"/>
				</ReactModal> : 
				<span onClick={toggleModalState}>
					<img src={url} alt={text} class="my-1"/>
				</span>
			}
		</div>
	)
}

ImageModal.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
}

export default ImageModal;