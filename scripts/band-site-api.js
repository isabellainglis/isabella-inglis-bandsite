const API_KEY = "d07d1e8d-6301-4bcf-b713-53d5ff9dedc5";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  async getComments() {
    const comments = await axios.get(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );
    return comments.data;
  }

  async postComment(comment) {
    const newComment = await axios.post(
      `${this.baseUrl}comments?api_key=${this.apiKey}`,
      comment
    );
    return newComment.data;
  }
}
