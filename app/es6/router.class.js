
/*
 * Minimal Router that registers client routes and emits location changes.
 * Route specific handling is left to your implementation.
 */
export class MinimalRouter {
    routes; // Acts as a registry for actionable routes.
  
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

    handleRoute(path) {
      console.log(path);
    }

    sync() {
      this.handleRoute(this.getPath());
    }
  }