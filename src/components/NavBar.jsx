import { Cart } from "./Cart";

export function NavBar() {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <span>Logo</span>
      <div>
        <Cart />
      </div>
    </div>
  );
}
