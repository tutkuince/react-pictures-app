import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit(event) {
        // this is prevent automatically refreshing the page.
        event.preventDefault();
    }

    // this.onInputChange() -> this method will be called when component is rendered.
    // if we don't want to do this, we should use it without parentheses
    render() {
        return (
            <div className="ui segment">
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