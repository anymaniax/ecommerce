import {connect} from 'react-redux'

import {searchProduct} from '../actions'
import _searchBar from '../components/_searchBar'

const mapDispatchToProps = (dispatch) => {
	return {
		searchProduct:(search) => {
			dispatch(searchProduct(search))
		}
	}
}

const SearchBar = connect(null, mapDispatchToProps)(_searchBar)

export default SearchBar
