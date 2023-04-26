import Link from "next/link";

export default function Anchor({body="[broken_link]", href="#", title="", children}){
    return <Link href={href} legacyBehavior>
        {children ? <a>{children}</a> : <a className="text-blue-500 hover:underline" title={title || href || "Broken link"}>
            {body}
        </a>}
    </Link>
}