import React from 'react'

import {browserHistory, Link} from 'react-router'

let i = 0
class _catViewer extends React.Component {

	componentWillMount(){
		this.props.fetchCats()
	}

	render(){
		let cats = this.props.cats || []
		let catsMarkup = cats.map(e => <Link key={i++} to={`/cats/${e}`} className="dropdown-item">{`${e}`}</Link>)
		return (
			<div>
			{cats.length === 0 ?
				<span>Aucune catégorie pour le moment</span>
				:
				<div className="dropdown show">
					<a className="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Parcourir les catégories
					</a>

					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" onClick={() => {
							this.props.fetchAll()
                            browserHistory.push('/')
						}}>Toutes</a>
						{catsMarkup}
					</div>
				</div>
			}
			</div>
		)	
	}
}

export default _catViewer
