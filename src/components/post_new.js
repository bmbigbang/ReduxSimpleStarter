import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type="text"
                    {...field.input}
                />
                <div className>{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label='Title'
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label='Content'
                    name="content"
                    component={this.renderField}
                />
                <button className='btn btn-primary' type='submit'>Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    // values containts form contents: {'title': ..., 'categories':... etc}
    const errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = 'Title must be at least 3 characters long.'
    }

    if (!values.categories) {
        errors.categories = 'Category is required.'
    }

    if (!values.content) {
        errors.content = 'Content is required.'
    }
    // if errors is empty, form may submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);