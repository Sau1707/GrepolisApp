import * as ScreenOrientation from 'expo-screen-orientation';
import * as NavigationBar from 'expo-navigation-bar';
import { useState, useEffect } from 'react';

function hasNumber(myString) {
	return /\d/.test(myString);
}

/* 
    Handle the screen rotation
    False -> vertical
    True -> horizontal
*/
export default function useRotation(url) {
	const [roation, setRotation] = useState(false);

	const handleRotation = () => {
		if (hasNumber(url)) {
			ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
			setRotation(true);
		} else {
			ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
			setRotation(false);
		}
		// hide navigation bar
		NavigationBar.setVisibilityAsync('hidden');
		NavigationBar.setBehaviorAsync('overlay-swipe');
	};

	useEffect(() => {
		handleRotation();
	}, []);

	useEffect(() => {
		handleRotation();
	}, [url]);

	return roation;
}
