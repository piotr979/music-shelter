import DataContext from "./data-context";
const DataProvider = (props) => {

    const dataContext = {

    }
    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;