import '../Footer/styles.css'

export default function Footer({title, posterURL}) {

    return (
        <div className="Footer">
            <img src={posterURL} alt={title} />
            <h3>{title}</h3>
        </div>

    )

}