import { useState } from 'react';
import toast from 'react-hot-toast';

export const EmailForm = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a form data object
        const data = new FormData(e.target as HTMLFormElement);

        // Set loading state
        setLoading(true);

        // Post the email to Brevo
        fetch(
            'https://27afad56.sibforms.com/serve/MUIEALupgjMf-CkQY0IUwUkxTXmogaJuDKtl3vwlxpXJKBD0FaU2d-DVy3zQG-7fitnhq7LC4dRYA-Z8q2OcNGOCNKDva0ce-KGAY_4mGYewOHmKoPUAAPCiFjEYtRPoEANHm_t6gjVvb0BA_U0E3EAADcBApuw2s3JTr84r_4FHerywZm6Bp5g8M25jPkmxxdvPXJ-iOn_HEp2y',
            {
                method: 'POST',
                body: data,
            },
        )
            .then((res) => {
                // Send a success message
                toast.success(
                    "Merci, nous vous enverrons un mail dès que l'appli sera disponible !",
                );

                // Reset the form
                (e.target as HTMLFormElement).reset();

                // Reset loading state
                setLoading(false);
            })
            .catch((err) => {
                // Send an error message
                toast.error('Une erreur est survenue, veuillez réessayer plus tard.');

                // Reset loading state
                setLoading(false);
            });
    };

    return (
        <form
            className="flex flex-col gap-4"
            name="EMAIL"
            data-type="subscription"
            onSubmit={handleSubmit}
        >
            <label
                htmlFor="EMAIL"
                className="flex flex-col gap-2"
            >
                <input
                    className="border-primary rounded-lg p-2 border-2"
                    type="email"
                    name="EMAIL"
                    id="EMAIL"
                    placeholder="Votre adresse email"
                    required
                />
            </label>
            {isLoading ? (
                <span className="text-primary">Envoi en cours...</span>
            ) : (
                <button
                    className="bg-primary text-white rounded-lg p-2"
                    disabled={isLoading}
                    type="submit"
                >
                    Envoyer
                </button>
            )}
        </form>
    );
};
