import Link from "next/link";

export default function ContactButton({url="/", className="", children}) {
    return <Link href={url}>
        <button className={"btn w-full " + className}>
            {children}
        </button>
    </Link>
}