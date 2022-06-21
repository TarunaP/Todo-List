import React from "react";

const CurrentContext = React.createContext();

const CurrentProvider = CurrentContext.Provider
const CurrentConsumer = CurrentContext.Consumer

export { CurrentConsumer, CurrentProvider , CurrentContext }