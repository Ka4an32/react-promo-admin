import React from "react";
import { Datagrid, EmailField, List, TextField } from "react-admin";

const UserList: React.FC = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
      </Datagrid>
    </List>
  );
};

export default UserList;
