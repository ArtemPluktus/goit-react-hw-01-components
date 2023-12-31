import PropTypes from 'prop-types';
import { Statistics } from './Statistics.jsx';
import css from './Stats.module.css';

export const StatsList = ({ title, statsData }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {statsData.map(({ id, label, percentage }) => {
          return <Statistics key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

StatsList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
