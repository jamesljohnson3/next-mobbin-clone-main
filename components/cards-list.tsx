import { cn } from "@/lib/utils";
import { CarouselCard } from "./carousels/carousel-card";
import { CheckboxCard } from "./checkbox-card";

interface CardsListProps {
  platform: string;
  feature: string;
}

const GridCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className={cn(
      "grid content-start [--column-gap:12px] md:[--column-gap:24px] gap-x-[--column-gap] gap-y-8 md:gap-y-10 [--min-column-width:169px] md:[--min-column-width:208px] lg:[--min-column-width:243px] [--max-column-count:7] [--total-gap-width:calc((var(--max-column-count)-1)*var(--column-gap))] [--max-column-width:calc((100%-var(--total-gap-width))/var(--max-column-count))] grid-cols-[repeat(auto-fill,minmax(max(var(--min-column-width),var(--max-column-width)),1fr))]"
      // "max-sm:[&>*:nth-child(n+5)]:hidden max-md:[&>*:nth-child(n+7)]:hidden max-xl:[&>*:nth-child(n+9)]:hidden"
    )}
  >
    {children}
  </div>
);

const FeatureComponent = ({ feature }: { feature: string }) => {
  switch (feature) {
    case "apps":
      return <AppsComponent />;
    case "screens":
      return <ScreensComponent />;
    case "ui-elements":
      return <UiElementsComponent />;
    case "flows":
      return <FlowsComponent />;
    default:
      return null; // Vous pouvez également retourner un composant par défaut ou ne rien rendre.
  }
};

const AppsComponent = () => (
  <GridCard>
    {Array.from({ length: 10 }).map((_, index) => (
      <CarouselCard key={index} />
    ))}
  </GridCard>
);

const ScreensComponent = () => (
  <GridCard>
    {Array.from({ length: 10 }).map((_, index) => (
      <CheckboxCard key={index} id={index} />
    ))}
  </GridCard>
);

const UiElementsComponent = () => (
  <GridCard>
    {Array.from({ length: 10 }).map((_, index) => (
      <CheckboxCard key={index} id={index} />
    ))}
  </GridCard>
);

const FlowsComponent = () => (
  <GridCard>
    {Array.from({ length: 10 }).map((_, index) => (
      <CarouselCard key={index} />
    ))}
  </GridCard>
);

export function CardsList({ platform, feature }: CardsListProps) {
  return <FeatureComponent feature={feature} />;
}
