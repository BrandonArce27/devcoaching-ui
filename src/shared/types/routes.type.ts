import { GlobalRoute, AuthScreen, AppScreen, RootScreen } from "../constants";

export interface RouteParams {
  [key: string]: string | number;
}

export interface NavigationRoute {
  route: GlobalRoute;
  screen: AppScreen | RootScreen;
  params?: RouteParams;
}

interface BaseRoute {
  params?: { [key: string]: string | number };
}

interface AppRoute extends BaseRoute {
  route: GlobalRoute.APP;
  screen: AppScreen;
}

interface AuthRoute extends BaseRoute {
  route: GlobalRoute.AUTH;
  screen: AuthScreen;
}

interface ModalRoute extends BaseRoute {
  route: GlobalRoute.MODAL;
}

interface NotFoundRoute extends BaseRoute {
  route: GlobalRoute.NOT_FOUND;
  screen?: null;
}

export type RouteLink = AppRoute | AuthRoute | ModalRoute | NotFoundRoute;
