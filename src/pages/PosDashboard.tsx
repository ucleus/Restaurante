import Sidebar from '@components/Sidebar';
import TopBar from '@components/TopBar';
import CategoryChip from '@components/CategoryChip';
import MenuCard from '@components/MenuCard';
import OrderList from '@components/OrderList';
import PaymentButtons from '@components/PaymentButtons';

const categories = [
  { id: 1, name: 'Breakfast', count: 4 },
  { id: 2, name: 'Lunch', count: 8 },
  { id: 3, name: 'Dinner', count: 5 },
  { id: 4, name: 'Dessert', count: 6 },
  { id: 5, name: 'Drinks', count: 7 },
  { id: 6, name: 'Specials', count: 3 }
];

const menuItems = [
  { id: 1, name: 'Item 1', price: 9.99, img: '', isVeg: true, hasDiscount: false },
  { id: 2, name: 'Item 2', price: 5.99, img: '', isVeg: false, hasDiscount: true },
  { id: 3, name: 'Item 3', price: 7.49, img: '', isVeg: true, hasDiscount: false },
  { id: 4, name: 'Item 4', price: 11.5, img: '', isVeg: false, hasDiscount: false },
  { id: 5, name: 'Item 5', price: 6.25, img: '', isVeg: true, hasDiscount: true },
  { id: 6, name: 'Item 6', price: 8.0, img: '', isVeg: false, hasDiscount: false },
  { id: 7, name: 'Item 7', price: 4.75, img: '', isVeg: true, hasDiscount: false },
  { id: 8, name: 'Item 8', price: 9.0, img: '', isVeg: false, hasDiscount: false },
  { id: 9, name: 'Item 9', price: 3.5, img: '', isVeg: true, hasDiscount: false }
];

export default function PosDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <TopBar />
        <div className="flex flex-1 overflow-hidden p-4">
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((c) => (
                <CategoryChip key={c.id} name={c.name} count={c.count} />
              ))}
            </div>
            <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {menuItems.map((m) => (
                <MenuCard key={m.id} item={m} />
              ))}
            </div>
          </div>
          <div className="hidden w-80 flex-col gap-4 pl-4 md:flex">
            <OrderList />
            <PaymentButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
