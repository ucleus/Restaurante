import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faChair,
  faCalendarCheck,
  faTruck,
  faFileInvoiceDollar,
  faCog
} from '@fortawesome/free-solid-svg-icons';

const links = [
  { icon: faUtensils, label: 'Menu' },
  { icon: faChair, label: 'Table Service' },
  { icon: faCalendarCheck, label: 'Reservation' },
  { icon: faTruck, label: 'Delivery' },
  { icon: faFileInvoiceDollar, label: 'Accounting' },
  { icon: faCog, label: 'Settings' }
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col bg-white/90 p-4 backdrop-blur md:flex">
      <h1 className="mb-6 text-2xl font-bold text-brand">POS</h1>
      <nav className="flex flex-col gap-4">
        {links.map((l) => (
          <button
            key={l.label}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-brand hover:text-white"
          >
            <FontAwesomeIcon icon={l.icon} />
            {l.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
