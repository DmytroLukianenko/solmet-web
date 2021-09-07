import Header from '../header/header'
import StyledTabletPage from './StyledTabletPage'
import tabletSalt from '../../assets/images/tablet-salt.jpg'

const BathPage = () => {
  return (
    <StyledTabletPage className="container">
      {/* <Header /> */}
      <h2>Соль таблетированная «Экстра» для водоподготовки в мешках 25 кг</h2>
      <img src={tabletSalt}></img>
      <p>Покупая у нас вы получите:</p>
      <ul>
        <li>
          <p>
            Таблетированная соль с чистотой NaCI 99,50% позволяет регенерировать
            ионообменную смолу 6% раствором NaCI, что позволяет экономить расход
            соли в 2-2,5 раза (с обычной сыпучей солью раствор для регенерации
            делается 12-14 %)
          </p>
        </li>
        <li>
          <p>
            Равномерное растворение таблеток соли (эффект таяния) обеспечивает
            образование насыщенного раствора без дополнительного перемешивания,
            ручного труда и иного вмешательства в процесс ионообмена.
          </p>
        </li>
        <li>
          <p>
            Солевые таблетки по сравнению с обычной сыпучей солью такой же
            чистоты не каменеет и не слеживается и как следствие – не образуется
            нерастворимых осадков в баке- солерастворителе, что обеспечивает
            экономию в потреблении соли порядка 30 % (такой же чистоты как наша)
            в зависимости от типа оборудования, установленного на Вашем
            предприятии.
          </p>
        </li>
        <li>
          <p>
            Технологам будет легче контролировать этапы растворения соли в воде,
            т.к. наша соль в таблетках всегда растворяется с одинаковой
            скоростью в одинаковой по жесткости воде (в отличии от сыпучей
            соли).
          </p>
        </li>
      </ul>
    </StyledTabletPage>
  )
}
export default BathPage
