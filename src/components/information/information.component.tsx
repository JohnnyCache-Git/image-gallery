import { arrayIsNullOrEmpty } from "../../utils/array.utils";
import { Detail, DetailData } from "../detail/detail.component";
import { Title } from "../title/title.component";
import { Underscore } from "../underscore/underscore.component";

type InformationProps = {
  /**
   * The details to render under the information title.
   * Nothing render if details is null or empty array.
   */
  details: DetailData[];

  /**
   * The CSS class(es) to be applied to the component.
   */
  className?: string;
};

/**
 * Renders an information component with a title and the list of details.
 */
export const Information: React.FC<InformationProps> = ({
  details,
  className,
}) => {
  if (arrayIsNullOrEmpty(details)) {
    return null;
  }

  return (
    <div className={className}>
      <Underscore>
        <Title>Information</Title>
      </Underscore>
      {details.map((detail) => (
        <Underscore key={detail.name}>
          <Detail data={detail} />
        </Underscore>
      ))}
    </div>
  );
};
