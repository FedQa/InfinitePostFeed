import classes from './Modal.module.css'

export const Modal = ({children, modal, setModal}) => {

    const rootClasses = [classes.modal];
    if (modal) {
        rootClasses.push(classes.active);
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setModal(!modal)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}