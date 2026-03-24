// src/pages/Agenda.jsx

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Calendar from "../components/Calendar";
import "../css/Produtos.css"; // Usando o CSS de produtos que já tem o grid e variáveis corrigidos
import { getEvents, API_URL } from "../services/api";

function Agenda() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('list'); // 'list' | 'calendar'

    // Estado para o Modal de Zoom na imagem e Modal de Detalhes
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedDayEvents, setSelectedDayEvents] = useState(null); // To show daily events modal

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const handleDayClick = (day, dayEvents) => {
        setSelectedDayEvents({
            title: `Eventos do dia ${day}`,
            events: dayEvents
        });
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
                            id: item.id || item.documentId,
                            title: title,
                            subtitle: subtitleText, // Usando subtitle
                            description: descText,
                            image: fullImageUrl,
                            rawDate: date ? new Date(date) : new Date(8640000000000000), // Push invalid dates to the end
                            time: date ? new Date(date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : null,
                            location: item.location || "A confirmar"
                        };
                    });

                    // Sort events by closest upcoming date
                    const sortedEvents = formattedEvents.sort((a, b) => a.rawDate - b.rawDate);

                    setEvents(sortedEvents);
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
            <h1 className="produtos-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span>Agenda CA</span>

                {/* View Toggle */}
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '1rem' }}>
                    <button
                        onClick={() => setViewMode('list')}
                        style={{
                            padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #B35A22', cursor: 'pointer',
                            backgroundColor: viewMode === 'list' ? '#B35A22' : 'transparent',
                            color: viewMode === 'list' ? '#fff' : '#B35A22',
                            transition: 'all 0.2s', fontWeight: 'bold'
                        }}
                    >
                        Ver em Lista
                    </button>
                    <button
                        onClick={() => setViewMode('calendar')}
                        style={{
                            padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #B35A22', cursor: 'pointer',
                            backgroundColor: viewMode === 'calendar' ? '#B35A22' : 'transparent',
                            color: viewMode === 'calendar' ? '#fff' : '#B35A22',
                            transition: 'all 0.2s', fontWeight: 'bold'
                        }}
                    >
                        Ver Calendário
                    </button>
                </div>
            </h1>

            {/* List View */}
            {viewMode === 'list' && (
                <>
                    <div className="cards-grid">
                        {events.map((event) => (
                            <Card
                                card={event}
                                key={event.id}
                                showButton={false} // Mantendo consistência com Produtos (sem botão)
                                onImageClick={handleImageClick}
                                onClick={() => setSelectedEvent(event)}
                            />
                        ))}
                    </div>

                    {events.length === 0 && (
                        <div className="produtos-empty">
                            <h2>Nenhum evento agendado</h2>
                            <p>Fique ligado nas nossas redes sociais para novidades!</p>
                        </div>
                    )}
                </>
            )}

            {/* Calendar View */}
            {viewMode === 'calendar' && (
                <div style={{ paddingBottom: '2rem' }}>
                    <Calendar events={events} onDayClick={handleDayClick} />
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

            {/* Modal de Detalhes do Evento */}
            <Modal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                title={selectedEvent?.title || "Detalhes do Evento"}
            >
                {selectedEvent && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {selectedEvent.image && (
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', backgroundColor: '#f9fafb', borderRadius: '8px', padding: '1rem' }}
                            />
                        )}
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#B35A22' }}>
                                📅 {selectedEvent.subtitle.replace('Data: ', '')}
                                {selectedEvent.time !== '00:00' && selectedEvent.time ? ` às ${selectedEvent.time}` : ''}
                            </span>
                            <span style={{ fontSize: '1rem', color: '#6b7280' }}>
                                📍 {selectedEvent.location}
                            </span>
                        </div>
                        <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                            <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{selectedEvent.description}</p>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Modal de Eventos do Dia (Calendário) */}
            <Modal
                isOpen={!!selectedDayEvents}
                onClose={() => setSelectedDayEvents(null)}
                title={selectedDayEvents?.title || "Eventos"}
            >
                {selectedDayEvents && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
                        {selectedDayEvents.events.map(ev => (
                            <div key={ev.id} style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem', marginBottom: '1rem' }} onClick={() => setSelectedEvent(ev)}>
                                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', cursor: 'pointer' }}>{ev.title}</h4>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                                    <span>🕒 {ev.time || "A definir"}</span>
                                    <span>📍 {ev.location}</span>
                                </div>
                                <button
                                    style={{ background: 'none', border: 'none', padding: 0, color: '#B35A22', cursor: 'pointer', fontWeight: 'bold' }}
                                    onClick={() => { setSelectedDayEvents(null); setSelectedEvent(ev); }}
                                >
                                    Ver mais detalhes &raquo;
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Agenda;
