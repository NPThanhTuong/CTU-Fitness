import Link from "next/link";
import {
  claimNameType,
  expiredJwtTokenCode,
  invalidJwtTokenCode,
  otherErrorJwtTokenCode,
  sessionToken,
  webPaths,
} from "@/utils/constants";
import { List } from "@/components/midleExport";
import { twMerge } from "tailwind-merge";
import { AiOutlineUser } from "react-icons/ai";
import { checkAuth, decodeJwt, deleteCookie } from "@/lib/session";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

function NavList({ className, setOpenNav }) {
  const currentPath = usePathname();
  const [loading, setLoading] = useState(true);
  const [authResutl, setAuthResult] = useState();
  const router = useRouter();
  useEffect(() => {
    const handleAuth = async () => {
      try {
        const authResult = await checkAuth();
        setAuthResult(authResult);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    handleAuth();
  }, []);

  return (
    <List className={className}>
      {webPaths.map((path, index) => (
        <div key={index}>
          {/* Mobile */}
          <Link
            href={path.path}
            key={index}
            className={twMerge(
              "text-gray-800 justify-center items-center divide-y-2 rounded-md hover:text-white hover:bg-primary hover:bg-opacity-100 flex lg:hidden p-4 w-full ",
              path.isButton && "orange_gradient text-white",
              currentPath === path.path && !path.isButton && "text-primary"
            )}
            onClick={() => setOpenNav(false)}
          >
            {path.name.toUpperCase()}
          </Link>

          {/* Desktop */}
          <Link
            key={`${index}__`}
            className={twMerge(
              "hidden lg:block lg:text-center lg:text-xs lg:font-semibold lg:p-3 lg:hover:text-primary lg:hover:cursor-pointer lg:transition-all",
              path.isButton
                ? "lg:bg-primary lg:text-white lg:px-5 lg:py-3 lg:rounded-md lg:hover:scale-105 lg:hover:text-white"
                : "",
              currentPath === path.path && !path.isButton && "text-primary"
            )}
            href={path.path}
          >
            {path.name.toUpperCase()}
          </Link>
        </div>
      ))}

      {loading || (
        <div>
          {/* Mobile */}
          {authResutl.isAuth ? (
            <>
              <Link
                href="/user/profile"
                className="text-gray-800 text-sm justify-center items-center rounded-md hover:text-white hover:bg-primary hover:bg-opacity-100 flex lg:hidden p-4 w-full"
                onClick={() => setOpenNav(false)}
              >
                <AiOutlineUser size="1.5em" />
                <span>Hồ sơ</span>
              </Link>

              <div
                className="text-white uppercase justify-center items-center divide-y-2 rounded-md hover:bg-primary hover:bg-opacity-100 flex lg:hidden p-4 w-full orange_gradient"
                onClick={() => {
                  setOpenNav(false);
                  deleteCookie(sessionToken);
                  setAuthResult({ isAuth: false });
                  router.replace("/signin");
                }}
              >
                <span>Đăng xuất</span>
              </div>
            </>
          ) : (
            <Link
              href="/signin"
              className="text-white justify-center items-center divide-y-2 rounded-md hover:bg-primary hover:bg-opacity-100 flex lg:hidden p-4 w-full orange_gradient"
              onClick={() => setOpenNav(false)}
            >
              ĐĂNG NHẬP
            </Link>
          )}

          {/* Desktop */}
          {authResutl.isAuth ? (
            <Menu>
              <MenuHandler>
                <div className="hidden lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:hover:cursor-pointer lg:transition-all lg:px-5 lg:py-3 lg:rounded-md lg:hover:text-primary lg:flex lg:items-center lg:gap-1">
                  <AiOutlineUser size="1.5em" />
                  <span>{authResutl.user.name}</span>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>
                  <Link href="/user/profile" className="block w-full h-full">
                    Hồ sơ
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    deleteCookie(sessionToken);
                    setAuthResult({ isAuth: false });
                    router.replace("/signin");
                  }}
                >
                  <div>Đăng xuất</div>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link
              className="hidden lg:block lg:text-center lg:text-xs lg:font-semibold lg:p-3 lg:hover:cursor-pointer lg:transition-all lg:bg-primary lg:text-white lg:px-5 lg:py-3 lg:rounded-md lg:hover:scale-105"
              href="/signin"
            >
              ĐĂNG NHẬP
            </Link>
          )}
        </div>
      )}
    </List>
  );
}

export default NavList;
