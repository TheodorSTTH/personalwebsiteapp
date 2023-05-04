import Image from "next/image"
export default function Card({imageURL, urls=[], labels=[], badge, title="", about="", setState, href="", additionalAbout}) {
    return <a href={"#" + href}>
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-lg border transition-all" onClick={() => setState({imageURL, urls, labels, badge, title, about, additionalAbout})}>
            <figure className="border-b">
                <Image
                src={imageURL}
                alt={"image of " + title}
                width={500}
                height={500} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title || "untitled"}
                    {badge && <div className="badge badge-accent">{badge.toUpperCase()}</div>}
                </h2>
                <p>{about}</p>
                <div className="card-actions justify-start">
                    {
                        labels.map(item => (<div className="badge badge-outline">{item}</div>))
                    }
                </div>
            </div>
        </div>
    </a>
}