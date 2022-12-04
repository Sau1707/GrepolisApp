import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

const servers = ["de", "en", "zz", "fr", "gr", "nl", "es", "it", "ro", "se", "cz", "pl", "pt", "hu", "sk", "dk", "ru", "no", "br", "tr", "us", "ar", "fi"]

const startWithServer = (string, char) => {
    let found = false;
    servers.forEach(e => {
        if (string.startsWith(e + char)) found = true;
    })
    return found;
}

export default function usePage(url) {

    const [page, setPage] = useState("");

    useEffect(() => {
        const parsedUrl = Linking.parse(url)
        /* Index page */
        if (startWithServer(parsedUrl.hostname, ".")) {
            setPage("index")
        }
        /* Login */
        else if (startWithServer(parsedUrl.hostname, "0")) {
            setPage("login")
        }
        /* Game page */
        else {
            setPage("game")
        }
    }, [url])

    return page;
}