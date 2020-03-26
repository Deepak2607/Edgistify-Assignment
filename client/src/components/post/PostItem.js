import React from 'react';
import { Link} from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';


const PostItem = (props) => {
     
   return(    
        <div className="post bg-white p-1 my-1">
          <div>
                <img className='round-img' src={props.post.avatar} alt='' />
                <h4>{props.post.name}</h4>
          </div>
          <div>
            <p className="my-1">{props.post.text}</p>
            <p className="post-date"> Posted on <Moment format='MMMM Do YYYY, h:mm:ss a'>{props.post.date}</Moment> </p>
          </div>
        </div> 
    );
};

export default PostItem;