import { useState } from "react";
import { BackHandler, Platform } from "react-native"

export default function useBackPress(webView) {

    const handleBackPressed = () => {
        if (webView.current.canGoBack) {
            webView.current.goBack();
            return true;
        }
        return false;
    }

    useState(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', handleBackPressed);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', handleBackPressed);
            }
        }
    }, [])
}