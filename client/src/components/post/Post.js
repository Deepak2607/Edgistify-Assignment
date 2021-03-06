import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import moment from 'moment';
import PostItem from './PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';
import { loadUser } from '../../actions/auth';
import store from '../../store';


const Post = (props) => {
    
    //this route is made as private here because I was unable to access props.match.params.id when it use PrivateRoute
    if(!props.isAuthenticated && ! props.loading){
        props.history.push('/login');
    }

     useEffect(() => {
            store.dispatch(loadUser());
      }, []);
     
  useEffect(() => {
            store.dispatch(getPost(props.match.params.id));
      }, []);
    
//  console.log(props.match.params);
   
   return(
       <div>
       {(props.loading || props.post ==null) ?  <div>loading...</div> : (    
            <div>
                <Link to='/posts' className='btn'>Back To Posts</Link>
                <PostItem post={props.post} />
                <CommentForm postId={props.post._id} />
                <CommentItem post={props.post} postId={props.post._id} />
            </div>
        )}
       </div>
    );
};


const mapStateToProps = state => ({
  post: state.post_reducer.post,
  loading: state.post_reducer.loading,
  isAuthenticated: state.auth_reducer.isAuthenticated
});

export default connect(mapStateToProps,{ getPost })(withRouter(Post));
