import "./styles/BlogCard.css";

export default function BlogCard(props) {
    return ( 
        <div className="blog-box" >
            <div className="blog-text">
                <span>{props.date}</span>
                <a href={props.link} className="blog-title">{props.title}</a>
                    <p>{props.info}</p>
                <a href={props.link}>Read More</a>
            </div>
        </div>
    )
}