export default function Indicator({text, children}) {
    return <div className="indicator">
        <span className="indicator-item indicator-center badge badge-primary badge-lg">{text}</span> 
        {children}
    </div> 
}