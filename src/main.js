import Spinner from 'react-native-loading-spinner-overlay';
import { WebView } from 'react-native-webview';
import Swapable from './Swapable';
/* Import hooks */
import { useState, useEffect, useRef } from 'react';
import useRotation from '../hooks/useRotation';
import useBackPress from '../hooks/useBackPress';
import usePage from '../hooks/usePage';
/* Import scripts*/
import loginScript from '../out/login';
import gameScript from '../out/game';
import worldScript from '../out/world';

const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify({key : "value"}));
})();`;

const updateEvent = `
var load_event = document.createEvent('Event');  
load_event.initEvent('load', false, false);  
window.dispatchEvent(load_event);
`;

export default function Webview() {
	/* Keep state or element and url */
	const webView = useRef(null);
	const [url, setUrl] = useState('https://it.grepolis.com/');

	const page = usePage(url);
	const rotation = useRotation(url);
	useBackPress(webView);

	const [key, setKey] = useState(0);

	const [canGoBack, setCanGoBack] = useState(false);
	const [spinner, setSpinner] = useState(false);

	/* Dev only, reload page every refresh To make it reload every refresh */
	useEffect(() => {
		setKey(key + 1);
	}, []);

	/* Inject right js for each page */
	const handleLoadEnd = () => {
		if (page == 'index') webView.current.injectJavaScript(loginScript);
		if (page == 'login') webView.current.injectJavaScript(worldScript);
		if (page == 'game') {
			webView.current.injectJavaScript(gameScript);
			//webView.current.injectJavaScript(INJECTED_JAVASCRIPT);
		}
		setTimeout(() => setSpinner(false), 1000);
	};

	return (
		<Swapable webView={webView} url={url}>
			<Spinner
				visible={spinner}
				textContent={'Loading...'}
				textStyle={{ color: '#FFF' }}
				overlayColor='rgba(0, 0, 0, 1)'
			/>
			<WebView
				key={key}
				ref={webView}
				automaticallyAdjustContentInsets={false}
				source={{ uri: url }}
				onNavigationStateChange={(navState) => {
					webView.current.canGoBack = navState.canGoBack;
					if (!navState.url) return;
					setUrl(navState.url);
				}}
				onMessage={(event) => {
					console.log(JSON.parse(event.nativeEvent.data));
					//alert(JSON.parse(event.nativeEvent.data).key);
				}}
				onLoadStart={() => setSpinner(true)}
				onLoadEnd={handleLoadEnd}
			/>
		</Swapable>
	);
}
