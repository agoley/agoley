/*
 * Minimal Router that registers client routes and emits location changes.
 * Route specific handling is left to your implementation.
 */
export class MinimalRouter {
  routes; // Acts as a registry for actionable routes. Contains two fields path, and cb (callback).

  /**
   * Constructs a new router.
   * @param {*} e
   */
  constructor() {

    this.routes = [];
  }

  /**
   * Add a new route.
   * @param {*} route
   */
  addRoute(route) {

    if (!route.path) {

      console.error('MinimalRouter: Route missing path field');
    }

    if (!route.cb) {

      console.log('MinimalRouter: Route missing cb field');
    }
    this.routes.push(route);
  }

  /**
   * Remove a route.
   * @param {*} route
   */
  removeRoute(route) {}

  /**
   * Change the window location to the given route and emit the new location.
   * @param {*} path
   */
  navigateByURL(path) {

    window.history.pushState({}, path, window.location.origin + path);
    this.handleRoute(path);
  }

  /**
   * return an array with dynamic portions of the route.
   * @returns {Array} params
   */
  getParams() {

    return [];
  }

  getPath() {

    return window.location.pathname;
  }

  doesRouteMatch(registeredRoute, checkRoute) {
    if (registeredRoute === checkRoute) {
      return true;
    }

    // Not sure what I was doing here, but it doesn't seem necessary.
    // The if in the for loop ignores any * path in the registered route.
    
    // const wildcardRegex = /(\w+)/g
    // r1.replace(wildcardRegex, '*');

    const splitPath1 = registeredRoute.split('/');
    const splitPath2 = checkRoute.split('/');

    if (splitPath1.length != splitPath2) {
      return false;
    }

    for (let i = 0; i < splitPath1.length; i++) {
      if (splitPath1[i] != '*' && splitPath1[i] != splitPath2[i]) {
        return false;
      }
    }

  }

  handleRoute(path) {

    for (let i = 0; i < this.routes.length; i++) {

      if (this.doesRouteMatch(this.routes[i].path, path)) {

        this.routes[i].cb(path);
        return;
      }
    }

    console.error('MinimalRouter: No route found for path ' + path);
  }

  sync() {
    console.log("sync");
    setTimeout(() => {
      this.handleRoute(this.getPath());
    }, 100);
  }
}
