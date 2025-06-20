import './Services.css';

interface Props {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Card = ({ imgSrc, title, subtitle, description }: Props) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img" />
      <div className="card-content">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};