export function Button({ className="", children, onClick, variant="default", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition";
  const styles = variant==="outline" ? "border border-white/20 bg-transparent hover:bg-white/10" : "bg-accent hover:bg-accent/80 text-white shadow";
  return (<button onClick={onClick} className={base+" "+styles+" "+className} {...props}>{children}</button>);
}
