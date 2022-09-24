import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';

import { ColorTextPrimary } from '../style-constants';
import { Graph } from '../utils/graph';
import HWText from '../components/HWText';

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
            {graph ? (
                children
            ) : (
                <HWText style={{ color: ColorTextPrimary }}>no graph found</HWText>
            )}
        </GraphContext.Provider>
    );
};
