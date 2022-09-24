import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Text } from 'react-native';

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
            {graph ? children : <Text>no graph found</Text>}
        </GraphContext.Provider>
    );
};
