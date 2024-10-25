import React, { createContext } from 'react';


export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
    // You can remove the all_products state since we're using images directly
    const contextValue = {}; // Keep it empty since we no longer need to provide products

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
