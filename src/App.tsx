import React from "react";
import { Admin, ListGuesser, Resource, Layout, AppBar } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import UserList from "./components/userList";
import { Card, CardContent, CardHeader } from "@mui/material";

import { createTheme } from "@mui/material/styles";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const checkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="15 1 70 70">
    <path
      fill="#068aa7"
      d="M48.07,8.58a2,2,0,0,0-.22-3,2.11,2.11,0,0,0-2.72.3L37,14a1,1,0,0,1-1.32.09l-2.29-1.71a3.46,3.46,0,0,0-4.16,0l-10.69,8a8,8,0,0,0-3.2,6.4v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8v-24a8,8,0,0,0-3.21-6.41l-3.71-2.78a.88.88,0,0,1-.1-1.33ZM25.5,21.41a6,6,0,0,1,4.43-4.51,6.15,6.15,0,0,1,3.05,0,.5.5,0,0,1,.22.84L30,21a2.07,2.07,0,0,0-.29,2.65,2,2,0,0,0,3,.26l3.44-3.44a.51.51,0,0,1,.83.18,6,6,0,1,1-11.54.79Zm4.79,20.42h2.4a2,2,0,0,1,.4,0,5.38,5.38,0,0,1,5,5.35v.87a5.38,5.38,0,0,1-4.59,5.31v.42a2,2,0,1,1-4,0v-.42a5.38,5.38,0,0,1-4.59-5.31,2,2,0,1,1,4,0,1.39,1.39,0,0,0,1.39,1.39h2.4a1.39,1.39,0,0,0,1.39-1.39v-.87a1.41,1.41,0,0,0-1.39-1.39h-2.4a2,2,0,0,1-.4,0,5.38,5.38,0,0,1-5-5.35v-.87a5.38,5.38,0,0,1,4.59-5.31v-.42a2,2,0,1,1,4,0v.42a5.38,5.38,0,0,1,4.59,5.31,2,2,0,1,1-4,0,1.41,1.41,0,0,0-1.39-1.39h-2.4a1.41,1.41,0,0,0-1.39,1.39v.87A1.39,1.39,0,0,0,30.28,41.83Z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 -80 420 420"
    xmlSpace="preserve"
  >
    <path
      fill="#068aa7"
      d="M9.954,241.305h228.441c3.051,0,5.896-1.246,7.805-3.416c1.659-1.882,2.393-4.27,2.078-6.723
			c-5.357-41.734-31.019-76.511-66.15-95.053c-14.849,14.849-35.348,24.046-57.953,24.046s-43.105-9.197-57.953-24.046
			C31.09,154.65,5.423,189.432,0.071,231.166c-0.315,2.453,0.424,4.846,2.078,6.723C4.058,240.059,6.903,241.305,9.954,241.305z"
    />
    <path
      fill="#068aa7"
      d="M72.699,127.09c1.333,1.398,2.725,2.73,4.166,4.019c12.586,11.259,29.137,18.166,47.309,18.166
			s34.723-6.913,47.309-18.166c1.441-1.289,2.834-2.622,4.166-4.019c1.327-1.398,2.622-2.828,3.84-4.329
			c9.861-12.211,15.8-27.717,15.8-44.6c0-39.216-31.906-71.116-71.116-71.116S53.059,38.95,53.059,78.16
			c0,16.883,5.939,32.39,15.8,44.6C70.072,124.262,71.366,125.687,72.699,127.09z"
    />
  </svg>
);

const dashBoard = () => {
  return (
    <Card>
      <CardHeader title="Добро пожаловать на проект БэкПак2. Смерть блейдов" />
      <CardContent>
        - Нахуя вообще меняли шило на мыло?
        <br />- Терерь мы имеем досутп к кастомизации и тюнингу любой части
        интерфейса!
        <br /> Текст Текст Текст Текст Текст Текст Текст <br /> Проект создан по
        личной просьбе <b>Сергея Акименко</b>
      </CardContent>
    </Card>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff2d55",
    },
    secondary: {
      main: "#068aa7",
    },
  },
});

function App() {
  return (
    <Admin
      dashboard={dashBoard}
      title={"PromoBuilding"}
      dataProvider={dataProvider}
      // layout={LayoutAdmin}
      theme={theme}
    >
      <Resource
        options={{ label: "Чеки" }}
        icon={checkIcon}
        name="posts"
        list={ListGuesser}
      />
      <Resource
        icon={UserIcon}
        name="users"
        options={{ label: "Пользователи" }}
        list={UserList}
      />
    </Admin>
  );
}

export default App;
