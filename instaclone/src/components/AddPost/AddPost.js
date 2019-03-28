import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddPostWrapper = styled.div `
    margin: 0 auto;
    width: 95%;
    max-width: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DragImageHere = styled.div `
    width: 100%;
    height: 30vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: grey;
    border: 3px dashed black;
`;

const Input = styled.input `
    width: 100%;
    height: 40px;
    border: 1px solid black;
    margin: 10px 0;

    text-align: center;
`;

const Button = styled.button`
    border: 1px solid black;
    padding: 10px 20px;
    margin-top: 10px;

    text-transform: uppercase;
    font-size: 1.3rem;
    background: white;
`;

export default class AddPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: "",
            caption: ""
        }
    }

    onDragOverHandler = event => {
        //Need this preventDefault for onDrop to work
        event.preventDefault();
    }

    onDropHandler = event => {
        //If image is wrapped in an anchor tag, prevent the window from going to the next window
        event.preventDefault();
        //Extract the image URL from event
        const droppedItem = event.dataTransfer.getData('text/html');
        const startIndex = droppedItem.indexOf('src="') + 5;
        const endIndex = droppedItem.indexOf('"', startIndex);
        const imageUrl = droppedItem.substring(startIndex, endIndex);
        this.setState({
            imageUrl
        });
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <AddPostWrapper>
                <h1>Add Post</h1>
                <Form onSubmit={this.props.submitAddPostHandler}>
                    <DragImageHere onDragOver={this.onDragOverHandler} onDrop={this.onDropHandler}>
                        <h2>Drag Image Here</h2>
                    </DragImageHere>
                    <Input name="imageUrl" placeholder="Image URL" value={this.state.imageUrl} onChange={this.onChangeHandler}/>
                    <Input name="caption" placeholder="Caption" value={this.state.caption} onChange={this.onChangeHandler}/>
                    <Button type="submit">Submit</Button>
                </Form>
            </AddPostWrapper>
        )
    }
}

AddPost.propTypes = {
    submitAddPostHandler: PropTypes.func
}