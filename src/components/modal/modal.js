import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import React, {useState} from 'react'
import classes from './modal.module.css'
import {useEffect} from 'react'

const Modal = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  // There is currently bug that plant uml
  // module is setting a style as non responsive.
  const overridePlantUmlStyle = () => {
    var element = document
      .getElementsByClassName(classes.modal)[0]
      ?.querySelector('span')
      ?.querySelector('svg')

    if (element != null) {
      element.style.width = 'auto'
      element.style.maxWidth = '100%'
      element.style.height = 'auto'
    }
  }

  useEffect(() => {
    overridePlantUmlStyle()
  })

  return (
    <div className={classes.modal}>
      {isModalOpen ? (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={toggleModalState}
          contentLabel="Content in modal"
          overlayClassName={classes.modal_overlay_open}
          className={classes.modal_content_open}>
          <span className={classes.close} onClick={toggleModalState}>
            Close Modal
          </span>
          {children}
        </ReactModal>
      ) : (
        <span onClick={toggleModalState}>{children}</span>
      )}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.any,
}

export default Modal
