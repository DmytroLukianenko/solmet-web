import ServiceCard from './serviceCard/serviceCard'
import StyledServices from './styledServices'
import tabletSalt from '../../../assets/images/tablet-salt.jpg'
import roadSalt from '../../../assets/images/road-salt.jpg'
import foodSalt from '../../../assets/images/food-salt.jpg'
import animalsSalt from '../../../assets/images/animals-salt.jpg'

const Services = () => {
  const tabletTitle = 'Таблетированная соль'
  const tabletDesc =
    'В полипропиленовых мешках с полиэтиленовым вкладышем по 25 кг.'
  const foodTitle = 'Пищевая соль'
  const foodDesc = 'Соль йодированная в пачках'
  const roadTitle = 'Дорожная соль'
  const roadDesc = 'Соль техническая для посыпки дорог антигололёдная в мешках'
  const animalsTitle = 'Кормовая для зверей'
  const animalsDesc =
    'Изобилие витаминов для ваших животных, добавки по желанию клиента'
  return (
    <>
      <StyledServices>
        <p>Наша продукция</p>
        <ServiceCard
          link={tabletSalt}
          name={tabletTitle}
          description={tabletDesc}
          page="bath"
        ></ServiceCard>
        <ServiceCard
          link={foodSalt}
          name={foodTitle}
          description={foodDesc}
          page="edible"
        ></ServiceCard>
        <ServiceCard
          link={roadSalt}
          name={roadTitle}
          description={roadDesc}
          page="industrial"
        ></ServiceCard>
        <ServiceCard
          link={animalsSalt}
          name={animalsTitle}
          description={animalsDesc}
          page="aft"
        ></ServiceCard>
      </StyledServices>
    </>
  )
}

export default Services
