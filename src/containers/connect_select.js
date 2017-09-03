import {connect}from'react-redux'
import {bindActionCreators} from'redux'
import {SelectFilm} from'../components'
import * as actions from '../redux/actions'

const mapDispatchToProps = function (dispatch){  
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
const mapStateToProps = function (state){ 
    return {
        film:state.selectFilm
    }
}

export let ConnectSelectFilm= connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilm)
