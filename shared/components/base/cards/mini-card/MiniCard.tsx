import Link from "next/link";
import { MiniCardUI } from "./interface";
import { MINI_CARD_TOKENS as tokens } from "./miniCardToken";

export function MiniCard({ title, description, cta, icon: Icon }: MiniCardUI) {
  return (
    <Link 
      href={cta.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={tokens.container}
    >
      <Icon className={tokens.icon} aria-hidden="true" />
      <h3 className={tokens.title}>{title}</h3>
      <div className={tokens.descriptionWrapper}>
        <div className={tokens.descriptionContent}>
          <p className={tokens.descriptionText}>
            {description}
          </p>
        </div>
      </div>
      <span className={tokens.cta}>
        {cta.label}
      </span>
    </Link>
  );
}