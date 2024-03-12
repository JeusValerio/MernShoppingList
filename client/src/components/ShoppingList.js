import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuidv4(), name: 'Eggs' },
            { id: uuidv4(), name: 'Milk' },
            { id: uuidv4(), name: 'Water' },
            { id: uuidv4(), name: 'Vegetables' },
        ],
        newItemName: '' // New state to hold the value of the new item input
    }

    handleChange = (e) => {
        this.setState({ newItemName: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { newItemName } = this.state;
        if (newItemName.trim()) {
            this.setState(state => ({
                items: [...state.items, { id: uuidv4(), name: newItemName }],
                newItemName: '' // Clear input after adding item
            }));
        }
    }

    render() {
        const { items, newItemName } = this.state;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} style={{ marginBottom: '2rem' }}>
                    <FormGroup>
                        <Label for="itemName"><b>Add Item</b></Label>
                        <div className="d-flex">
                            <Input
                                type="text"
                                name="itemName"
                                id="itemName"
                                placeholder="Enter item name"
                                value={newItemName}
                                onChange={this.handleChange}
                                style={{ marginRight: '1rem' }}
                            />
                            <Button color="dark" type="submit">Add</Button>
                        </div>
                    </FormGroup>
                </Form>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size= "sm"
                                    style={{ marginRight: '0.5rem' }}
                                    onClick = {() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;
