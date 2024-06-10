import { Button } from "./ui/button";

interface Props {
  userName?: string;
  setShowModal: (v: boolean) => void;
}
function TopHeader({ userName, setShowModal }: Props) {
  return (
    <>
      <header className="padding flex items-center justify-between w-full">
        <div className=" flex items-center justify-center gap-x-4">
          <h1 className="text-4xl font-semibold">
            Finance <span className="text-primary"> Tracker</span>
          </h1>
          <ul className="">
            <Button variant={"secondary"}>Summary</Button>
            <Button variant={"secondary"}>Transaction</Button>
          </ul>
        </div>
        <ul className="flex items-center gap-x-4">
          <Button
            size={"sm"}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Transaction
          </Button>
          <p className="capitalize">
            hello,<span className="font-semibold"> {userName}</span>
          </p>
        </ul>
      </header>
    </>
  );
}
export default TopHeader;
