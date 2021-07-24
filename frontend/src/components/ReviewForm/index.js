import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function ReviewForm() {
    return (
        <div class='border' class='d-flex flex-column '>
            <div class='d-flex justify-content-start'>
                <h5>Write a review</h5>
            </div>
            <hr></hr>
            <div>
                <Form>
                    <FormGroup>
                        <div class='d-flex justify-content-start'>
                            <Label for="title">Add a title</Label>
                        </div>
                        <Input type="text" name="review_title" id="title" />
                    </FormGroup>
                    <FormGroup style={{marginTop: 20}}>
                        <div class='d-flex justify-content-start'>
                            <Label for="exampleText">Details please! Your review helps orther shoppers.</Label>
                        </div>
                        <Input type="textarea" name="review_detail" id="detail" />
                    </FormGroup>
                    <FormGroup style={{marginTop: 30}}>
                        <div class='d-flex justify-content-start'>
                            <Label for="star">Select</Label>
                        </div>
                        <Input type="select" name="review_star" id="star">
                            <option>1 Star</option>
                            <option>2 Star</option>
                            <option>3 Star</option>
                            <option>4 Star</option>
                            <option>5 Star</option>
                        </Input>
                    </FormGroup>
                    <Button style={{marginTop: 10}}>Submit</Button>
                </Form>
            </div>
        </div>
    )
}
