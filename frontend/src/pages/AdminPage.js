import React, { Component } from 'react';
import { AdminNavBar } from '../components'
import queryString from 'query-string';
import { UserTable, SuspendedUsers, SuspendedPosts, 
    ReportedPosts, ReportedUsers, UserPostsTable } from '../components/adminTables'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var url = window.location.href
        var index = url.indexOf("?")
        var search = url.substring(index, url.length)
        let queryParams = queryString.parse(search)
        var table = queryParams.table
        return ( <div>
                <AdminNavBar></AdminNavBar>
                {table==="users"? <UserTable/> : 
                table==="reported_users"? <ReportedUsers/> :
                table==="reported_posts"? <ReportedPosts/> :
                table==="suspended_users"? <SuspendedUsers/>:
                table==="suspended_posts"? <SuspendedPosts/> :
                table==="user_posts"? <UserPostsTable/> : ""}
        </div> );
    }
}
 
export { AdminPage };