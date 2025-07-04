import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  qty: number;
  onChange: (qty: number) => void;
}

export default function QuantityStepper({ qty, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-full bg-brand p-1 text-white" onClick={() => onChange(qty - 1)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>{qty}</span>
      <button className="rounded-full bg-brand p-1 text-white" onClick={() => onChange(qty + 1)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
