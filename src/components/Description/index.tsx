interface DescriptionProps {
  myDescription: string;
}

export default function Description({ myDescription }: DescriptionProps) {
  if (!myDescription) return null;
  return (
    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
      {myDescription}
    </p>
  );
}
