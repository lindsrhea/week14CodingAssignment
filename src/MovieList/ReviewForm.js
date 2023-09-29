import React, { Component } from 'react'
import StarRating from './starRating';

export class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            review: '',
            rating: (null)
        }
        console.log(this.state);
        // this.handleChange = this.handleChange.bind(this);
    }

    onChange = (e) => {
        // Sets piece of state to whats in the textbox
        console.log('onChange:', e.target.value);
        e.preventDefault()
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit event being fired');
        //decided to pass 2 separate parameters instead of 2 separate functions
        this.props.addReview(this.state.nickname, this.state.review, this.state.rating)
        this.setState({
            nicknameValue: '',
            reviewValue: '',
            ratingValue: (null)
        });
    }

  render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}className='row mt-2' id='review-form'>

                <div name='rating' onChange={this.onChange} >
                    <StarRating
                        onSubmit={this.onSubmit}
                        value={this.state.ratingValue}
                     />
                </div>

                <input type='text'
                    value={this.state.nicknameValue}
                    onChange={this.onChange}
                    name='nickname'
                    placeholder='Nickname...'
                    className='w-75'
                />

                <textarea type='text'
                    value={this.state.reviewValue}
                    onChange={this.onChange}
                    name='review'
                    placeholder='Leave a Review...'
                    className='form-control w-75'
                    id='review-form'
                    rows='3' >
                </textarea>

                <button type='submit'
                    className="col-5 mt-2 btn btn-primary"
                    onClick={this.onSubmit}>Submit</button>

            </form>
        </div>
    )
  }
}

export default ReviewForm
