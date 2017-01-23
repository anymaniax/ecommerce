import React from 'react'
import {connect} from 'react-redux'
import {fetchCategories, deleteCategory, addCategory} from '../../actions'

class _categories extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    componentWillMount(){
        this.props.fetchCats()
    }

    handleInput(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    render(){
        const button = this.state.inputValue === "" ?
            <button className="btn btn-secondary disabled">
                Ajouter
            </button>
            :
            <button
                className="btn btn-secondary "
                onClick={() => {this.props.addCat(this.state.inputValue, this.props.token); this.setState({inputValue: ''})}}>
                Ajouter
            </button>
        return (
            <div className="row">
                <div className="col-md-4">
                    <h2>Liste des catégories</h2>
                    <ul>
                        <div className="input-group">
                            <input
                                className="form-control"
                                value={this.state.inputValue}
                                type="text"
                                placeholder="Ajouter une catégorie"
                                onChange={(e) => this.handleInput(e)}/>{' '}
                                <span className="input-group-btn">
                                    {button}
                                </span>
                        </div>
                    {this.props.cats.length !== 0 ?
                        this.props.cats.map(e =>
                            <li key={e._id}>
                                {e.nom} -
                                <a href="#" onClick={() => this.props.deleteCat(e._id, this.props.token)}> supprimer</a>
                            </li>)
                        :
                        <p className="error">
                            Aucune catégorie n'a encore été créée
                        </p>
                    }

                    </ul>
                </div>
                <div className="col-md-8">
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({admin, auth}) => {
    const {cats} = admin
    const {token} = auth
    return {
        cats,
        token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCats: () => {
            dispatch(fetchCategories())
        }, deleteCat: (id, token) => {
            dispatch(deleteCategory(id, token))
        }, addCat: (name, token) => {
            dispatch(addCategory(name, token))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(_categories)
