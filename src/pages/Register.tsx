import { FormRow } from "@/components";
import { Button } from "@/components/ui/button";
import { signUpUser } from "@/features/supabaseAuth";

import { Form, redirect } from "react-router-dom";
function Register() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Form
        className="flex flex-col items-center justify-center w-[45rem] max-w-[60rem] space-y-4"
        method="post"
      >
        <h1 className="font-bold text-4xl">
          Welcome Finance Tracker - sign up
        </h1>
        <section className="border-solid border-[1px] border-primary py-4 px-10 rounded-md space-y-4">
          <FormRow labelText="user email" name="email" type="email" />
          <FormRow labelText="password" name="password" type="password" />
          <FormRow labelText="user name" name="userName" type="text" />
          <Button size={"sm"} className="w-full">
            Register
          </Button>
        </section>
      </Form>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const userName = formData.get("userName") as string;
  try {
    const data = await signUpUser(email, password, userName);
    console.log(data);
    return redirect("/");
  } catch (error: any) {
    return { error: error.message };
  }
}
export default Register;
