import SidebarFilters from "./sidebar-filters";
import SidebarSearchBar from "./sidebar-search-bar";

export default function SidebarHeader() {
  return (
    <div className="fixed top-0 inset-x-0 z-10 bg-background px-4 pb-4 border-b">
      <span className="inline-block rounded-md bg-primary my-4 px-3 py-1 text-sm font-semibold text-white">
        MyApp
      </span>
      <div className="mb-4">
        <SidebarSearchBar />
      </div>
      <div>
        <SidebarFilters />
      </div>
    </div>
  );
}