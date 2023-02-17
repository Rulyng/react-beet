import { Link, useParams } from "react-router-dom"


function SinglePost(){
    let {postInfo} = useParams();
    return(
        
 <div>
    <Link to="/blog">Back to blog</Link>
    <h3>Post: {postInfo}</h3>
    <p>Info from API </p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur provident natus doloribus adipisci cum similique?</p>
 </div>
    )
}

export default SinglePost