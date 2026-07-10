type AbsolutePath = `/${string}`;

type RoutePath = { root: AbsolutePath };

export const ROUTE_PATHS = {
  home: { root: "/" },
  dashboard: { root: "/dashboard" },
  bookings: { root: "/bookings" },
  cabins: { root: "/cabins" },
  users: { root: "/users" },
  settings: { root: "/settings" },
  account: { root: "/account" },
  login: { root: "/login" },
} as const satisfies Record<string, RoutePath>;
