
import HomeService from "./homeService";

class APIServiceInstances {
  HomeServiceRunner!: HomeService;
  baseURL: string = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

  getHomeRunner() {
    if (!this.HomeServiceRunner) {
      this.HomeServiceRunner = new HomeService(this.baseURL);
    }
    return this.HomeServiceRunner;
  }
}

const APIService = new APIServiceInstances();

export default APIService;
