import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, getRequestUsers } from '../../redux/usersReducer'
import Users from './Users'
import Loading from '../common/Loading'
import { getCurrentPage, getIsFettching, getPageSize, getTotalUsersCount, getUsers, getFollowingInProgress } from '../../redux/usersSelector'

class UsersAPI extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getRequestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let pageSize = this.props
        this.props.getRequestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loading /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFettching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getRequestUsers
})(UsersAPI)
export default UsersContainer;