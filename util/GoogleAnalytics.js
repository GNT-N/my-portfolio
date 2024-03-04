// Dans votre fichier GoogleAnalytics.js
import { useEffect } from "react";

const GoogleAnalytics = () => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag("config", "G-5PG59341DB", {
                page_path: url,
            });
        };

        // Initialisation de Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-5PG59341DB");

        // Écouter les changements de route pour Google Analytics
        router.events.on("routeChangeComplete", handleRouteChange);

        // Supprimer l'écouteur d'événements lors du démontage du composant
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, []);

    return null;
};

export default GoogleAnalytics;
