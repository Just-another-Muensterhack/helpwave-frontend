import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';

const GraphContext = createContext<{ graph: object }>({ graph: {} });

export const useGraph = () => useContext(GraphContext);

export const ProvideGraph: React.FC<PropsWithChildren> = ({ children }) => {
    const [graph, setGraph] = useState({});

    useEffect(() => {
        fetch('https://cdn.helpwave.de/graph.json')
            .then((res) => res.json())
            .then(setGraph);
    }, []);

    const values = {
        graph,
    };

    return (
        <GraphContext.Provider value={values}>
            {graph ? children : <p>no graph found</p>}
        </GraphContext.Provider>
    );
};
