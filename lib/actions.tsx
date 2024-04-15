"use server";
import { z } from "zod";

const UserData = z.object({
  name: z.string({
    required_error: "Can't be empty!",
  }),
  email: z.string({
    required_error: "Can't be empty!",
  }),
  number: z.coerce.number(),
  message: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string | null;
};

export default async function getData(prevState: State, formdata: FormData) {
  const validatedData = UserData.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    number: formdata.get("phone"),
    message: formdata.get("message"),
  });

  if (!validatedData.success) {
    return {
      errors: !validatedData.error.flatten().fieldErrors,
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
    const dat = await response.json();
    console.log(dat);
  } catch (error) {
    console.error(error);
    return {
      message: "Error: Failed to submit data.",
    };
  }
}