import React from 'react';
import { ModalTheme, ModalBackdrop } from './Modal.styled';

export const Modal = ({ open, setOpen, children, ...rest }) => {
    return(
        open && (
            <>
                <ModalBackdrop onClick={() => setOpen(false)} />
                <ModalTheme {...rest}>
                    {children}
                </ModalTheme>
            </>
        )
    )
}