import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const UserContainer = props => {
  return (
    <div className="animated fadeIn">
      <div className="ui-typography">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title" v-if="headerText">
                  Users
                </strong>
              </div>
              <div className="card-body">
                <div className="typo-headers" />
                <div className="vue-misc">
                  <div className="row">
                  <div className="col-12" >
                <button onClick={props.addUserHandeler} className="btn btn-primary float-right mb-2"><i className="fa fa-plus p-1"></i>Add User </button>
                </div>
                    <div className="col-12">
                      <ReactTable
                        data={props.userList ? props.userList : []}
                        columns={[
                          {
                            Header: "Name",
                            columns: [
                              {
                                Header: "First Name",
                                accessor: "firstName"
                              },
                              {
                                Header: "Last Name",
                                id: "lastName",
                                accessor: d => d.lastName
                              }
                            ]
                          },
                          {
                            Header: "Info",
                            columns: [
                              {
                                Header: "Email",
                                accessor: "email"
                              },
                              {
                                Header: "User Name",
                                accessor: "userName"
                              }
                              // {
                              //     Header: "User Role",
                              //     accessor: "role"
                              //   }
                            ]
                          },
                          {
                            Header: "Created Date",
                            columns: [
                              {
                                Header: "Register Data",
                                accessor: "createdAt"
                              }
                            ]
                          }
                        ]}
                        defaultPageSize={5}
                        minRows={
                          props.userList && props.userList.length > 5
                            ? 5
                            : 1
                        }
                        className="-striped -highlight"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
