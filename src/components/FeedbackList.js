import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    retrieveFeedbacks,

}from '../actions/feedbacks'
export default function FeedbackList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentFeedback,setCurrentFeedback]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const feedbacks = useSelector((state)=>state.feedbacks);
     

    useEffect(()=>{
        dispatch(retrieveFeedbacks());
      },[]);

    
    const refreshData=()=>{
        setCurrentFeedback(null);
        setCurrentIndex(-1);
    }
 

    const setActiveFeedback = (feedback,index)=>{
        setCurrentFeedback(feedback);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
    <Card style={{ backgroundColor:"white",width: '60rem' }}>
      <ListGroup variant="flush">
<Table striped bordered hover variant="" >
    <thead >
        <tr>
            <th>feedBackId</th>
            <th>driverRating</th>
            <th>serviceRating</th>
            <th>overallRating</th>
            <th>comments</th>
            <th>feedBackDate</th>

        </tr>
    </thead>
    <tbody>
  {feedbacks?.length > 0 ? (
    feedbacks.map((feedback)=>(
    <tr key={feedback.feedBackId}>
        <td>{feedback.feedBackId}</td>
        <td>{feedback.driverRating}</td>
        <td>{feedback.serviceRating}</td>
        <td>{feedback.overallRating}</td>
        <td>{feedback.comments}</td>
        <td>{feedback.feedBackDate}</td>

        <td><button 
         onClick={()=>{props.editFeedback(feedback)}}
        className="button muted-button">Edit</button></td>
        {/* <td><button 
        onClick={()=>props.deleteFeedback(feedback.feedBackId)}
        className="button muted-button">Delete</button></td> */}
        
     </tr>))):(
        <tr>
            <td colSpan={6}>No feedbacks</td>
        </tr>
     )}

    </tbody>
</Table>
</ListGroup>
</Card>




)


}