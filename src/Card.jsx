import React from 'react';
import './Card.css';

const Card = ({imageUrl, title, description}) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1018/300/200',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1021/300/200',
      title: 'Card 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/1024/300/200',
      title: 'Card 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/id/1027/300/200',
      title: 'Card 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        id: 5,
        imageUrl: 'https://picsum.photos/id/1045/300/200',
        title: 'Card 5',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 6,
        imageUrl: 'https://picsum.photos/id/1033/300/200',
        title: 'Card 6',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
      },
      {
        id: 7,
        imageUrl: 'https://picsum.photos/id/1036/300/200',
        title: 'Card 7',
        description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
      },
      {
        id: 8,
        imageUrl: 'https://picsum.photos/id/1039/300/200',
        title: 'Card 8',
        description: 'Fugiat quo voluptas nulla pariatur?'
      },
      
  ];

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
