import React from 'react';

class SearchBar extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     // first way to binding
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    state = {term: ''};

    // onFormSubmit(event) {
    //     // this is prevent automatically refreshing the page.
    //     event.preventDefault();
    //
    //     // error.
    //     console.log(this.state.term);
    // }

    // second way
    onFormSubmit = (event) => {
        // this is prevent automatically refreshing the page.
        event.preventDefault();

        // arrow function automatically bind this function
        // console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    };

    // this.onInputChange() -> this method will be called when component is rendered.
    // if we don't want to do this, we should use it without parentheses
    render() {
        return (
            <div className="ui segment">
                {/*// this is the third way for binding*/}
                {/*<form onSubmit={event => {this.onFormSubmit(event)}} action="" className="ui form">*/}
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input type="text"
                               onChange={(e) => {this.setState({term: e.target.value})}}
                               value={this.state.term}
                               name="search"
                               id="search"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;