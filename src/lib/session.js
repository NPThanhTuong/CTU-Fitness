"use server";
import {
  claimEmailType,
  claimNameType,
  claimRoleType,
  expiredJwtTokenCode,
  invalidJwtTokenCode,
  otherErrorJwtTokenCode,
  sessionToken,
} from "@/utils/constants";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
const jwt = require("jsonwebtoken");

// export async function encrypt(payload) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("10d")
//     .sign(encodedKey);
// }

// export async function decrypt(session) {
//   try {
// const { payload } = await jwtVerify(session, encodedKey, {
//   algorithms: ["HS256"],
// });
//     return payload;
//   } catch (error) {
//     console.log("Failed to verify session");
//   }
// }

export async function createSession(name, data, expiredAt) {
  const expiresAt =
    expiredAt || new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
  // const session = await encrypt(data);

  cookies().set(name, data, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

// export async function updateSession(name) {
//   const session = cookies().get(name).value;
//   const payload = await decrypt(session);

//   if (!session || !payload) {
//     return null;
//   }

//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

//   cookies().set(name, session, {
//     httpOnly: true,
//     secure: true,
//     expires: expires,
//     sameSite: "lax",
//     path: "/",
//   });
// }

export async function deleteSession(name) {
  cookies().delete(name);
}

// export const verifySession = async () => {
//   const cookie = cookies().get(sessionToken).value;
//   const session = await decrypt(cookie);

//   if (!session.accountId) {
//     redirect("/login");
//   }

//   return { isAuth: true, accountId: session.accountId };
// };

export const getCookieValue = async (name) => {
  const cookie = cookies().get(name).value;
  return cookie;
};

export const deleteCookie = async (name) => {
  cookies().delete(name);
};

export async function decodeJwt(token) {
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return expiredJwtTokenCode;
    } else if (error.name === "JsonWebTokenError") {
      return invalidJwtTokenCode;
    } else return otherErrorJwtTokenCode;
  }
}
export async function checkAuth() {
  try {
    const token = await getCookieValue(sessionToken);
    if (!token) return { isAuth: false };
    const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;
    const decoded = jwt.verify(token, secretKey);
    return {
      isAuth: true,
      user: {
        accountId: decoded["accountId"],
        avatar: decoded["avatar"],
        name: decoded[claimNameType],
        email: decoded[claimEmailType],
        role: decoded[claimRoleType],
        customerId: decoded?.customerId,
        employeeId: decoded?.employeeId,
        token,
      },
    };
  } catch (error) {
    return { isAuth: false };
  }
}
