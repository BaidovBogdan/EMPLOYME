import { RouteObject } from 'react-router-dom';
import Start from './pages/start/start';

export enum AppRoutes {
  Start = 'start',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.Start]: '/',
};

export const RouterConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.Start]: {
    path: RoutePaths[AppRoutes.Start],
    element: <Start />,
  },
};
