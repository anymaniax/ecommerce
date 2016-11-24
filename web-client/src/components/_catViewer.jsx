import React from 'react'

import { Link } from 'react-router' 

class _catViewer extends React.Component {

	componentWillMount(){
		this.props.fetchCats()
	}

	render(){
		let cats = this.props.cats || []
		let catsMarkup = cats.map(e => <Link to={`/cats/${e}`} className="btn btn-primary">{`${e}`}</Link>)
		return (
			<div>
			{catsMarkup}
			</div>
		)	
	}
}

export default _catViewer