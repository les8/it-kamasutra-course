import Users from "./users";
import React from "react";
import { connect } from "react-redux";
import {getUsers, follow, unfollow} from './../../redux/usersReducer';
import {setCurrentPage} from './../../redux/usersReducer';
import Preloader from "../common/preloader/preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize); 
    };
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users 
                    usersData={this.props.usersData}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage} 
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}    
                />
            </>
        )
    };
};
let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        followSuccess: state.usersPage.followSuccess,
        unfollowSuccess: state.usersPage.unfollowSuccess,
    };
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { setCurrentPage, getUsers, follow, unfollow }),
)(UsersAPIComponent);