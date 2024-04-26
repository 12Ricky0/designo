"use server";
import { z } from "zod";
import { redirect } from "next/navigation";

const UserData = z.object({
  name: z
    .string({
      required_error: "Can't be empty!",
    })
    .min(1, { message: "Can't be empty" }),
  email: z
    .string({
      required_error: "Can't be empty!",
    })
    .email({ message: "Invalid email address" }),
  number: z
    .string({
      required_error: "Can't be empty!",
    })
    .min(10, { message: "Must be 10 characters" })
    .max(10),
  message: z.string(),
});

export interface State {
  errors?: {
    number?: string[];
    name?: string[];
    email?: string[];
  };
  message?: string | null;
}

export async function getData(prevState: State, formdata: FormData) {
  const validatedData = UserData.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    number: formdata.get("phone"),
    message: formdata.get("message"),
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  try {
    const { name, email, number, message } = validatedData.data;

    let body = {
      user: {
        firstName: name,
        phone: number,
        email: email,
        message: message,
      },
    };

    let url =
      "https://api.sheety.co/beab2cddb370211dde126436f6b56800/flightDeals/users";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return {
      message: "Error: Failed to submit data.",
    };
  }
  redirect("/");
  return { ...prevState };
}
