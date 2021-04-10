import { connect } from 'react-redux'
import Search from './Search'
import './style.scss'
import { changeSearch } from '../Global/redux/actions'
import {fetchSearchInit, resetSearch, setRecentSearch} from "./redux/actions";

const mapStatesToProps = ({global, search}) => {
    return {
        searchQuery: global.searchQuery,
        ...search
    };
};
const mapDispatchToProps = dispatch => ({
    fetchSearchInit: (searchQuery, page, loadingMore) => dispatch(fetchSearchInit(searchQuery, page, loadingMore)),
    changeSearch: (value) => dispatch(changeSearch(value)),
    resetSearchRecords: () => dispatch(resetSearch()),
    resetInput: () => dispatch(changeSearch('')),
    setRecentSearch: (recentSearchVal) => dispatch(setRecentSearch(recentSearchVal))
})

export default connect(mapStatesToProps, mapDispatchToProps)(Search)
