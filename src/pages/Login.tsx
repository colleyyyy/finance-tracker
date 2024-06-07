import { FormRow } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form } from "react-router-dom";
import googlePng from "../assets/google.png";
function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Form className="flex flex-col items-center justify-center w-[45rem] max-w-[60rem] space-y-4">
        <h1 className="font-bold text-4xl">Welcome Finance Tracker</h1>
        <section className="border-solid border-[1px] border-primary py-4 px-10 rounded-md space-y-4">
          <FormRow labelText="user email" name="email" type="email" />
          <FormRow labelText="password" name="password" type="password" />
          <Button size={"sm"} className="w-full">
            Login
          </Button>
          <Separator className="my-4 h-[3px] bg-slate-400  " />
          <div className="flex items-center">
            <img src={googlePng} alt="google icon" className="h-4 w-4 ml-2" />
            <Button variant={"secondary"}>Continue with Google</Button>
          </div>
        </section>
      </Form>
    </div>
  );
}

export default Login;
