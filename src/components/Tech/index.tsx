import { Badge } from "@/components/ui/badge";

interface TechProps {
  isHighlight?: boolean;
  data: string[];
}

export default function Tech({ isHighlight, data }: TechProps) {
  if (!data || data.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {data.map((item, index) => (
        <Badge key={`${item}-${index}`} variant={isHighlight ? "cyan" : "slate"}>
          {item}
        </Badge>
      ))}
    </div>
  );
}
