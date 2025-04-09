export default async (req: Request) => {
  return new Response(JSON.stringify({ message: 'Hello from Deno Deploy!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
