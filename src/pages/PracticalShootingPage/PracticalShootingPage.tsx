import React from 'react';
import style from './PracticalShooting.module.scss';
import { practicalShootingCards } from './practicalShootingData';
import { ReachUs } from '../../shared/ui/ReachUs';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';
import { InfoCard } from '../../shared/ui/InfoCard';

// ─── Page ─────────────────────────────────────────────────────
export const PracticalShootingPage: React.FC = () => {
	return (
		<main className={style.page}>
			<section className={style.section}>
				{/* Background effects */}
				<div className={style.bg}>
					<div className={style.bgGrid} />
					<div className={style.blob1} />
					<div className={style.blob2} />
					<div className={style.blob3} />
				</div>

				<div className={style.container}>
					{/* Header — как на других страницах */}
					<div className={style.head}>
						<InfoPagesTitle
							title="Практическая стрельба"
							description="Программы и тренировки по практической стрельбе IPSC. Все программы сертифицированы ОСОО «ФПСР»."
						/>
						<div className={style.headBadge}>
							<span>С 2015 года</span>
						</div>
					</div>

					{/* Grid с InfoCard */}
					<div className={style.grid}>
						{practicalShootingCards.map((card) => (
							<InfoCard
								key={card.id}
								title={card.title}
								description={card.description}
								features={card.features}
								price={card.price}
								buttonText="Узнать больше"
								buttonLink="/contacts"
								variant="light"
							/>
						))}
					</div>
				</div>
			</section>
			<ReachUs />
		</main>
	);
};
