import { Sparkles } from "lucide-react"
interface KeywordsProps {
    id:string; 
    label:string;
}
const keywordsData: KeywordsProps[] = [
    { id: "1", label: "men's fashion" },
    { id: "2", label: "winter hat" },
    { id: "3", label: "colorful accessory" },
    { id: "4", label: "warm headwear" },

]
export const KeywordSection: React.FC = () => {
  return (
    <section className="p-6 font-sans">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">Keywords</h2>
      
      <div className="flex flex-wrap gap-3">
        {keywordsData.map((keyword) => (
          <button
            key={keyword.id}
            className="group flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition-all hover:bg-slate-50 active:scale-95"
          >
            <Sparkles
              size={16}
              className="text-slate-400 group-hover:text-blue-500" 
            />
            <span className="text-sm font-medium text-slate-600">
              {keyword.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
