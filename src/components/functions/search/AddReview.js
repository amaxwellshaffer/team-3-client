import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

const AddReview = (props) => {
    const [review, setReview] = useState(''); 
    const {
     buttonLabel,
     className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    // const review = {
    //     title: 
    //     year:
    //     comment:
    //     owner:
    //     posterPath: 
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/movies/review', {
            method: 'POST', 
            body: JSON.stringify({
                title:props.movie.title,
                year: props.movie.release_date,
                comment: review,
                posterPath: props.movie.poster_path
            }),
            headers: new Headers({ 
                'Content-Type': 'application/json', 
                'Authorization': localStorage.getItem('token')
            }),
        })
        .then((res) => res.json())
        .then((logReview) => {
            console.log(logReview);
        })
    }


    return (
        <div>
            <Button color="secondary" onClick={toggle}>Add Movie Review</Button>
            <Modal isOpen={modal} toggle={toggle} className={modal}>
                <ModalHeader toggle={toggle} close={closeBtn}>Movie Review</ModalHeader>
                <ModalBody>
                Add a rad review for {props.movie.title}: 
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Input type="textarea" name="review" id="reviewText"
                            value={review}
                            onChange={(e) =>setReview(e.target.value)}/>
                        </FormGroup>
                        <ModalFooter>
                        <Button color="success" type='submit'>Add Movie Review</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </ModalBody> 
            </Modal>
        </div>
    );
}

export default AddReview;



//Code we may not need but might have tried along the way 
   // function addReview() {
    //     console.log('Add Movie Review');
        // let title = document.getElementById('title').value
        // let year = document.getElementById('date').value
        // let comment = document.getElementById('entry').value
        // let owner = document.getElementById
        // let posterPath = document.getElementById
        // const accessToken = localStorage.getItem('SessionToken')
        // let newReview = { review: { title: title, year: year, comment: comment, owner: owner, posterPath: posterPath } }
    
        // fetch('http://localhost:8080/movies/review', {
        //     method: 'POST', 
        //     headers: new Headers({ 
        //         'Content-Type': 'application/json', 
                // 'Authorization': accessToken
            // }),
            // body: JSON.stringify(review)
    //     })
    //     .then(response => {
    //         console.log(response.json())
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // };