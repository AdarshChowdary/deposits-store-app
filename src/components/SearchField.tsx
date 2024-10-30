import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchField() {
  return (
    // We haven't written the "onsubmit" function to search the deposits.
    <form method="GET" action="/search">
      <div className="relative">
        <Input name="q" placeholder="Search" className="pe-10" />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
      </div>
    </form>
  );
}
