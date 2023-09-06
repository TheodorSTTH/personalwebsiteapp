import Link from "next/link";

export default function ContactButton({url="/", className="", target=undefined, children}) {
    return <Link href={url} target={target}>
        <button className={"btn w-full " + className}>
            {children}
        </button>
    </Link>
}