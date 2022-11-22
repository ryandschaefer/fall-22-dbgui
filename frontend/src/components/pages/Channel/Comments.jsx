import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post, Comment } from '../../../models';
import {NewContent} from "../../pages/channel/NewContent"
import { getCommentsByPost } from '../../../api';
import { getPostById } from '../../../api';
export const Comments = () => {
    // TESTING
    const navigate = useNavigate();
   console.log(params);
   
    // const post = new Post(1,0,"The survival of the human race for the 300,000 years1 since we evolved has largely been attributed to our pack mentality.  People are incredibly social and depend on socialization for their mental health and physical health.  This pack mentality has been ingrained into our species which leads us to do things that do not necessarily benefit ourselves the most, but rather benefit our neighbor.  This act of selflessness is what has given humanity such great success.  In the case of the Plug virus, the ethical choice of whether to get the antidote or not is clear when viewed through the history of mankind and through more modern ethical frameworks.  Getting the antidote is a selfless act that not only benefits one’s neighbor, but also protects the recipient as well.  Through Christianity an rule utilitarianism, the act of receiving the antidote of the Plug virus is the most ethical choice and is necessary for the survival of mankind.  ",4000,"aug 99, 1023","@john_denver",3);
    // const commentsW = [
    //     new Comment(1,"@cramer",1,"I liked minions better","Jan 22, 1802",0),
    //     new Comment(1,"@spongebob",1,"Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble loom","May 1,1997",0),
    //     new Comment(1,"@Jim",1,"Aunt May is hot","May 100,1997",1),
    //     ];
    const [post,setPost] = useState({});
    const [comments, setComments] = useState({});
   
    const params = useParams();
    console.log(params);
    useEffect(() => {
        getPostById(params.post_id).then(x => setPost(x));
        getCommentsByPost(params.post_id).then(x => setComments(x));
        
    }, []);

    console.log(comments);
    return(
        <div>
            <div className="card w-75 mx-auto m-3">          
                <div className=''>
                    <h6 className='  m-3 mt-2 text-secondary float-end '>{post.post_date}</h6>
                </div>
                <div className='card-body mt-0 p-0'>
                    <h6 className=" col-8 mx-auto text-center p-0">{post.content} </h6>
                </div>
                <div>
                    <h6 className="card-subtitle mx-2  pt-4 text-primary float-end">{post.user_name}</h6>
                    <span className="float-clear"></span>
                    <h6 className=' m-3 text-muted'>{post.num_comments} Comments</h6>
                </div>      
            </div>
            <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                   
                        <NewContent user_name="STATE"/>
                    
                
                            
                </div>
            </div>
        </div>
        
       <ul className='list-unstyled '>
        {
            comments.map((comment,index) =>
            <li key={index} className=' m-2 content-fluid'>
               <div className="card w-50 mx-auto p-1">
                    <div className=''>
                        <h6 className='  m-1 text-secondary float-end '>{comment.comment_date}</h6>
                    </div>
                    <div className='card-body mt-0 p-0'>
                
                        <h6 className=" col-8 mx-auto text-center p-0">{comment.content} </h6>
                        <p className="card-subtitle  pt-3  mb-2 text-muted float-end">
                            <span className='m-1 text-primary'>{comment.user_id}</span>
                            <br/>
                        </p>
                        
                        <br />
                        
                        <button type='button' className='btn btn-secondary btn-sm'>Reply</button>
                    </div>
               </div>
            </li>)
        }
                
    </ul>
    </div>);
}

