import { createContext, useState } from "react";
import { data } from "../data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [employees, changedList] = useState(data)
    const [selectedEmployee, setSelectedEmployee] = useState({ id: 0, firstname: "", lastname: "" });

    const values = {
        appName: "Employee App",
        employees,
        changedList,
        selectedEmployee,
        setSelectedEmployee,

    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )

}

export default AppContext;