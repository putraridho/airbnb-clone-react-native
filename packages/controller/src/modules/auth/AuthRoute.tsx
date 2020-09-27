import React, { useCallback } from "react";
import { ChildProps } from "react-apollo";
import { RouteProps, Route, RouteComponentProps, Redirect } from "react-router";
import gql from "graphql-tag";
import { MeQuery } from "schemaTypes";
import { useQuery } from "@apollo/client";

type Props = RouteProps;

const ME_QUERY = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

export const AuthRoute = (
  props: ChildProps<Props, MeQuery>
): React.ReactElement => {
  const { loading, data } = useQuery<MeQuery>(ME_QUERY);

  const renderRoute = useCallback(
    (routeProps: RouteComponentProps<{}>) => {
      if (loading || !data) {
        return null;
      }

      if (!data.me) {
        return <Redirect to="/login" />;
      }

      const Component = props.component as any;

      return <Component {...routeProps} />;
    },
    [props.component, data, loading]
  );

  const { data: _, component: __, ...rest } = props;

  return <Route {...rest} render={renderRoute} />;
};
