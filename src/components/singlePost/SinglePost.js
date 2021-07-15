import React from 'react'
import './SinglePost.css';

function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="singlePostImg" alt="" />
                <h1 className="singlePostTitle">
                    Always test your software.
                    <div className="singlePostEditContainer">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Naresh</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                Always test your software with a worst-case scenario amount of sample data, to get an accurate sense of its performance in the real world.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
