import React, { useState } from 'react';

import styles from './home.module.scss';

type Card = {
  description: string;
  id: number;
  title: string;
};

const Home = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [newCard, setNewCard] = useState({ title: '', description: '' });
  const [editingCard, setEditingCard] = useState<Card | null>(null);

  const handleAddCard = () => {
      const newId = cards.length ? cards[cards.length - 1].id + 1 : 1;
      const cardToAdd = { id: newId, ...newCard };
    setCards([...cards, cardToAdd]);
    setNewCard({ title: '', description: '' });
  };

  const handleUpdateCard = () => {
    if (editingCard) {
      setCards(cards.map((card) => (card.id === editingCard.id ? editingCard : card)));
      setEditingCard(null);
    }
  };

  const handleDeleteCard = (id: number) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome!</h1>
      <div className={styles.form}>
        <h2>{editingCard ? 'Update Card' : 'Add a New Card'}</h2>
        <input
          className={styles.input}
          placeholder="Title"
          type="text"
          value={editingCard ? editingCard.title : newCard.title}
          onChange={(error) => {
            const { value } = error.target;
            editingCard
              ? setEditingCard({ ...editingCard, title: value })
              : setNewCard({ ...newCard, title: value });
          }}
        />
        <input
          className={styles.input}
          placeholder="Description"
          type="text"
          value={editingCard ? editingCard.description : newCard.description}
          onChange={(error) => {
            const { value } = error.target;
            editingCard
              ? setEditingCard({ ...editingCard, description: value })
              : setNewCard({ ...newCard, description: value });
          }}
        />
        <button className={styles.button} onClick={editingCard ? handleUpdateCard : handleAddCard}>
          {editingCard ? 'Update Card' : 'Add Card'}
        </button>
        {editingCard ? (
          <button className={`${styles.button} ${styles.cancel}`} onClick={() => setEditingCard(null)}>
            Cancel
          </button>
        ) : null}
      </div>
      <div className={styles.cards}>
        <h2>All Cards</h2>
        {cards.length > 0 ? (
          <ul>
            {cards.map((card) => (
              <li key={card.id} className={styles.card}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button onClick={() => setEditingCard(card)}>Edit</button>
                <button className={styles.delete} onClick={() => handleDeleteCard(card.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cards added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
