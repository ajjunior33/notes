import React, { useState, useEffect } from "react";
import SyncStorage from "sync-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import DetailsPost from "./pages/DetailsPost";
import ListNotes from "./pages/ListNotes";
import Auth from "./pages/Auth";

function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="ListNotes" component={ListNotes} />
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="NewPost" component={NewPost} />
        <AppStack.Screen name="DetailsPost" component={DetailsPost} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
