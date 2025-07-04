import { useCartStore } from '@store/useCartStore';
import QuantityStepper from './QuantityStepper';

export default function OrderList() {
  const { items, updateQty, removeItem, getTotal, getTax } = useCartStore();

  const total = getTotal();
  const tax = getTax();

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-2">
          <span className="flex-1">{item.name}</span>
          <QuantityStepper qty={item.qty} onChange={(q) => updateQty(item.id, q)} />
          <span className="w-12 text-right text-sm">${(item.price * item.qty).toFixed(2)}</span>
          <button onClick={() => removeItem(item.id)}>x</button>
        </div>
      ))}
      <div className="mt-auto flex justify-between pt-2 text-sm">
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
