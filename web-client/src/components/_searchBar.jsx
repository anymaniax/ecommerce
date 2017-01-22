import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import './_searchBar.css'

class _searchBar extends React.Component {
    handleSubmit = (e) => {
            e.preventDefault()
            this.props.searchProduct(this.refs.search.value)
            browserHistory.push('/search/'+this.refs.search.value)
    }

    handleClick = (e) => {
        ReactDOM.findDOMNode(this.refs.search).focus(); 
    }
        
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                        <form onSubmit={this.handleSubmit} className="search-form">
                            <div className="form-group has-feedback">
                                <label htmlFor="search" className="sr-only">Search</label>
                                <input ref="search" type="text" className="form-control" name="search" id="search" placeholder="Recherche" />
                                <span onClick={this.handleClick} className="form-control-feedback"><i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default _searchBar