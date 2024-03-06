// ConsentManager.tsx

import { useEffect } from "react";

interface ConsentManagerProps {
    initialConsent: boolean;
}

const ConsentManager: React.FC<ConsentManagerProps> = ({ initialConsent }) => {
    useEffect(() => {
        // Ajouter le code de consentement
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
            (window as any).dataLayer.push(args);
        }

        gtag("consent", "update", {
            analytics_storage: initialConsent ? "granted" : "denied",
        });

        gtag("js", new Date());
        gtag("config", "G-5PG59341DB", {
            cookie_flags:
                "max-age=7200;secure;samesite=none;update=" +
                (initialConsent ? "granted" : "denied"),
        });
    }, [initialConsent]);

    // Fonction pour mettre à jour le consentement de l'utilisateur
    const updateUserConsent = (newConsent: boolean) => {
        (window as any).gtag("consent", "update", {
            analytics_storage: newConsent ? "granted" : "denied",
        });

        (window as any).gtag("config", "G-5PG59341DB", {
            cookie_flags:
                "max-age=7200;secure;samesite=none;update=" +
                (newConsent ? "granted" : "denied"),
        });
    };

    return null;
};

export default ConsentManager;
