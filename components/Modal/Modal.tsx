import ReactModal from 'react-modal'
import { useEffect, useState } from 'react'

import classes from './modal.module.css'

interface Props {
    children: any
}

const Modal = ({ children }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModalState = () => {
        setIsModalOpen(!isModalOpen)
    }

    // There is currently bug that plant uml
    // module is setting a style as non responsive.
    const overridePlantUmlStyle = () => {
        let element = document.getElementsByClassName(classes.modal)[0]?.querySelector('span')?.querySelector('svg')
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
                    <span
                        role="button"
                        tabIndex={0}
                        aria-label="Close Modal"
                        className={classes.close}
                        onClick={toggleModalState}
                        onKeyDown={toggleModalState}
                    />
                    {children}
                </ReactModal>
            ) : (
                <span
                    role="button"
                    tabIndex={0}
                    aria-label="Open Modal"
                    onClick={toggleModalState}
                    onKeyDown={toggleModalState}>
                    {children}
                </span>
            )}
        </div>
    )
}

export default Modal