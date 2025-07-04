import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import CTAButton from './CTAButton';

interface Item {
  id: number;
  name: string;
  price: number;
  img: string;
  isVeg: boolean;
  hasDiscount: boolean;
}

interface Props {
  item: Item;
}

export default function MenuCard({ item }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur">
      <div className="relative h-24 rounded-md bg-gray-200" />
      <div className="flex items-center justify-between">
        <span className="font-medium">{item.name}</span>
        {item.hasDiscount && <FontAwesomeIcon icon={faTags} className="text-brand" />}
      </div>
      <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
      <CTAButton label="Add" onClick={() => {}} />
    </div>
  );
}
