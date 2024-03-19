const routes = {
  home: "/",
  about: "/about",
  logements: (id = ":id") => `/logements/${id}`,
};

export default routes;
