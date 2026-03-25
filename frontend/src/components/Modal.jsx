import React, { useEffect } from "react";
import "../css/Modal.css";

export default function Modal({ isOpen, onClose, title, children }) {
    // Close the modal when the escape key is pressed
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    // Clicking on the backdrop closes the modal, but clicking inside the container doesn't
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains("modal-backdrop")) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-container">

                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
                        &times;
                    </button>
                </div>

                <div className="modal-content">
                    {children}
                </div>

            </div>
        </div>
    );
}
