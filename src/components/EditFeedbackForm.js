import React , {useContext, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

export default function EditFeedbackForm(props){
     const [feedback,setFeedback] =useState(props.currentFeedback)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setFeedback({...feedback,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateFeedback(feedback.feedBackId,feedback);
    }


   

     /* return (
        <form onSubmit={submitHandler}>
         
<label>feedBackId</label>
<h1>{props.currentFeedback.feedBackId}</h1>
 */
return (
  <Card style={{ backgroundColor:"skyblue",width: '30rem' }}>
      <ListGroup variant="flush">
   <Form onSubmit={submitHandler} >
     <Form.Group className="mb-3" controlId="formBasicFeedbackId">
       <Form.Label>feedBack Id</Form.Label>
                                                   
       <h1>{props.currentFeedback.feedBackId}</h1> 
            
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicDriverRating">
       <Form.Label>Driver Rating</Form.Label>
       <Form.Control type="number" placeholder="Give Rating between 1 to 5" color='transparent'
        name='driverRating'
        value={feedback.driverRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicServiceRating">
       <Form.Label>Service Rating</Form.Label>
       <Form.Control type="number" placeholder="Give Service Rating between 1 to 5"
       name='serviceRating'
       value={feedback.serviceRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicOverallRating">
       <Form.Label>OverAll Rating</Form.Label>
       <Form.Control type="number" placeholder="Give overall Rating between 1 to 10" 
        name='overallRating'
        value={feedback.overallRating}
       onChange={handleInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicComments">
       <Form.Label>Comments</Form.Label>
       <Form.Control type="text" placeholder="Share your experience about your journey" 
         name='comments'
         value={feedback.comments}
       onChange={handleInputChange} />
     </Form.Group>
     
     <Button variant="primary" type="submit">
       update feedBack
     </Button>
     <button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></Form>
  </ListGroup>
   </Card>
 );
}


{/* <label>driverRating</label>
<input 
type='number'
name='driverRating'
value={feedback.driverRating}
onChange={handleInputChange}/>

<label>serviceRating</label>
<input 
type='number'
name='serviceRating'
value={feedback.serviceRating}
onChange={handleInputChange}/>

<label>overallRating</label>
<input 
type='number'
name='overallRating'
value={feedback.overallRating}
onChange={handleInputChange}/>

<label>comments</label>
<input 
type='text'
name='comments'
value={feedback.comments}
onChange={handleInputChange}/>

 */}

{/* <button>Update Feedback</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




} */}