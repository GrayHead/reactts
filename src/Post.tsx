import {IPost} from "./models/IPost";
import React, {FC, MouseEvent} from "react";
import {Link} from "react-router-dom";

const Post: FC<IPost> = (props: IPost) => {

    let {body, id, title, userId} = props;

    let onClick = (e: MouseEvent<HTMLButtonElement>): void => {
        console.log(e.pageX);
    };
    return <div>
        <h2>{title}</h2>
        <p>{body}</p>
        {/*<button onClick={onClick}> details*/}
        {/*</button>*/}

        <Link to={'/posts/' + id}>details</Link>


    </div>
}


export default Post;
