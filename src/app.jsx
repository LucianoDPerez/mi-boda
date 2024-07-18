import React, { useEffect, useState } from 'react';
import Router from "./routes/Router";
import { useParams } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
import theme from "./themes/appearance";
import { useDispatch } from "react-redux";
import { changeAppearance } from "./redux/reducers/settingsReducer";
import { setPhone } from  './redux/reducers/settingsReducer.js';

const App = () => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const dispatch = useDispatch();
    const { phone } = useParams();

    useEffect(() => {
        const storage = localStorage.getItem("appearance") || "auto";

        if (storage === "light" || storage === "dark") {
            dispatch(
                changeAppearance({
                    mode: storage,
                    isDark: storage === "dark",
                })
            );
        } else {
            dispatch(
                changeAppearance({
                    mode: "auto",
                    isDark: isDarkMode,
                })
            );
        }

        // Simulación de carga de datos
        setTimeout(() => {
            // Una vez que los datos estén cargados, actualiza el estado
            setDataLoaded(true);
        }, 2000); // Simulando una carga de 2 segundos
    }, [isDarkMode, dispatch]);

    useEffect(() => {
        if (phone) {
            dispatch(setPhone(phone));
        }
    }, [phone, dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            {dataLoaded ? (
                <Router />
            ) : (
                <p>Cargando...</p>
            )}
        </ThemeProvider>
    );
};

export default App;
