// src/pages/Agenda.jsx

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/Produtos.css"; // Usando o CSS de produtos que já tem o grid e variáveis corrigidos
import { getEvents, API_URL } from "../services/api";

function Agenda() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Estado para o Modal de Zoom na imagem
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

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

                        // Formata o subtítulo da mesma forma que Produtos
                        const subtitleText = `Data: ${eventDate}`;

                        return {
                            id: item.id,
                            title: title,
                            subtitle: subtitleText, // Usando subtitle
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
        return <div className="loading" style={{ textAlign: "center", padding: "2rem" }}>Carregando agenda...</div>;
    }

    return (
        <div className="produtos"> {/* Usando a classe 'produtos' para herdar o container centralizado do css */}
            <h1 className="produtos-title">
                Agenda CA
            </h1>

            <div className="cards-grid">
                {events.map((event) => (
                    <Card
                        card={event}
                        key={event.id}
                        showButton={false} // Mantendo consistência com Produtos (sem botão)
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            {events.length === 0 && (
                <div className="produtos-empty">
                    <h2>Nenhum evento agendado</h2>
                    <p>Fique ligado nas nossas redes sociais para novidades!</p>
                </div>
            )}

            {/* Modal de Zoom da Imagem */}
            {selectedImage && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer'
                    }}
                    onClick={closeImageModal}
                >
                    <img
                        src={selectedImage}
                        alt="Zoom do evento"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: '8px',
                            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Agenda;
