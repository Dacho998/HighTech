import { Card } from './services';
import virusi  from "../../assets/servicesAssets/virusi.png"
import popravka from "../../assets/servicesAssets/popravka.png"
import optimizacija from "../../assets/servicesAssets/optimizacija.png"
import hardverski from "../../assets/servicesAssets/hardverski.png"
import web from "../../assets/servicesAssets/web.png"

export const servicesData = [
  {
    imgSrc: virusi,
    title: 'Безбедносно Чистење на Системот',
    subtitle: 'Антивирусно скенирање и заштита',
    description: 'Ги отстрануваме вирусите, малициозниот софтвер и ја зајакнуваме безбедноста на вашиот компјутер.',
  },
  {
    imgSrc: popravka,
      title: 'Поправка и Надградба на Компјутери',
    subtitle: 'Брза дијагностика и професионална услуга',
    description: 'Нудиме целосна поправка, замена на делови и надградба за подобри перформанси.',
  },
  {
    imgSrc: optimizacija,
    title: 'Инсталација и Подесување на Софтвер',
    subtitle: 'Конфигурација по мерка за вашите потреби',
    description: 'Инсталираме оперативни системи, драјвери и програми со прецизно подесување и оптимална функционалност.',
  },
   {
    imgSrc: hardverski,
    title: 'Техничка Дијагностика и Решавање',
    subtitle: 'Хардверски и Софтверски Интервенции',
    description: 'Решаваме широк спектар на проблеми – од неработечки компоненти до системски грешки и замрзнувања.',
  },
 {
  imgSrc: web,
  title: 'Веб Решенија',
  subtitle: 'Дизајн и Развој на Веб Страници',
  description: 'Креираме модерни и респонзивни веб страници прилагодени на вашиот бренд – од персонални до бизнис и портфолио сајтови.',
}



];

export const ServicesPage = () => {
  return (
    <div className="services-container">
      <div className="cards-wrapper">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};