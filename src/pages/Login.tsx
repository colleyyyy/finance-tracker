import { FormRow } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, redirect } from "react-router-dom";
import googlePng from "../assets/google.png";
import { signInUser } from "@/features/supabaseAuth";
function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Form
        className="flex flex-col items-center justify-center w-[45rem] max-w-[60rem] space-y-4"
        method="post"
      >
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
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    const res = await signInUser(email, password);
    if (res.error) {
      return { error: res.error };
    }
    return redirect("/");
  } catch (error: any) {
    return { error: error.message };
  }
}
export default Login;
