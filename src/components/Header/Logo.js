import React from 'react'
import {Link} from "react-router-dom"
import cn from "classnames";

function Logo(props) {

    const {
        class_name
    } = props;

    return (
        <div className={cn(`${class_name}`)}>
            <Link to="/">
                <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"/>
            </Link>
        </div>
    )
}

export default Logo
