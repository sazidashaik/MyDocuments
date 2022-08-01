import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import AddFeedback from '../CSS/AddFeedback.css';
import { addFeedback } from '../actions/feedbacks';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function AddFeedbackForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   feedBackId:'',
   driverRating:'',
   serviceRating:'',
   overallRating:'',
   comments:'',
   


}
 
const [feedback,setFeedback]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'
/* const [driverRating, setDriverRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(()=>{setFeedback({...feedback,...driverRating})},[driverRating])
 */


const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setFeedback({...feedback,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
/* if( !feedback.driverRating || !feedback.serviceRating || 
    !feedback.overallRating || !feedback.comments ) return; */
 console.log(feedback+'from addfeedbackform')
props.addFeedback(feedback);
//dispatch(addFeedback(feedback));
setFeedback(initialFormState);

}
return (
  <Card style={{ backgroundColor:"skyblue",width: '30rem' }}>
      <ListGroup variant="flush">
   <Form onSubmit={submitHandler} >
     <Form.Group  className="mb-3" controlId="formBasicFeedbackId" >
       <Form.Label>Reservation Id</Form.Label>
       <Form.Control type="number" placeholder="feedBack Id" 
        name='feedBackId'
        value={feedback.feedBackId}
       onChange={handleInputChange} />
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicDriverRating">
       <Form.Label>Driver Rating</Form.Label>
       <Form.Control type="number" placeholder="Give Rating between 1 to 5" required 
        name='driverRating'
        value={feedback.driverRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicServiceRating">
       <Form.Label>Service Rating</Form.Label>
       <Form.Control type="number" placeholder="Give Service Rating between 1 to 5" required
       name='serviceRating'
       value={feedback.serviceRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicOverallRating">
       <Form.Label>OverAll Rating</Form.Label>
       <Form.Control type="number" placeholder="Give overall Rating between 1 to 10" required
        name='overallRating'
        value={feedback.overallRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicComments">
       <Form.Label>Comments</Form.Label>
       <Form.Control type="text" placeholder="Share your experience about your journey" required
         name='comments'
         value={feedback.comments}
       onChange={handleInputChange} />
     </Form.Group>
     
     <Button variant="primary" type="submit">
      
       Add Feedback
     </Button>
     


   </Form>
   </ListGroup>
    </Card> 
 );
}

{/* 

   <form onSubmit={submitHandler}>

   




<label>feedBackId</label><br/>
<input 
type='number'
name='feedBackId'
value={feedback.feedBackId}
onChange={handleInputChange}/>
<br/>

<label>driverRating</label><br/>
<input 
type='number'
name='driverRating'
value={feedback.driverRating}
onChange={handleInputChange}/>
<br/>
<br/>

<label>serviceRating</label><br/>
<input 
type='number'
name='serviceRating'
value={feedback.serviceRating}
onChange={handleInputChange}/>
<br/>

<label>overallRating</label><br/>
<input 
type='number'
name='overallRating'
value={feedback.overallRating}
onChange={handleInputChange}/>
<br/>

<label>comments</label><br/>
<input 
type='text'
name='comments'
value={feedback.comments}
onChange={handleInputChange}/>
<br/><br/>

<button>Add New feedback</button>


</form>
 */}



