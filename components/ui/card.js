export function Card({ className="", children }) { return <div className={"rounded-2xl bg-white/5 border border-white/10 p-6 "+className}>{children}</div>; }
export function CardContent({ className="", children }) { return <div className={className}>{children}</div>; }
