export default function Modal({children, id="", exitBtnText=""}) {
    return <div className="modal" id={id}>
        <div className="modal-box">
            <div className="flex flex-col gap-4">
                {children}
            </div>
            <div className="modal-action">
                <a href="#" className="btn">{exitBtnText}</a>
            </div>
        </div>
    </div>
}