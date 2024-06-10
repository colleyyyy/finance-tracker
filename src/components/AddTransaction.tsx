import FormRow from "./FormRow";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
function AddTransaction({
  setShowModal,
}: {
  setShowModal: (v: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    console.log(formObject);
    form.reset();
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="fixed top-[15%] left-[25%] w-[50vw] h-[30vh] opacity-90 bg-white text-black rounded-md p-4 "
      ref={ref}
    >
      <div className="absolute right-4 top-2 ">
        <X onClick={() => setShowModal(false)} className="cursor-pointer" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 flex flex-col items-center justify-start"
      >
        <select name="type" id="type" className="border p-1 capitalize">
          <option value="expense">expense</option>
          <option value="income">income</option>
        </select>
        <FormRow type="text" name="value" labelText="money" styles="" />
        <select name="category" id="category" className="border p-1 capitalize">
          <option value="food">food</option>
          <option value="utilities">utilities</option>
          <option value="personal">personal</option>
          <option value="subscriptions">subscriptions</option>
          <option value="healthcare">healthcare</option>
          <option value="transportation">transportation</option>
          <option value="wage">wage</option>
        </select>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default AddTransaction;
