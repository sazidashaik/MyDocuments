import {
    ADD_FEEDBACK,
  RETRIEVE_FEEDBACKS,
  UPDATE_FEEDBACK,
  //DELETE_FEEDBACK,
  
} from "./types";
import  FeedbackService from "../services/FeedbackService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addFeedback = ({driverRating,serviceRating,overallRating,comments}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await FeedbackService.create({driverRating,serviceRating,overallRating,comments  });
    dispatch({
      type: ADD_FEEDBACK,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveFeedbacks = () => async (dispatch) => {
  try {
    const res = await FeedbackService.getAll();
    dispatch({
      type: RETRIEVE_FEEDBACKS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateFeedback = (feedBackId, data) => async (dispatch) => {
  try {
    const res = await FeedbackService.update(feedBackId, data);
    dispatch({
      type: UPDATE_FEEDBACK,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
/*export const  deleteFeedback = (feedBackId) => async (dispatch) => {
  try {
    await FeedbackService.remove(feedBackId);
    dispatch({
      type: DELETE_FEEDBACK,
      payload: { feedBackId },
    });
  } catch (err) {
    console.log(err);
  }
};
*/