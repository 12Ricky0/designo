"use server";
import { z } from "zod";

export default async function getData(formdata: FormData) {
  const UserData = z.object({
    name: z.string(),
    email: z.string(),
    number: z.number(),
    message: z.string(),
  });
  const data = UserData.parse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    number: Number(formdata.get("phone")),
    message: formdata.get("message"),
  });
  const { name, email, number, message } = data;
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
}
