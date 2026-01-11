import { HiOutlineLightBulb } from "react-icons/hi2";
import { TitlesPageUI } from "./interface";
import { TITLES_PAGE_STYLES } from "./titlesPageToken";

export function TitlesPage({
  titleA,
  titleB,
  headText,
  isDark = false,
  icon: Icon,
  description,
}: TitlesPageUI) {
  const styles = TITLES_PAGE_STYLES(isDark);

  return (
    <div className={styles.container}>
      <div className="flex items-center gap-3 group mb-4">
        <div className={styles.headIconContainer}>
          {Icon ? (
            <Icon
              className={isDark ? "text-ui-primary" : "text-ui-primary"}
              size={22}
            />
          ) : (
            <HiOutlineLightBulb
              className={isDark ? "text-ui-primary" : "text-ui-primary"}
              size={22}
            />
          )}
        </div>
        <span className={styles.headText}>{headText}</span>
      </div>

      <h2 className="flex flex-col">
        <span className={styles.titleA}>{titleA}</span>
        <span className={styles.titleB}>{titleB}</span>
      </h2>

      <p className={styles.description}>{description}</p>

      <div className={styles.divider} />
    </div>
  );
}