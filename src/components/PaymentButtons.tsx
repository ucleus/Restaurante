import CTAButton from './CTAButton';

export default function PaymentButtons() {
  return (
    <div className="flex gap-2">
      <CTAButton label="Pay Cash" onClick={() => {}} className="flex-1" />
      <CTAButton label="Pay Card" onClick={() => {}} className="flex-1" />
    </div>
  );
}
