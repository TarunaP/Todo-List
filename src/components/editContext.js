import React from "react";

const EditContext = React.createContext();

const EditProvider = EditContext.Provider
const EditConsumer = EditContext.Consumer

export { EditConsumer, EditProvider , EditContext }