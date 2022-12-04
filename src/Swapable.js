import { useState } from "react";
import { View } from "react-native";

const nextTown = "window.HelperTown.switchToNextTown(); document.getElementsByClassName('town_background')[0].style.transform = 'translate(-348px, -206px)'"
const prevTown = "window.HelperTown.switchToPreviousTown(); document.getElementsByClassName('town_background')[0].style.transform = 'translate(-348px, -206px)'"

/* 
    Handle town swap
*/
export default function Swapable({ children, webView, url }) {

    onLeft = () => webView.current.injectJavaScript(nextTown)
    onRight = () => webView.current.injectJavaScript(prevTown)

    const [deltaX, setDeltaX] = useState(0);

    return (
        <View
            onTouchStart={e => {
                setDeltaX(e.nativeEvent.pageX)
            }}
            onTouchEnd={e => {
                if (deltaX - e.nativeEvent.pageX > 500) onLeft()
                if (deltaX - e.nativeEvent.pageX < -500) onRight()
            }}
            style={{ width: "100%", height: "100%" }}
        >
            {children}
        </View>
    )
}