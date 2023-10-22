import styles from "./CountryItem.module.css";
// 🌏🌏[COUNTRY LIST]🌏🌏
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
