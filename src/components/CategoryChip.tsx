interface Props {
  name: string;
  count: number;
}

export default function CategoryChip({ name, count }: Props) {
  return (
    <button className="whitespace-nowrap rounded-full bg-brand px-3 py-1 text-white">
      {name} ({count})
    </button>
  );
}
