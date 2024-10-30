// Here, we are using clerk webhook to send the user data whenever a new user signed up.
// We are using proxy to create temporary public domain, so that clerk knows where to send the data.

import prisma from "@/lib/prisma";

export const POST = async (req: Request) => {
  const { data } = await req.json();
  console.log("clerk webhook data recieved", data);

  const email = data.email_addresses[0].email_address;
  const firstname = data.first_name;
  const lastname = data.last_name;
  const id = data.id;

  await prisma.user.create({
    data: {
      email,
      firstname,
      lastname,
      id,
    },
  });

  return new Response("webhook recieved", { status: 200 });
};
