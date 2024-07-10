import { AbilityDescription } from "./ability-description";

import "./abilities.css";
import { components, foundations, gettingStarted } from "../../assets";

export const AbilitiesDescription = () => (
  <div className="abilities-description">
    <AbilityDescription
      title="Getting started"
      imageSrc={gettingStarted}
      linkHref="https://github.com/mondaycom/vibe#readme"
    >
      Instructions and welcome to the AMA design system
    </AbilityDescription>
    <AbilityDescription
      title="Foundations"
      imageSrc={foundations}
      linkHref="/?path=/docs/foundations-colors--docs"
    >
      All information about colors, typography, spacing, and icons
    </AbilityDescription>
    <AbilityDescription
      title="Components"
      imageSrc={components}
      linkHref="/?path=/docs/components-atoms-button--docs"
    >
      All the information and guidelines you’ll ever need on each component
    </AbilityDescription>
  </div>
);
