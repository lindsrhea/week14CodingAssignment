import React, { Component } from 'react'
import ReviewForm from './ReviewComponents/ReviewForm';
import { Rating } from 'react-simple-star-rating';

export class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewList: [
                {
                    id: 0,
                    nickname: 'John',
                    review: 'Amazing!',
                    rating: <Rating size='50' />
                }
            ]
        };
    }

    addReview = (newNickname, newReview, newRating) => {
        const postReview = {
            id: this.state.reviewList[this.state.reviewList.length - 1].id + 1,
            nickname: newNickname,
            review: newReview,
            rating: newRating
        }
        this.setState({reviewList: this.state.reviewList.concat(postReview)})
    }


  render() {
    return (
            <>
                <div className='col-sm mt-2'>
                    <br></br>
                    <ReviewForm addReview={this.addReview} reviewList={this.state.reviewList} />
                    <ReviewList reviewList={this.state.reviewList}/>
                    {console.log(this.state.reviewList)}
                </div>
            </>
        )
    }
}

export default Review
