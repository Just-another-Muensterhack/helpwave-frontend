import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';

import { Graph } from '../utils/graph';

const GraphContext = createContext<{ graph: Graph }>({
    graph: undefined as unknown as Graph, // TODO: i hate myself for this shit
});

export const useGraph = () => useContext(GraphContext);

export const ProvideGraph: React.FC<PropsWithChildren> = ({ children }) => {
    const [graph, setGraph] = useState<Graph | undefined>(undefined);

    useEffect(() => {
        fetch('https://cdn.helpwave.de/graph.json')
            .then((res) => res.json())
            .then(setGraph);
    }, []);

    const values: { graph: Graph } = {
        graph: graph as Graph,
    };

    return (
        <GraphContext.Provider value={values}>
            {graph ? children : <p>no graph found</p>}
        </GraphContext.Provider>
    );
};
