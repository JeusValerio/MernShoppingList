import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import './ShoppingList.css';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuidv4(), name: 'Eggs', isEditing: false },
            { id: uuidv4(), name: 'Milk', isEditing: false },
            { id: uuidv4(), name: 'Water', isEditing: false },
            { id: uuidv4(), name: 'Vegetables', isEditing: false },
        ],
        newItemName: '', // New state to hold the value of the new item input
        searchQuery: '', // State to hold the search query
    }

    handleChange = (e, itemId) => {
        const { value } = e.target;
        this.setState(state => ({
            items: state.items.map(item =>
                item.id === itemId ? { ...item, name: value } : item
            )
        }));
    }

    handleEdit = itemId => {
        this.setState(state => ({
            items: state.items.map(item =>
                item.id === itemId ? { ...item, isEditing: true } : item
            )
        }));
    }

    handleSave = itemId => {
        this.setState(state => ({
            items: state.items.map(item =>
                item.id === itemId ? { ...item, isEditing: false } : item
            )
        }));
    }

    handleSubmit = e => {
        e.preventDefault();
        const { newItemName } = this.state;
        if (newItemName.trim()) {
            this.setState(state => ({
                items: [...state.items, { id: uuidv4(), name: newItemName, isEditing: false }],
                newItemName: '' // Clear input after adding item
            }));
        }
    }

    handleSearchChange = e => {
        this.setState({ searchQuery: e.target.value });
    }

    render() {
        const { items, newItemName, searchQuery } = this.state;
        // Filter items based on search query
        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <Container>
                <Form onSubmit={this.handleSubmit} style={{ marginBottom: '2rem' }}>
                    <FormGroup>
                        <Label for="itemName"><b>Add Item</b></Label>
                        <div className="d-flex">
                            <Input
                                type="text"
                                placeholder="Enter item name"
                                value={newItemName}
                                onChange={e => this.setState({ newItemName: e.target.value })}
                                className="input-field"
                                style={{ marginRight: '1rem' }}
                            />
                            <Button color="dark" type="submit">Add</Button>
                        </div>
                    </FormGroup>
                </Form>
                {/* Search input */}
                <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                    style={{ marginBottom: '1rem' }}
                />
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {filteredItems.map(({ id, name, isEditing }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem className="d-flex justify-content-between align-items-center">
                                    {isEditing ? (
                                        <>
                                            <Input
                                                type="text"
                                                value={name}
                                                onChange={e => this.handleChange(e, id)}
                                            />
                                            <Button
                                                color="success"
                                                size="sm"
                                                className="ml-2 save-btn"
                                                style={{ margin: '0 0.2rem' }} // Added margin style
                                                onClick={() => this.handleSave(id)}
                                            >
                                                Save
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <span>{name}</span>
                                            <div>
                                                <Button
                                                    className="ml-2"
                                                    color="info"
                                                    size="sm"
                                                    style={{ margin: '0 0.20rem' }} // Added margin style
                                                    onClick={() => this.handleEdit(id)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className="ml-2"
                                                    color="danger"
                                                    size="sm"
                                                    style={{ margin: '0 0.2rem' }} // Added margin style
                                                    onClick={() => {
                                                        this.setState(state => ({
                                                            items: state.items.filter(item => item.id !== id)
                                                        }))
                                                    }}
                                                >
                                                    &times;
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList
