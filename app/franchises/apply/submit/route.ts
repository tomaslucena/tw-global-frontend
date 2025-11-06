import { NextResponse } from "next/server"

export async function POST(request: Request) {

  const data = await request.json()

  // save to backend
  const submit = await fetch(process.env.API_ENDPOINT + 'franchise-contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.API_TOKEN,
    },
    body: JSON.stringify(data)
  })

  const result = await submit.json()
  return NextResponse.json(result)
}