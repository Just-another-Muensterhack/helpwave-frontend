import { useCallback } from 'react';

// TODO: not sure what to do when a request fails
export const useLog = <T>(): ((entry: T) => void) =>
    useCallback((entry: T) => {
        fetch('https://main.helpwave.de/emergency/log/single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry),
        });
    }, []);
