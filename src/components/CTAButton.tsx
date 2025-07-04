interface Props {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function CTAButton({ label, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-brand px-3 py-2 text-white shadow ${className || ''}`}
    >
      {label}
    </button>
  );
}
