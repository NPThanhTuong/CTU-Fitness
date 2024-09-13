import { sessionToken } from "@/utils/constants";
import { cookies } from "next/headers";

function TestPage() {
  const cookieStore = cookies(); // Access cookies
  const jwtToken = cookieStore.get(sessionToken)?.value;

  if (!jwtToken) {
    // Redirect or handle unauthenticated access
    return <p>You need to log in first.</p>;
  }

  return (
    <div>
      <h1>Protected Dashboard</h1>
      <p>JWT Token (Server-Side): {jwtToken}</p>
    </div>
  );
}

export default TestPage;
