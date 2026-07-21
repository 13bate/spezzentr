import clsx from 'clsx'
import style from './GiftCardsPage.module.scss'
import { Link } from 'react-router'
import { ReachUs } from '../../shared/ui/ReachUs'

interface Props {
  className?: string
}

export const GiftCardsPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, style.giftCards)}>
      <div className={style.container}>
        {/* ─── Header with Card ─────────────────────────────── */}
        <div className={style.headerRow}>
          {/* Left: Text content */}
          <div className={style.content}>
            <span className={style.badge}>Подарочный сертификат</span>
            <h1 className={style.title}>
              Подарок, который<br />
              <span>попадает в цель</span>
            </h1>
            <p className={style.description}>
              Подарите яркие эмоции — сертификат на стрельбу в современном
              стрелковом центре. Идеальный подарок для тех, кто ценит новые
              впечатления и драйв.
            </p>
            <div className={style.buttonGroup}>
              <Link to="/gift-cards/choose" className={style.primaryBtn}>
                Выбрать сертификат
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/gift-cards/how-it-works" className={style.secondaryBtn}>
                Как это работает
              </Link>
            </div>
          </div>

          {/* Right: Gift Card */}
          <div className={style.mediaContainer}>
            <div className={style.card}>
              <div className={style.cardBg}></div>
              <div className={style.cardStripe}></div>
              <div className={style.cardContent}>
                <div className={style.cardHeader}>
                  <span className={style.cardBrand}>СПЕЦЦЕНТР</span>
                  <span className={style.cardType}>GIFT CARD</span>
                </div>
                <div className={style.cardValue}>
                  <span className={style.amount}>5 000</span>
                  <span className={style.currency}>₽</span>
                </div>
                <div className={style.cardFooter}>
                  <span className={style.cardNumber}>**** **** **** 1234</span>
                  <span className={style.cardExpiry}>12/26</span>
                </div>
              </div>
              <div className={style.gloss}></div>
              <svg className={style.cornerDecor} viewBox="0 0 24 24" fill="none">
                <path d="M2 2L6 2M2 2V6M22 22L18 22M22 22V18M2 22L6 22M2 22V18M22 2L18 2M22 2V6"
                  stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ─── Why This Is a Great Gift ────────────────────── */}
        <div className={style.benefits}>
          <h3 className={style.sectionTitle}>Почему это отличный подарок</h3>
          <div className={style.benefitsGrid}>
            <div className={style.benefitItem}>
              <span className={style.benefitIcon}>✦</span>
              <h4>Яркие впечатления</h4>
              <p>Незабываемый опыт и эмоции от стрельбы в безопасных условиях.</p>
            </div>
            <div className={style.benefitItem}>
              <span className={style.benefitIcon}>✦</span>
              <h4>Безопасность</h4>
              <p>Профессиональные инструкторы и современное оборудование.</p>
            </div>
            <div className={style.benefitItem}>
              <span className={style.benefitIcon}>✦</span>
              <h4>Гибкость</h4>
              <p>Свободный выбор даты и времени для посещения стрелкового комплекса.</p>
            </div>
            <div className={style.benefitItem}>
              <span className={style.benefitIcon}>✦</span>
              <h4>Для каждого</h4>
              <p>Подходит для новичков и опытных стрелков, мужчин и женщин.</p>
            </div>
          </div>
        </div>

        {/* ─── Pricing Plans ────────────────────────────────── */}
        <div className={style.pricing}>
          <h3 className={style.sectionTitle}>Выберите номинал</h3>
          <div className={style.pricingGrid}>
            <div className={style.planCard}>
              <h4>Базовый</h4>
              <div className={style.price}>3 000 ₽</div>
              <Link to="/gift-cards/choose" className={style.planBtn}>Выбрать</Link>
            </div>
            <div className={`${style.planCard} ${style.popular}`}>
              <span className={style.popularBadge}>Популярный</span>
              <h4>Стандарт</h4>
              <div className={style.price}>5 000 ₽</div>
              <Link to="/gift-cards/choose" className={`${style.planBtn} ${style.primary}`}>Выбрать</Link>
            </div>
            <div className={style.planCard}>
              <h4>Оптимальный</h4>
              <div className={style.price}>10 000 ₽</div>
              <Link to="/gift-cards/choose" className={style.planBtn}>Выбрать</Link>
            </div>
            <div className={style.planCard}>
              <h4>Премиум</h4>
              <div className={style.price}>15 000 ₽</div>
              <Link to="/gift-cards/choose" className={style.planBtn}>Выбрать</Link>
            </div>
          </div>
        </div>

        {/* ─── How It Works ──────────────────────────────────── */}
        <div className={style.howItWorks}>
          <h3 className={style.sectionTitle}>Как это работает</h3>
          <div className={style.steps}>
            <div className={style.step}>
              <span className={style.stepNumber}>1</span>
              <h4>Выберите</h4>
              <p>Номинал сертификата и способ получения</p>
            </div>
            <div className={style.step}>
              <span className={style.stepNumber}>2</span>
              <h4>Получите</h4>
              <p>Сертификат на email или в печатном виде</p>
            </div>
            <div className={style.step}>
              <span className={style.stepNumber}>3</span>
              <h4>Подарите</h4>
              <p>Безопасное и яркое приключение</p>
            </div>
            <div className={style.step}>
              <span className={style.stepNumber}>4</span>
              <h4>Используйте</h4>
              <p>Сертификат для записи на стрельбу</p>
            </div>
          </div>
          <div className={style.electronicInfo}>
            <strong>Электронный сертификат</strong>
            <p>Красивый дизайн, уникальный номер и надежная система защиты. Можно распечатать или отправить в электронном виде.</p>
          </div>
        </div>

        {/* ─── Features ──────────────────────────────────────── */}
        <div className={style.features}>
          <div className={style.featureItem}>
            <span className={style.featureIcon}>🛡️</span>
            <h4>Безопасность на первом месте</h4>
            <p>Все занятия проходят под контролем опытных инструкторов.</p>
          </div>
          <div className={style.featureItem}>
            <span className={style.featureIcon}>🔧</span>
            <h4>Современное оборудование</h4>
            <p>Исправное оружие и полный набор снаряжения для комфортной стрельбы.</p>
          </div>
          <div className={style.featureItem}>
            <span className={style.featureIcon}>📍</span>
            <h4>Удобное расположение</h4>
            <p>Легко добраться из любого района города.</p>
          </div>
          <div className={style.featureItem}>
            <span className={style.featureIcon}>💬</span>
            <h4>Есть вопросы?</h4>
            <p>Свяжитесь с нами — мы всегда на связи.</p>
          </div>
        </div>
      </div>
      <ReachUs />
    </div>

  )
}
