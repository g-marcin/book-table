import React from "react";
 
export const useWindowInnerWidth = () => {
    const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
    
    React.useEffect(() => {
        const handleResize = () => {
        setInnerWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return innerWidth;
}