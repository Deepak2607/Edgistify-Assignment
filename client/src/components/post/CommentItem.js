import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = (props) =>{
    
    return(  
        <div className='comments'>
        {props.post.comments.map(comment=>  {
        
            return(
              <div key={comment._id} className='post bg-white p-1 my-1'>
        
                <div>
                    <img className='round-img' src={comment.avatar} alt='' />
                    <h4>{comment.name}</h4>
                </div>

                <div>
                  <p className='my-1'>{comment.text}</p>
                  <p className='post-date'>
                    Commented on <Moment format='MMMM Do YYYY, h:mm:ss a'>{comment.date}</Moment>
                  </p>
                  { comment.user === props.user._id && (
                    <button
                      onClick={()=>props.deleteComment(props.postId, comment._id)}
                      type='button' className='btn btn-danger'>Delete Comment
                    </button>
                  )}
                </div>

              </div>
             )
         })}
         </div>
        );
}


const mapStateToProps = state => ({
  user: state.auth_reducer.user,
   loading: state.auth_reducer.loading
});

export default connect(mapStateToProps,{ deleteComment })(CommentItem);
