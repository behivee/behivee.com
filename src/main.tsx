import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "@components/Navbar";
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
    <StrictMode>
        <ChakraProvider>
            <Navbar />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>
);
