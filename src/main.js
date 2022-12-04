import React, { useState, useEffect, useRef } from "react"
import { View } from "react-native";
import * as Linking from 'expo-linking';
import Spinner from 'react-native-loading-spinner-overlay';
import { WebView } from "react-native-webview"
import Swapable from "./Swapable";
/* Import hooks */
import useRotation from "../hooks/useRotation";
import useBackPress from "../hooks/useBackPress";
import usePage from "../hooks/usePage";
/* Import scripts*/
import loginScript from "../script/login";
import gameScript from "../script/game";

export default function Webview() {
    /* Keep state or element and url */
    const webView = useRef(null);
    const [url, setUrl] = useState("https://it.grepolis.com/")

    const page = usePage(url);
    const rotation = useRotation(url);
    useBackPress(webView);

    const [key, setKey] = useState(0);

    const [canGoBack, setCanGoBack] = useState(false);
    const [spinner, setSpinner] = useState(false);

    /* Dev only, reload page every refresh To make it reload every refresh */
    useEffect(() => {
        setKey(key + 1)
    }, []);

    /* Inject right js for each page */
    const handleLoadEnd = () => {
        if (page == "index") webView.current.injectJavaScript(loginScript)
        if (page == "login") { }
        if (page == "game") webView.current.injectJavaScript(gameScript)
        setTimeout(() => setSpinner(false), 1000)
    }

    return (
        <Swapable webView={webView} url={url}>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={{ color: '#FFF' }}
                overlayColor="rgba(0, 0, 0, 1)"
            />
            <WebView
                key={key}
                ref={webView}
                automaticallyAdjustContentInsets={false}
                source={{ uri: url }}
                onNavigationStateChange={navState => {
                    webView.current.canGoBack = navState.canGoBack
                    if (!navState.url) return;
                    setUrl(navState.url)
                }}
                onLoadStart={() => setSpinner(true)}
                onLoadEnd={handleLoadEnd}
            />
        </Swapable >
    )
}