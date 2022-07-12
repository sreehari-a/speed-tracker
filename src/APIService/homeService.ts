import Runner from "./runner";

class HomeService {
  runner;
  baseURL;
  constructor(baseUrl: string) {
    this.runner = new Runner();
    this.baseURL = baseUrl;
  }
  async getPerformance(params: any) {
    const data: any = await this.runner.performGET(
      `${this.baseURL}`,
      params
    );
    return data;
  }
}
export default HomeService;