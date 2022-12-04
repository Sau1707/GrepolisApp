import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/main'

export default function App() {
    return (
        <View style={styles}>
            <StatusBar hidden />
            <Main />
        </View>
    );
}

const styles = StyleSheet.create({
    height: "100%",
    width: "100%"
});