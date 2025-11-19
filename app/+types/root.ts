import type { LinksFunction, MetaFunction } from "react-router";

export namespace Route {
  export type LinksFunction = LinksFunction;
  export type MetaFunction = MetaFunction;
  export type ErrorBoundaryProps = { error: unknown };
}
