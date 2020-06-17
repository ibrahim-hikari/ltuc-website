import React, { useState } from 'react';
import data from '../data/english.json';
export const ModelContext = React.createContext();

function ModelProvider(props) {

    const [headerData, setHeaderData] = useState(data.header);
    const [mainData, setMainData] = useState(data.main);
    const [footerData, setFooterData] = useState(data.footer);

    const state = {
        headerData,
        mainData,
        footerData,
        changeHeaderData: setHeaderData,
        changeMainData: setMainData,
        changeFooterData: setFooterData,
    };

    return (
        <ModelContext.Provider value={state}>
            {props.children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;