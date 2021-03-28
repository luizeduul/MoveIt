import {AppProps} from 'next/app';
import '../styles/global.css';
import { AuthProvider } from "../Contexts/AuthContext";

export default function App({ Component, pageProps } :  AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} /> 
    </AuthProvider>
  );
}