import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/Eventos.css"; // Reusing Eventos css for now
import { getEvents, API_URL } from "../services/api";

function Agenda() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEvents();
                if (data && data.data) {
                    const formattedEvents = data.data.map(item => {
                        // Strapi v5 flat structure
                        const { title, description, date, cover } = item;

                        // Image handling
                        let imageUrl = null;
                        if (cover && Array.isArray(cover) && cover.length > 0) {
                            imageUrl = cover[0].url;
                        } else if (cover && cover.url) {
                            imageUrl = cover.url;
                        }

                        const fullImageUrl = imageUrl ? `${API_URL}${imageUrl}` : null;

                        // Format date
                        const eventDate = date ? new Date(date).toLocaleDateString('pt-BR') : "Data a definir";

                        // Description handling
                        let descText = "Sem descrição";
                        if (typeof description === 'string') {
                            descText = description;
                        } else if (Array.isArray(description)) {
                            descText = description[0]?.children?.[0]?.text || "Sem descrição";
                        }

                        return {
                            id: item.id,
                            title: title,
                            release_date: eventDate,
                            description: descText,
                            image: fullImageUrl
                        };
                    });
                    setEvents(formattedEvents);
                }
            } catch (error) {
                console.error("Failed to load events", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div className="loading">Carregando agenda...</div>;
    }

    return (
        <div className="eventos container">
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                Agenda do Site CA
            </h1>

            <div className="cards-grid">
                {events.map((event) => (
                    <Card card={event} key={event.id} />
                ))}
            </div>

            {events.length === 0 && (
                <p style={{ textAlign: "center" }}>
                    Não há eventos agendados no momento.
                </p>
            )}
        </div>
    );
}

export default Agenda;
