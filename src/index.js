import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import "./config/ReactotronConfig.js";
import NavigationService from "./services/navigation";

import Routes from "./routes";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}
