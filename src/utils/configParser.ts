type Requisition = {
  method: string;
  url: string;
};

type OriginalConfig = {
  baseUrl: string;
  routes: Requisition[];
};

type RoutesParsed = {
  name: string;
  routes: Requisition[];
};

type ConfigParsed = {
  routes: RoutesParsed[];
};

function configParser(originalConfig: OriginalConfig): ConfigParsed {
  const routes = originalConfig.routes.reduce<RoutesParsed[]>(
    (parsedRoutes, route) => {
      const grupo = `/${route.url.split('/')[1]}`;
      const findIndex = parsedRoutes.findIndex(
        (routeIndex) => routeIndex.name === grupo,
      );

      if (findIndex >= 0) {
        parsedRoutes[findIndex].routes.push(route);
      } else {
        parsedRoutes.push({
          name: grupo,
          routes: [route],
        });
      }
      return parsedRoutes;
    },
    [],
  );

  return {
    routes,
  };
}

export default configParser;
