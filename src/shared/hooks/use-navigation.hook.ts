import { useRouter } from "next/router";

import { NavigationRoute, RouteParams } from "@/shared/types";

import { GlobalRoute, AppScreen } from "@/shared/constants";

const useNavigation = () => {
  const history = useRouter();

  const formatRouteParams = (params: RouteParams) => {
    return Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
  };

  const push = (routeLink: NavigationRoute) => {
    let path;
    if (
      routeLink.route === GlobalRoute.APP &&
      routeLink.screen === AppScreen.ROOT
    ) {
      path = "/";
    } else {
      path = `/${routeLink.route}/${routeLink.screen}`;
    }

    if (routeLink.params) {
      const queryString = formatRouteParams(routeLink.params);
      path += `?${queryString}`;
    }

    history.push(path);
  };

  return { push };
};

export default useNavigation;
