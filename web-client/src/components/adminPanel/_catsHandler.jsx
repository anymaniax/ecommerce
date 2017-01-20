import React from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../../actions'

class _categories extends React.Component {
    componentWillMount(){
        console.log('WHY HELLO THERE\n------------------')
        this.props.fetchCats()
    }
    render(){
        return (
            <ul>
                <div className="row">
                {this.props.cats.length !== 0 ?
                    this.props.cats.map(e => <li key={e._id}>{e.nom}</li>)
                    :
                    <p className="error">
                        Aucune catégorie n'a encore été créée
                    </p>
                }
                </div>
            </ul>
        )
    }
}

const mapStateToProps = ({admin}) => {
    const {cats} = admin
    return {
        cats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCats: () => {
            dispatch(fetchCategories())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_categories)
